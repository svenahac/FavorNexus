import { Leader } from "../api/types";
import Footer from "../components/Footer";
import LeaderCard from "../components/LeaderCard";
import Navbar from "../components/Navbar";

export default function LeaderboardPage() {
  let leaders: Leader[] = [
    {
      username: "Đorđe",
      level: 25,
      avatar: "redskin",
      trophy: "gold",
    },
    {
      username: "Gio Gio",
      level: 23,
      avatar: "giogio",
      trophy: "silver",
    },
    {
      username: "Te Wok",
      level: 20,
      avatar: "tewok",
      trophy: "bronze",
    },
    {
      username: "John Doe",
      level: 18,
      avatar: "avatar",
    },
    {
      username: "The Whistler",
      level: 13,
      avatar: "whistler",
    },
  ];

  function renderLeader() {
    return leaders.map((leader: Leader) => {
      return (
        <LeaderCard
          leader={leader}
          key={`${leader.username}-${leader.level}-${leader.avatar}`}
        />
      );
    });
  }

  return (
    <div>
      <Navbar />
      <div className="m-0 min-h-screen w-full flex justify-center">
        <div className=" mt w-5/6 flex flex-col justify-center items-center">
          <div className="text-black text-3xl font-bold">Leaderboard</div>
          <div id="achivs">{renderLeader()}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
