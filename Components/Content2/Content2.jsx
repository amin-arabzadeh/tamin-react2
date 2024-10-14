import "./content2.css";

const Content2 = () => {
  return (
    <div className=" flex justify-center  w-[100%] ">
      <div className="content flex flex-col items-center  bg-[#ffffff] w-[1600px] ">
        <h2 className="mt-5 w-[100%] text-[36px] ps-[70px] sm:ps-[100px] lg:ps-[150px] xl:ps-[200px] md:ps-[100px] pt-3 pb-3 text-[#ff0808]">
          رکن اول غذای ایرانی
        </h2>
        <div className=" mb-3 mt-3 w-[70%] text-justify">
          <p className="text-[18px] text-[#969a9c] content2-p">
            مرغوب‌ترین برنج دنیا، برنج ایران است و بهترین نوع برنج ایرانی،‌ طارم
            و هاشمی. این برنج‌ها از بهترین شالیزارهای مازندران برداشت شده، پس از
            كنترل كیفیت در آزمایشگاه‌های تخصصی گلستان وارد چرخه بسته‌بندی و در
            وزن‌های مختلف به بازار عرضه می‌شوند. عطر و طعم بی‌نظیر برنج گلستان
            با هیچ برنج دیگری قابل مقایسه نیست. با گلستان،‌ كیفیت زندگی بالاتر
            از همیشه است چرا كه مشتریان گلستان؛‌ لایق بهترین‌ها هستند.
          </p>
        </div>
        <div className=" mb-3 w-[100%] h-[72px] relative  flex flex-col md:flex-row">
          <div className=" h-[72px] absolute right-[5px] sm:right-[50px] md:right-[200px]">
            <button className="w-[147px] h-[40px] ms-1   rounded-[5px] mt-3 mb-3 bg-white btn1">
              محصولات برنج
            </button>
            <button className="w-[147px] h-[40px] ms-2 rounded-[5px] mt-3 mb-3 bg-white btn1">
              آشپزخانه گلستان
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content2;
