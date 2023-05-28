import { Achivement } from "../api/types";

function AchivCard(props: any) {
  const achiv: Achivement = props.achiv;
  return (
    <div className="no-scrollbar overflow-y-scroll  bg-gradient-to-r from-cyan-500 to-blue-500 font-normal  border-2 w-72 md:w-80 h-28 rounded-md mb-2 flex flex-col items-center text-center">
      <div className="font-bold">{achiv.name}</div>
      <div className="w-full">{achiv.description}</div>
      <div>XP: {achiv.gain}</div>
    </div>
  );
}

export default AchivCard;
