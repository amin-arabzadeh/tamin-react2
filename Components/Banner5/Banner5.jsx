import img14 from '../../dist/img/img-14.jpg';


const Banner5 = () => {
  return (
    <div className=" w-[100%] pt-5 pb-5 flex justify-center">
      <div className="bg-[#105153] w-[1600px]  h-[600px]">
        <div className=" h-[300px]  border-b-2 border-[#087376] flex justify-center items-end">
          <h2 className="pb-4 text-white">مسئوليت‌های اجتماعی شركت گلستان</h2>
        </div>
        <div className=" h-[300px] flex flex-col items-center relative">
          <div className="">
            <h2 className="text-[26px]"><span className='text-[#009ca0]'>Golestan</span> <span className="text-[#00d8df]">Social Responsibility</span></h2>
            <p className="text-center text-[#8b9ea0]">Mahdi Hospital</p>
          </div>
          <img src={img14} className='absolute z-[5] top-20' alt="" />
          <div className="absolute bg-[#e9d69f] bottom-0 w-[100%] h-[20px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner5;
