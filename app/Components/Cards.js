import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Card = ({ card, cardData, setCardData, reference }) => {
  const [isShrunk, setIsShrunk] = useState(false);
  const [cardSize, setCardSize] = useState("");
  const [cardPosition, setCardPosition] = useState(() => {
    const cardWidth = 300;
    const maxLeft = window.innerWidth - cardWidth;
    return {
      top: `${Math.floor(window.innerHeight)}px`,
      left: `${Math.floor(Math.random() * maxLeft)}px`,
    };
  });

  const toggleShrink = (e) => {
    setIsShrunk(!isShrunk);
  };

  const handleDelete = () => {
    const updatedCards = cardData.filter((c) => c !== card);
    setCardData(updatedCards);
  };

  useEffect(() => {
    calculateTextSize(card.description);
  }, []);

  const calculateTextSize = (text) => {
    const textSizeBytes = new Blob([text]).size;
    const textSizeKB = textSizeBytes / 1024;
    const textSizeMB = textSizeKB / 1024;

    let sizeText = "";
    if (textSizeMB >= 1) {
      sizeText = textSizeMB.toFixed(2) + " MB";
    } else {
      sizeText = textSizeKB.toFixed(2) + " KB";
    }

    setCardSize(() => sizeText);
  };

  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 1.05, cursor: "grab" }}
      dragTransition={{ bounceDamping: 100, bounceStiffness: 30 }}
      dragElastic={0.1}
      key={crypto.randomUUID()}
      style={{ top: cardPosition.top, left: cardPosition.left }}
      className={`relative z-9 w-[300px] overflow-hidden shadow-xl bg-zinc-800 rounded-[30px] transition-all duration-400 h-auto m-2`}
    >
      <div
        className={`relative w-full font-bold text-xl text-center ${
          isShrunk ? "p-4" : "pt-4"
        }`}
      >
        <div className="relative w-full flex justify-around items-center">
          <span className={`w-full`}>{card.title}</span>
          {isShrunk && (
            <span
              className="text-right cursor-pointer w-[20%]"
              onClick={toggleShrink}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="M120-240v-80h520v80H120Zm664-40L584-480l200-200 56 56-144 144 144 144-56 56ZM120-440v-80h400v80H120Zm0-200v-80h520v80H120Z" />
              </svg>
            </span>
          )}
        </div>
      </div>
      {!isShrunk && (
        <>
          <div className="px-2 py-2">
            <div className="relative px-6 py-3">
              <p className="text-white hover:bg-zinc-900 leading-tight text-sm max-h-40 p-1 rounded-lg overflow-auto scrollbar scrollbar-w-[0.1rem] scrollbar-thumb-zinc-700 scrollbar-track-zinc-300">
                {card.description}
              </p>
            </div>
            <div className="px-6 text-xs flex justify-between items-center">
              <span className="inline-block text-gray-300 italic font-light">
                {cardSize}
              </span>
              <span
                className="inline-block font-semibold text-gray-700 cursor-pointer "
                onClick={handleDelete}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                </svg>
              </span>
              <span
                className="inline-block font-semibold text-gray-700 cursor-pointer "
                onClick={toggleShrink}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                </svg>
              </span>
            </div>
          </div>
          <div className=" w-full py-2 text-center text-xl font-semibold bg-black transition-all duration-300 text-slate-200 hover:text-blue-500 cursor-pointer">
            Download
          </div>
        </>
      )}
    </motion.div>
  );
};

export default function Cards({ setCardData, cardData, reference }) {
  return (
    <>
      {cardData.map((card, index) => (
        <Card
          card={card}
          key={index}
          cardData={cardData}
          setCardData={setCardData}
          reference={reference}
        />
      ))}
    </>
  );
}
