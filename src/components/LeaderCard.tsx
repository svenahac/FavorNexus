import { Leader } from "../api/types";

function LeaderCard(props: any) {
  const leader: Leader = props.leader;
  return (
    <div className="no-scrollbar overflow-y-scroll bg-gradient-to-r from-cyan-500 to-blue-500 font-normal  border-2 w-96 md:w-80 h-28 rounded-md mb-2 flex flex-row items-center text-white text-center">
      <div className="ml-1 w-2/6">
        <div className="h-24 w-24 overflow-hidden rounded-full">
          <img
            className="h-24 w-24"
            src={require(`../images/${leader.avatar}.png`)}
          ></img>
        </div>
      </div>
      <div className="w-2/6">
        <div className="font-bold">{leader.username}</div>
        <div>Level: {leader.level}</div>
      </div>
      <div className="ml-1 w-2/6">
        <div className="h-24 w-24 overflow-hidden">
          <img
            className="h-20 w-20"
            src={require(`../images/${
              leader.trophy != null ? leader.trophy : "blank"
            }.png`)}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default LeaderCard;
