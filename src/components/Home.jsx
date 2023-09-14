import Logo from "../assets/google-logo.png";
import HomeHeader from "./HomeHeader";
import SearchInput from "./SearchInput";
import Footer from "./Footer";
const Home = () => {
  return (
    <>
      <div className="flex h-[100vh] flex-col">
        <HomeHeader />
        <main className="grow flex justify-center">
          <div className="w-full px-5 flex flex-col items-center mt-32">
            <img className="w-[172] md:w-[272px] mb-8" src={Logo} />
            <SearchInput />
            <div className="flex gap-2 text-[#3c4843] mt-8">
              <button className="h-9 px-4 bg-[#f8f9fa] hover:shadow-c2 hover:border-[#dadce0] text-sm rounded-md border-[#f8f9fa] border">
                google Search
              </button>
              <button className="h-9 px-4 bg-[#f8f9fa] hover:shadow-c2 hover:border-[#dadce0] text-sm rounded-md border-[#f8f9fa] border">
                I'm Feeling Lucky
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
