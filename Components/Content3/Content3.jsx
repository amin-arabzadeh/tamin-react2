import "./content3.css";

const Content3 = () => {
  return (
    <div className=" flex justify-center  w-[100%] ">
      <div className="content flex flex-col items-center  bg-[#ffffff] w-[1600px] ">
        <h2 className="mt-5 text-[36px] w-[100%] ps-[70px] sm:ps-[100px] lg:ps-[150px] xl:ps-[200px] md:ps-[100px] pt-3 pb-3 text-[#ff0808]">
          سابقه‌ای به قدمت یک عمر
        </h2>
        <div className=" mb-3 mt-3 w-[70%] text-justify">
          <p className="text-[18px] text-[#969a9c] content3-p">
            چای تنها یك نوشیدنی گرم نیست.‌ یک گفتمان است؛‌ گرمابخش وجود و
            بهانه‌ای برای آغاز یك معاشرت دل‌چسب. بی‌دلیل نیست كه نام «محبوب‌ترین
            نوشیدنی دنیا» را با خود یدک می‌كشد. نوشیدنش خستگی‌ها را فراری داده،‌
            حس خوب آرامش را به همراه دارد.
          </p>
        </div>
        <div className=" mb-3 mt-3 w-[70%] text-justify">
          <p className="text-[18px] text-[#969a9c] content3-p">
            برای مردمان ایران زمین نام{" "}
            <span className="text-[#ff1717]">گلستان</span> با چای پیوند خورده
            است؛‌ قدیمی‌ترین محصول مجموعه گلستان،‌ با مدرن‌ترین و بهداشتی‌ترین
            دستگاه‌های روز دنیا تهیه و بسته‌بندی می‌شود. چیزی كه باعث شده
            مشتریانش یك عمر به نام گلستان اعتماد كنند، كیفیت، ‌عطر و طعم به
            یادماندنی آن است.
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

export default Content3;
