import React, { useState } from 'react';
import './style.css';

const Page = () => {
  const [text, setText] = useState('');
  const [disable, setDisable] = useState(false);
  const getFact = (animal: string) => {
    setDisable(true);
    fetch(`https://cat-fact.herokuapp.com/facts/random?animal_type=${animal}`)
      .then((res) => res.json())
      .then((data) => {
        setText(data.text);
        setDisable(false);
      });
  };

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill=" #ffe7e2"
          fill-opacity="0.44"
          d="M0,160L20,160C40,160,80,160,120,186.7C160,213,200,267,240,266.7C280,267,320,213,360,197.3C400,181,440,203,480,224C520,245,560,267,600,250.7C640,235,680,181,720,170.7C760,160,800,192,840,176C880,160,920,96,960,101.3C1000,107,1040,181,1080,192C1120,203,1160,149,1200,138.7C1240,128,1280,160,1320,176C1360,192,1400,192,1420,192L1440,192L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"
        ></path>
      </svg>

      <div className="div-hole">
        <div className="div-top">
          <h1>welcome to Animals Facts</h1>
          <p>click on each button to read an amazing fact about it!</p>
        </div>
        <div className="div-buttons">
          <button
            disabled={disable}
            onClick={() => {
              getFact('cat');
            }}
            className="b-cat"
          >
            Cat
          </button>
          <button
            disabled={disable}
            onClick={() => {
              getFact('dog');
            }}
            className="b-dog"
          >
            Dog
          </button>
          <button
            disabled={disable}
            onClick={() => {
              getFact('horse');
            }}
            className="b-horse"
          >
            Horse
          </button>
        </div>
        <div className="div-bottom">
          <p className="p-text">{text}</p>
        </div>
      </div>
    </>
  );
};

export default Page;
