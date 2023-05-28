import { Achivement } from "../api/types";

function AchivCard(props: any) {
  const achiv: Achivement = props.achiv;
  return (
    <div className="no-scrollbar overflow-y-scroll bg-gradient-to-r from-cyan-500 to-blue-500 font-normal  border-2 w-96 md:w-80 h-28 rounded-md mb-2 flex flex-row items-center text-white text-center">
      <div className="ml-1 w-2/6">
        <div className="h-24 w-24 overflow-hidden rounded-full">
          <img
            className="h-24 w-24"
            src={require(`../images/${achiv.img}.png`)}
          ></img>
        </div>
      </div>
      <div className="4/6">
        <div className="font-bold">{achiv.name}</div>
        <div className="w-full">{achiv.description}</div>
        <div>XP: {achiv.gain}</div>
      </div>
    </div>
  );
}

export default AchivCard;
