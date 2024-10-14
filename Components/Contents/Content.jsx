import "./content.css";

const Content = () => {
  return (
    <div className=" flex justify-center  w-[100%] mt-[50px]  ">
      <div className="content flex flex-col items-center  animate__slow animate__animated  animate__fadeInRightBig bg-[#ffffff] w-[1600px] mt-[71px] ">
        <h2 className="mt-3 text-[36px] w-[100%] ps-[70px] sm:ps-[100px] lg:ps-[150px] xl:ps-[200px] md:ps-[100px] pt-3 pb-3 text-[#ff0808]">
          معرفی گلستان
        </h2>
        <div className="w-[70%] mt-3 text-justify">
          <h2 className="text-[18px] h2-content">
            آنچه که امروز با نام مجموعه
            <span className="text-[#ff0808]">گلستان</span> می‌شناسیم در سال 1329
            بنیان نهاده شد. زمانی که شرکت گلستان فعالیت خود را با بسته‌بندی و
            توزیع چای پاکتی آغاز کرد. با گذر زمان و رشد اقتصاد کشور، نهال
            «گلستان» به تدریج تقویت شد و شاخ و برگ گرفت. فعالیت‌های «گلستان» با
            تهیه، تولید و بسته‌بندی بهترین محصولات غذایی گسترش پیدا کرد.{" "}
            <span className="text-[#ff0808]">گلستان</span> پس از سال‌ها تلاش
            همچنان می‌کوشد تا به کمک تجربه‌های اندوخته شده در این سال‌ها
            کالاهایی قابل اعتماد و با کیفیت تولید نماید.
          </h2>
        </div>
        <div className=" mt-3 w-[70%] text-justify">
          <h2 className="text-[18px] h2-content ">
            هدفمندی و برنامه‌ریزی موثر، ایمان و عزم راسخ برای دستیابی به اهداف
            تعیین شده، به کار گیری همکاران مجرب و دلسوز، استفاده از روش های نوین
            بازاریابی و مشتری محوری از جمله عوامل مهم در استراتژی
            <span className="text-[#ff0808]"> شرکت گلستان</span>
            است.
          </h2>
        </div>
        <h2 className="mt-3  w-[100%] ps-[70px] sm:ps-[100px] lg:ps-[150px] xl:ps-[200px] md:ps-[100px] pt-3 pb-3 text-[#ff0808] text-[36px]">
          محصولات گلستان​
        </h2>
        <div className=" mb-3 mt-3 w-[70%] text-justify">
          <h2 className="text-[18px] h2-content">
            <span className="text-[#ff0808]">نام تجاری گلستان</span> قدمتی به اندازه عمر شرکت گلستان دارد. گلستان
            ممتازترین محصولات خود را با این نام تجاری عرضه می‌کند. مصرف‌کنندگان
            محصولات گلستان همواره از این نام تجاری خاطره محصولاتی ممتاز و منحصر
            بفرد دارند و با اطمینان از نهایت کیفیت این نام تجاری حمایت می‌کنند.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Content;
