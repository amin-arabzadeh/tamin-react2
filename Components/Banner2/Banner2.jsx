import "./banner2.css";

const Banner2 = () => {
  return (
    <div className=" flex justify-center h-[500px]">
      <div className="relative banner2">
        <div className="w-[100%] h-[20px] bg-[#e9d69f] absolute bottom-0"></div>
        <div className="w-[289px] absolute bottom-0 flex flex-col items-center right-0 md:right-[30%] h-[97px] bg-[#ed1c24]">
          <p className="text-white text-[20px]">چای گلستان</p>
          <p className="text-white text-[20px]">معرفی محصول</p>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
