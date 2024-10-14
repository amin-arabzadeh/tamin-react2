import img3 from "../../dist/img/img-3.png";
import img4 from "../../dist/img/img-4.png";
import img5 from "../../dist/img/img-5.png";
import img6 from "../../dist/img/img-6.png";

const Post = () => {
  return (
    <div className="hidden lg:block container3">
      <div className="  h-[450px] flex justify-center">
        <div className="bg-[#ffffff]  w-[1600px] pt-20 pb-20 flex justify-center h-[100%]">
          <div className="w-[205px] h-[269px] me-3">
            <img src={img3} className="w-[100%]" alt="" />
            <div className="flex justify-center items-center bg-[#ffffff] border  h-[64px]">
              <p>سرمایه انسانی</p>
            </div>
          </div>
          <div className="w-[205px] h-[269px] me-3 ">
            <img src={img4} className="w-[100%]" alt="" />
            <div className="flex justify-center items-center bg-[#ffffff] border  h-[64px]">
              <p>مراكز فروش</p>
            </div>
          </div>
          <div className="w-[205px] h-[269px] me-3 ">
            <img src={img5} className="w-[100%]" alt="" />
            <div className="flex justify-center items-center bg-[#ffffff] border  h-[64px]">
              <p>محصولات گلستان</p>
            </div>
          </div>
          <div className="w-[205px] h-[269px] ">
            <img src={img6} className="w-[100%]" alt="" />
            <div className="flex justify-center items-center bg-[#ffffff] border  h-[64px]">
              <p>مشتریان گلستان</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
