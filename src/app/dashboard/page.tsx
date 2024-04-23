import Footer from "../(components)/Footer";
import Avatar from "./(components)/Avatar";
import Profile from "./(components)/Profile";
import Countup from "./(components)/Countup";
import About from "./(components)/About";
import Share from "./(components)/Share";
import LogOut from "./(components)/LogOut";
const page = async () => {
  const userEmail = "souvik2364@gmail.com";
  return (
    <div
      className="flex flex-col h-screen overflow-hidden bg-[#dbf9c6]"
      style={{
        backgroundImage: "url('landing2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex-1 overflow-y-auto">
        <Avatar />
        <Profile data={userEmail} />
        <Countup />
        <About />
        <Share />
        <LogOut />
      </div>
      <div className="fixed md:relative bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default page;
