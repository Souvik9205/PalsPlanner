import Header from "./(components)/Header";
import Footer from "../(components)/Footer";
import EmptyHome from "../(components)/EmptyLogo";
import AddButton from "../(components)/AddButton";

const page = async () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      <div className="flex-1 overflow-y-auto">
        <EmptyHome />
        <AddButton />
      </div>
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default page;
