// import { useState } from 'react'
import { evaluation, personalProps } from "./data/db";
import "./App.css";
import Card from "./components/Card";
import { CheckText } from "./components/CheckText";
import Modal from "./components/Modal";
import { useState } from "react";

function App() {
  // const [property, setProperty] = useState<object[]>([]);
  const [modalData, setModalData] = useState<any>();

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
            }}
          />
        )}
      </div>
    </>
  );
}

export default App;
