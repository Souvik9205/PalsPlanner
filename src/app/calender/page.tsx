import Footer from "../(components)/Footer";
import Calendar from "./(components)/CalenderComp";
import AddButton from "../(components)/AddButton";

const page = async () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-[#BDE0FE]">
      <Calendar />
      <div className="flex-1 overflow-y-auto">
        <AddButton />
      </div>
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default page;
