import IMG2 from "../../dist/img/img-2.png";
import "./header.css";

const Header = () => {

  return (
    <div className="relative top-[121px]  w-[100%]  flex justify-center ">
      <div className="w-[1600px] bg-[#e4e4e4]  block md:flex pt-3 justify-center">
        <div className="mb-5 md:w-[350px] lg:w-[500px] flex flex-col ps-3 md:block    pt-5 md:ps-3 md:pe-3">
          <h2 className="text-red-600 text-[30px]">قرعه‌کشی مصرف‌کنندگان گلستان</h2>
          <h2 className="text-[23px] pt-3 pb-3">قرعه‌کشی دوره‌ای مصرف‌کنندگان چای گلستان</h2>
          <p className="animate__animated  animate__fadeInDownBig animate__slow">
            هر یک از مصرف‌کنندگان محصولات چای گلستان می‌توانند با ارسال کد قرعه
            کشی روی بسته به شماره 30007405 در قرعه کشی‌های دوره‌ای سال 1403شرکت
            کنند. نگهداری از بسته‌بندی محصول برای اهدای جایزه الزامی است.
          </p>
          <button className="w-[133px] h-[40px] mt-3 rounded-[10px] bg-white btn1">
            اطلاعات بیشتر
          </button>
        </div>

        <div className="animate__animated animate__backInDown animate__slow md:w-[350px] lg:w-[500px]  h-[345px]  mb-5 flex justify-center ">
          <img src={IMG2} className="w-[350px] h-[400px]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
