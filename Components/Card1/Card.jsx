import img11 from "../../dist/img/img-11.jpg";
import img12 from "../../dist/img/img-12.jpg";
import img13 from "../../dist/img/img-13.jpg";

const Card1 = () => {
  return (
    <div className="w-[100%]  flex justify-center">
      <div className="bg-[#cde4b0] pt-[70px] w-[1600px] pb-3  flex-col sm:flex-col md:flex-row flex justify-center items-center">
        <div className="w-[318px]  md:w-[248px] hidden md:block lg:w-[318px] sm:w-[250px] h-[601px] md:me-3 bg-white">
          <img src={img13} className="w-[100%]" alt="" />
          <a
            className="text-[#ff0e0e] no-underline  block mt-6 ps-4 text-[20px]"
            href="#"
          >
            ماکارونی با سبزیجات
          </a>
          <p className="text-[#989999] pt-2 ps-2">
            ابتدا ماکارانی‌ها را در ظرفی‌ به‌ همراه‌ آب‌، روغن‌ مایع‌ و نمک‌
            می‌ریزیم‌ تا کمی‌ بپزد. در این‌ حین‌ پیازها را خرد کرده‌ و روی‌
            روغن‌ تفت‌ می‌دهیم‌ تا طلایی‌ شود…
          </p>
          <button className="w-[106px] rounded-lg btn1 h-[41px] text-[14px] ms-2 mt-3">
            ادامه مطلب
          </button>
        </div>
        <div className="w-[315px] mt-4 md:mt-0 md:mb-0 mb-4 md:w-[248px] lg:w-[318px] sm:w-[400px] h-[601px] md:me-3 bg-white">
          <img src={img12} className="w-[100%]" alt="" />
          <a
            className="text-[#ff0e0e] no-underline  block mt-6 ps-4 text-[20px]"
            href="#"
          >
            سوپ مکزیکی
          </a>
          <p className="text-[#989999] pt-2 ps-2">
            گوشت بوقلمون را در یک ماهیتابه بزرگ ریخته، آب روی آن بریزید تا روی
            آن را بپوشاند و به مدت نیم ساعت آن را بپزید. گوشت را از مایع آن
            بیرون آورده…
          </p>
          <button className="w-[106px] rounded-lg btn1 h-[41px] text-[14px] ms-2 mt-3">
            ادامه مطلب
          </button>
        </div>
        <div className="w-[315px] md:w-[248px] lg:w-[318px]  sm:w-[400px] h-[601px] bg-white">
          <img src={img11} className="w-[100%]" alt="" />
          <a
            className="text-[#ff0e0e] no-underline  block mt-6 ps-4 text-[20px]"
            href="#"
          >
            چیلاکیله
          </a>
          <p className="text-[#989999] pt-2 ps-2">
            گوشت بوقلمون را در یک ماهیتابه بزرگ ریخته، آب روی آن بریزید تا روی
            آن را بپوشاند و به مدت نیم ساعت آن را بپزید. گوشت را از مایع آن
            بیرون آورده…
          </p>
          <button className="w-[106px] rounded-lg btn1 h-[41px] text-[14px] ms-2 mt-3">
            ادامه مطلب
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card1;
