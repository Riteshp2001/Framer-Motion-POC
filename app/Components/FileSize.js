export default function FileSize({ cardData }) {
  return (
    <div className="z-10 absolute text-xl top-1 right-3 space-x-2 text-slate-200 font-bold">
      {cardData.length}/20
    </div>
  );
}
