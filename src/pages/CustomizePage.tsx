import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function CustomizePage() {
  return (
    <div>
      <Navbar />
      <div className="m-0 min-h-screen w-full flex justify-center">
        <div className="border-blue-500 border-2  mt-2 w-5/6 h-96">
          <div className="w-full border-b-2 h-72 border-blue-500"></div>
          <div className="w-full h-24 border-b-2 border-blue-500 flex justify-center items-center">
            <div className="w-1/3 h-24 border-r-2 border-blue-500"></div>

            <div className="w-1/3 h-24 border-r-2 border-blue-500"></div>

            <div className="w-1/3 h-24"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
