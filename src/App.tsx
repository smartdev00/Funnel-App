// import { useState } from 'react'
import { evaluation, personalProps } from "./data/db";
import "./App.css";
import Card from "./components/Card";
import { CheckText } from "./components/CheckText";
import Modal from "./components/Modal";
import { ArrowBack } from "@mui/icons-material";
import { useState } from "react";
import { Button, Slider } from "@mui/material";
import Ground from "./page/Ground";

function App() {
  // const [property, setProperty] = useState<object[]>([]);
  const [modalData, setModalData] = useState<any>();
  const [prev, setPrev] = useState<any>([]);

  return (
    <>
      <div>
        <p className='font-bold mb-4'>Start your free evaluation now</p>
        <div className='flex gap-4'>
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
            setData={setModalData}
            onClose={() => {
              setModalData("");
            }}>
            {modalData.items && (
              <div className='w-[100%]'>
                <div
                  className={`grid flex-1 gap-5 justify-start ${
                    modalData?.items?.length > 4 || modalData?.items?.length === 3
                      ? " grid-cols-3"
                      : ` grid-cols-${modalData?.items?.length}`
                  }`}>
                  {modalData.items.map((item: any, index: number) => {
                    return (
                      <Card
                        key={index}
                        onClick={() => {
                          setPrev([...prev, modalData]);
                          setModalData(item.next);
                        }}
                        className='flex-1 w-full h-[150px]'>
                        <img className='w-16' src={item.icon} />
                        <p className='font-bold text-sm whitespace-nowrap'>{item.title}</p>
                      </Card>
                    );
                  })}
                </div>
              </div>
            )}

            {modalData?.id === "personal_ground" && <Ground />}

            <div className='absolute bottom-10 flex justify-between w-[90%] items-center mx-[5%]'>
              {prev?.length > 0 && (
                <button
                  className='self-start'
                  onClick={() => {
                    setModalData(prev[prev.length - 1]);
                    const temp = prev;
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
                  className='self-end !font-bold'
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
