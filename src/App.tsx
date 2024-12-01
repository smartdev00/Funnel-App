// import { useState } from 'react'
import { evaluation } from "./data/db";
import "./App.css";
import Card from "./components/Card";
import { CheckText } from "./components/CheckText";
import Modal from "./components/Modal";
import { ArrowBack } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import Ground from "./page/Ground";
import PostalInput from "./page/PostalInput";
import RecepientInfor from "./page/RecepientInfor";
import AddressInput from "./page/AddressInput";
import PersonalFinal from "./page/PersonalFinal";
import StairInput from "./page/StairInput";

function App() {
  // const [property, setProperty] = useState<object[]>([]);
  const [modalData, setModalData] = useState<any>();
  const [progress, setProgress] = useState<number>(0);
  const [prev, setPrev] = useState<any>([]);

  const [testCheckValue, setTestCheckValue] = useState<boolean>(false);

  useEffect(() => {
    setProgress(prev.length * 5 + 5);
    if (modalData?.layer === "final") setProgress(100);
    console.log(prev);
  }, [prev]);

  const onCheckBoxClicked = () => {
    setTestCheckValue(!testCheckValue);
  };

  return (
    <>
      <div className='flex flex-col w-screen justify-center'>
        <p className='font-bold mb-4 text-center'>Start your free evaluation now</p>
        <div className='flex gap-4 justify-center'>
          {evaluation.items.map((eva) => {
            return (
              <Card
                key={eva.title}
                className={"border-4 relative w-56 " + eva.style.borderColor}
                onClick={() => {
                  setModalData(eva.next);
                }}>
                <p className={`absolute top-0 left-0 px-1 text-sm py-0.5 ${eva.style.bgColor} ${eva.style.color}`}>
                  {eva.style.title}
                </p>
                <p>{eva.title}</p>
                <img alt='face' src={eva.icon} />
                <div>
                  {eva.checks.map((det) => {
                    return <CheckText key={det} text={det} />;
                  })}
                </div>
              </Card>
            );
          })}
        </div>
        {modalData && (
          <Modal
            title='What type of property is it?'
            data={modalData}
            progress={progress}
            setData={setModalData}
            onClose={() => {
              setModalData("");
              setPrev([]);
            }}>
            {modalData.items && (
              <div className='w-[100%]'>
                <div
                  className={`grid flex-1 gap-5 justify-start ${
                    modalData?.items?.length > 4 || modalData?.items?.length === 3
                      ? " grid-cols-3"
                      : modalData?.items?.length === 4
                      ? "grid-cols-4"
                      : ` grid-cols-2`
                  }`}>
                  {modalData.items.map((item: any, index: number) => {
                    return (
                      <Card
                        key={index}
                        onClick={() => {
                          setPrev([...prev, modalData]);
                          item?.type === "check" ? onCheckBoxClicked() : setModalData(item.next);
                        }}
                        className='flex-1 w-full h-[150px] relative'>
                        {modalData?.type === "check" && (
                          <input
                            type='checkbox'
                            onClick={onCheckBoxClicked}
                            checked={testCheckValue}
                            className='absolute right-2 bottom-2'
                          />
                        )}
                        <img className='w-16' src={item.icon} />
                        <p className='font-bold text-sm whitespace-nowrap'>{item.title}</p>
                      </Card>
                    );
                  })}
                </div>
              </div>
            )}

            <StairInput/>
            {(modalData?.id === "personal_ground" ||
              modalData?.id === "fast_ground" ||
              modalData?.id === "fast_room_large" ||
              modalData?.id === "fast_built_year") && <Ground type={modalData?.id} />}
            {(modalData?.id === "personal_ground_postal_input" || modalData?.id === "fast_ground_postal_input") && (
              <PostalInput type={modalData?.id} />
            )}
            {modalData?.id === "recepient_infor" && (
              <RecepientInfor
                onClick={() => {
                  setPrev([...prev, modalData]);
                  setModalData(modalData?.next);
                }}></RecepientInfor>
            )}
            {(modalData?.id === "personal_address_input" || modalData?.id === "fast_address_input") && <AddressInput type={modalData?.id} />}
            {(modalData?.id === "personal_buy_final" || modalData?.id === "personal_sell_final") && (
              <PersonalFinal data={modalData} />
            )}

            <div className='justify-self-end flex justify-between w-[96%] items-center h-16'>
              {prev?.length > 0 && (
                <button
                  className='justify-self-start'
                  onClick={() => {
                    setModalData(prev[prev.length - 1]);
                    const temp = [...prev];
                    temp.pop();
                    setPrev(temp);
                  }}>
                  <ArrowBack />
                </button>
              )}
              {modalData.next && (
                <Button
                  variant='contained'
                  size='large'
                  className='!justify-self-start !font-bold'
                  onClick={() => {
                    setPrev([...prev, modalData]);
                    setModalData(modalData?.next);
                  }}>
                  Next
                </Button>
              )}
            </div>
            <div className='flex items-center justify-evenly absolute bottom-2'>
              {modalData?.checks?.map((check: any) => {
                return <CheckText text={check} key={check} />;
              })}
            </div>
          </Modal>
        )}
      </div>
    </>
  );
}

export default App;
