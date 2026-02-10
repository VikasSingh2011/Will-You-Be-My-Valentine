"use client";
import { useState } from "react";
import myPhoto from "./assets/photo1.jpeg";
import myPhoto2 from "./assets/photo2.jpeg";


export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 25;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Dost Yes krde as a friend he",
      "Sudhrega ni tu",
      "Momos khilaunga",
      "Maan jaa yrr",
      "PLEASE POOKIE",
      "Saaade bum k gole",
      "Pyrr se smjh ni aa rha na tujhe",
      "Abb dhamki bhara pyrr dikhana pdega",
      "Krde yrr popluu",
      "I LOVE YOU as a friend",
      "I LOVE YOU 2 as a friend",
      "I LOVE YOU INFINITY",
      "Chlo ab tum bhi love you bolo as a friend bol de",
      "Hehehehehe, abb mai itna bhi kch khaas nhi",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
  <>
    {/* Two photos in one row */}
    <div className="flex items-center gap-6 mb-6">
      <img
        src={myPhoto2}
        alt="My Photo 1"
        className="h-[220px] w-[220px] object-cover border-4 border-pink-400"
      />

      <img
        src={myPhoto}
        alt="My Photo 2"
        className="h-[220px] w-[220px] object-cover border-4 border-pink-400"
      />
    </div>

    {/* Bear GIF centered */}
    <img
      src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
      alt="Bear Kiss"
      className="mb-4"
    />

    {/* Message */}
    <div className="my-4 text-4xl font-bold text-center">
      Yaaayyyyy!!! I love you my motka bubu ;))
    </div>
  </>
) : (


        <>
          {/* Initial GIF */}
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            alt="Cute Bear"
          />

          <h1 className="my-4 text-4xl text-center">
            Will you be my Valentine?
          </h1>

          <div className="flex items-center flex-col lg:flex-row gap-4">
            <button
              className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>

            <button
              onClick={handleNoClick}
              className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
