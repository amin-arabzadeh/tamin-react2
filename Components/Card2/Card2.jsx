import video1 from "../../dist/video/video-1.mp4";
import video2 from "../../dist/video/video-2.mp4";
import video3 from "../../dist/video/video-3.mp4";

const Card2 = () => {
  return (
    <div className="w-[100%]  flex justify-center">
      <div className=" pt-[70px] w-[1600px] pb-3  flex-col sm:flex-col md:flex-row flex justify-center items-center">
        <div className="w-[318px]  md:w-[248px] hidden md:block lg:w-[318px] sm:w-[250px] h-[448.783px] md:me-3 bg-white">
          <video controls src={video1}></video>
          <a
            className="text-[#ff0e0e] no-underline  block mt-6 ps-4 text-[20px]"
            href="#"
          >
            سالاد نودل
          </a>
          <p className="text-[#989999] pt-2 ps-2">
            نودل هاتی کارا یك میان‌وعده‌ی مغذی، در هر موقعیتی كه باشید با كمی آب
            جوش و یك نودل هاتی‌كارا می‌توانید از یك غذای سالم و خوشمزه لذت
            ببرید.
          </p>
          <button className="w-[106px] rounded-lg btn1 h-[41px] text-[14px] ms-2 mt-3">
            ادامه مطلب
          </button>
        </div>
        <div className="w-[315px] mt-4 md:mt-0 md:mb-0 mb-4 md:w-[248px] lg:w-[318px] sm:w-[400px] h-[448.783px] md:me-3 bg-white">
          <video controls src={video2}></video>
          <a
            className="text-[#ff0e0e] no-underline  block mt-6 ps-4 text-[20px]"
            href="#"
          >
            اینستاگرام هاتی نودل
          </a>
          <p className="text-[#989999] pt-2 ps-2">
            نودل‌های هاتی كارا را می‌توان جایگزین سالمی برای غذاهای فست‌فودی
            دانست. طعم عالی،‌ ارزش غذایی بالا و قیمت مناسب از این محصول غذای
            سالم و كاملی ساخته است.
          </p>
          <button className="w-[106px] rounded-lg btn1 h-[41px] text-[14px] ms-2 mt-3">
            ادامه مطلب
          </button>
        </div>
        <div className="w-[315px] md:w-[248px] lg:w-[318px]  sm:w-[400px] h-[448.783px] bg-white">
          <video className="w-[100%] h-[178.868px]" controls src={video3}></video>
          <a
            className="text-[#ff0e0e] no-underline  block mt-6 ps-4 text-[20px]"
            href="#"
          >
            برنج گلستان
          </a>
          <p className="text-[#989999] pt-2 ps-2">
            عطر و طعم بی‌نظیر برنج گلستان با هیچ برنج دیگری قابل مقایسه نیست. با
            گلستان،‌ كیفیت زندگی بالاتر از همیشه است. چرا كه مشتریان گلستان؛‌
            لایق بهترین ها هستند.
          </p>
          <button className="w-[106px] rounded-lg btn1 h-[41px] text-[14px] ms-2 mt-3">
            ادامه مطلب
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card2;
