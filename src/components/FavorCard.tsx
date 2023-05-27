import { Favor } from "../api/types";

function FavorCard(props: any) {
  const favor: Favor = props.favor;

  return (
    <div className="flex justify-center p-2 h-48 ">
      <div className="flex flex-col justify-between w-full min-h-full border-2 overflow-y-scroll border-primary rounded-md">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row">
            <div className="ml-1 mr-1">img</div>
            <div>username</div>
          </div>
          <div className="mr-1">{favor.created_at}</div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="ml-1 font-bold">{favor.title}</div>
          <div className="flex flex-col justify-center">
            <div className="mr-1">When: {favor.datetime}</div>
            <div className="mr-1">Where: {favor.location}</div>
          </div>
        </div>
        <div className="m-1 ">{favor.description}</div>
        <div className="flex flex-row justify-between">
          <div className="ml-1">Slots: {favor.slots}</div>
          <button>Apply</button>
          <div className="flex flex-row">
            <div>{favor.price}</div>
            <div className="ml-1 mr-1">img</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FavorCard;
