// import { useState } from 'react'
import { evaluation } from "./data/db";
import "./App.css";
import Card from "./components/Card";
import { CheckText } from "./components/CheckText";
import Modal from "./components/Modal";
import { useState } from "react";

function App() {
  const [property, setProperty] = useState<string[]>([]);

  return (
    <>
      <div>
        <p className='font-bold mb-4'>Start your free evaluation now</p>
        <div className='flex gap-4'>
          {evaluation.map((eva) => {
            return (
              <Card
                key={eva.title}
                className={"border-4 relative w-56 " + eva.border.borderColor}
                onClick={() => {
                  setProperty(eva.properties);
                }}>
                <p className={`absolute top-0 left-0 px-1 text-sm py-0.5 ${eva.border.bgColor} ${eva.border.color}`}>
                  {eva.border.title}
                </p>
                <p>{eva.title}</p>
                <img alt='face' src={eva.icon} />
                <div>
                  {eva.detail.map((det) => {
                    return <CheckText key={det} text={det} />;
                  })}
                </div>
              </Card>
            );
          })}
        </div>
        {property.length !== 0 && (
          <Modal
            title='What type of property is it?'
            onClose={() => {
              setProperty([]);
            }}
          />
        )}
      </div>
    </>
  );
}

export default App;
