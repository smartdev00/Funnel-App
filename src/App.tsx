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
import { hasError, isNullOrUndefined } from "./utils/function";

interface RealEstate {
  [key: string]: number | string | null | undefined | object; // Adjust this type based on your actual data structure
}

export default function App() {
  const [modalData, setModalData] = useState<any>();
  const [progress, setProgress] = useState<number>(0);
  const [history, setHistory] = useState<any>([]);
  const [error, setError] = useState<any>("");
  const [realEstate, setRealEstate] = useState<RealEstate>({});

  useEffect(() => {
    setProgress(history.length * 5 + 5);
    if (modalData?.layer === "final") setProgress(100);
  }, [history]);

  useEffect(() => {
    console.log(realEstate);
  }, [realEstate]);

  const onCheckBoxClicked = (id: string, item: any) => {
    let temp = realEstate[id] ? realEstate[id].toString() : "";
    console.log("temp", temp);
    if (temp.includes(item.name)) {
      temp = temp.replace(item.name + " ", "");
      console.log(temp);
    } else {
      console.log("Set", item.name);
      temp += item.name + " ";
    }
    setRealEstate({ ...realEstate, [id]: temp });
  };

  const onCardInModalClick = (id: string, item: any) => {
    if (item?.type === "check") {
      onCheckBoxClicked(id, item);
    } else {
      setHistory([...history, modalData]);
      setModalData(item.next);
      setRealEstate({ ...realEstate, [modalData?.id]: item?.text });
    }
  };

  // console.log("===Error===: ", error);

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
                  setRealEstate({ ...realEstate, [evaluation.id]: eva.text });
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
            data={modalData}
            progress={progress}
            setData={setModalData}
            onClose={() => {
              setModalData("");
              setHistory([]);
              setRealEstate({});
              setError("");
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
                        onClick={() => onCardInModalClick(modalData?.id, item)}
                        className='flex-1 w-full h-[150px] relative'>
                        {modalData?.type === "check" && (
                          <input
                            type='checkbox'
                            onChange={() => onCheckBoxClicked(modalData?.id, item)}
                            checked={realEstate[modalData?.id]?.toString()?.includes(item.name)}
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

            {(modalData?.id === "room_count" || modalData?.id === "floor_count" || modalData?.id === "which_floor") && (
              <StairInput realEstate={realEstate} setRealEstate={setRealEstate} type={modalData?.id} />
            )}
            {(modalData?.id === "personal_ground_area" ||
              modalData?.id === "fast_ground_area" ||
              modalData?.id === "fast_room_area" ||
              modalData?.id === "fast_house_area" ||
              modalData?.id === "fast_apartment_area" ||
              modalData?.id === "fast_built_year") && (
              <Ground
                type={modalData?.id}
                min={modalData?.min}
                max={modalData?.max}
                setRealEstate={setRealEstate}
                realEstate={realEstate}
                error={error}
                setError={setError}
              />
            )}
            {(modalData?.id === "personal_ground_postal_input" || modalData?.id === "fast_ground_postal_input") && (
              <PostalInput
                type={modalData?.id}
                setRealEstate={setRealEstate}
                realEstate={realEstate}
                error={error}
                setError={setError}
              />
            )}
            {modalData?.id === "recepient_infor" && (
              <RecepientInfor
                type={modalData?.id}
                setRealEstate={setRealEstate}
                realEstate={realEstate}
                onClick={() => {
                  setHistory([...history, modalData]);
                  setModalData(modalData?.next);
                }}></RecepientInfor>
            )}
            {(modalData?.id === "personal_address_input" || modalData?.id === "fast_address_input") && (
              <AddressInput
                type={modalData?.id}
                realEstate={realEstate}
                setRealEstate={setRealEstate}
                error={error}
                setError={setError}
              />
            )}
            {(modalData?.id === "personal_buy_final" || modalData?.id === "alternative_phone_number") && (
              <PersonalFinal type={modalData?.id} realEstate={realEstate} setRealEstate={setRealEstate} />
            )}

            {/* Back and Next button */}
            <div className='justify-self-end flex justify-between w-[96%] items-center h-16'>
              {history?.length > 0 && (
                <button
                  className='justify-self-start'
                  onClick={() => {
                    setModalData(history[history.length - 1]);
                    const temp = [...history];
                    temp.pop();
                    setHistory(temp);
                  }}>
                  <ArrowBack />
                </button>
              )}

              {modalData.next && modalData?.id !== "recepient_infor" && (
                <Button
                  variant='contained'
                  size='large'
                  className='!justify-self-start !font-bold'
                  onClick={() => {
                    if (modalData?.id === "fast_exterior_feature" || modalData?.id === "fast_interior_feature") {
                      setHistory([...history, modalData]);
                      setModalData(modalData?.next);
                    } else {
                      let tempError = error;
                      console.log("Error: ", tempError);

                      const hasNull = isNullOrUndefined(realEstate);
                      if (hasNull.error) {
                        console.log("hasNull", hasNull);
                        tempError = { ...tempError, [hasNull.key]: "Required" };
                        setError(tempError);
                      }

                      const childHasNull = isNullOrUndefined(realEstate[modalData?.id]);
                      if (childHasNull.error) {
                        console.log("childHasNull", childHasNull);
                        tempError = { ...tempError, [childHasNull.key]: "Required" };
                        setError(tempError);
                      } else if (!hasError(tempError)) {
                        setError("");
                        if (!hasError(tempError)) {
                          setHistory([...history, modalData]);
                          setModalData(modalData?.next);
                        }
                      }
                      console.log(hasError(tempError), tempError, error);
                    }
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
