import "./content4.css";

const Content4 = () => {
  return (
    <div className=" flex justify-center  w-[100%] ">
      <div className="content flex flex-col items-center  bg-[#ffffff] w-[1600px] ">
        <h2 className="mt-5 text-[36px] w-[100%] ps-[70px] sm:ps-[100px] lg:ps-[150px] xl:ps-[200px] md:ps-[100px] pt-3 pb-3 text-[#ff0808]">
          آجيل‌های خوش خنده
        </h2>
        <div className=" mb-3 mt-3 w-[70%] text-justify">
          <p className="text-[18px] text-[#969a9c] content4-p">
            خواص فوق‌العاده پسته بر كسی پوشیده نیست. پسته را منبع ویتامین و مواد
            معدنی می‌نامند، یك پمپ خون‌ساز قوی و تسكین دهنده قلب و اعصاب.
          </p>
        </div>
        <div className=" mb-3 mt-3 w-[70%] text-justify">
          <p className="text-[18px] text-[#969a9c] content4-p">
            <span className="text-[#ff0808]">پسته گلستان</span> اما حسابش از
            دیگر پسته‌های بازار جداست. مرغوب‌ترین پسته خام از بهترین باغ‌های
            پسته ایران دستچین می‌شود.‌ پس از كنترل كیفیت در آزمایشگاه و اطمینان
            از سلامت محصول،‌ با زعفران درجه یک و نمک، بوداده و برشته شده و‌ پسته
            گلستان را با طعم و رنگ و عطری بی‌نظیر به ارمغان می‌آورد.
          </p>
        </div>
        <div className=" mb-3 w-[100%] h-[72px] relative  flex flex-col md:flex-row">
          <div className=" h-[72px] absolute right-[5px] sm:right-[50px] md:right-[200px]">
            <button className="w-[147px] h-[40px] ms-1   rounded-[5px] mt-3 mb-3 bg-white btn1">
              محصولات چای
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content4;
