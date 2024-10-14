import img1 from "../../dist/img/img-1.png";
import "./navbar.css";

const NAVBAR2 = () => {
  return (
    <div className=" w-[100%] z-10 fixed flex justify-center">
      <nav class="nav h-[144px] lg:h-[100px] w-[1600px] border-gray-200  dark:bg-gray-900">
        <div class="max-w-screen-xl  flex flex-wrap items-center relative justify-between mx-auto p-4">
          {/* <div className="text-white fixed"></div> */}
          <a
            href="https://flowbite.com/"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={img1}
              class="w-[170px] h-[105px] right-[15%] sm:right-[35%] md:right-[35%] top-5  absolute lg:top-8 lg:right-[30px] xl:right-[150px]"
              alt="Flowbite Logo"
            />
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex absolute top-16 left-5 items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div class="hidden w-full lg:block  md:w-auto" id="navbar-default">
            <ul class="nav font-medium absolute w-[100%] md:w-[100%] lg:w-[732px] md:top-[137px] h-[100vh] sm:h-[100vh] md:h-[100vh] lg:h-[50px]  xl:h-[50px] top-[122px] right-0 lg:top-10 sm:right-0 md:right-0   lg:right-[20%] xl:right-[30%]  flex flex-col  p-4 lg:p-0 mt-4  overflow-scroll rounded-lg  lg:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 lg:border-0 ">
              <li>
                <a
                  href="#"
                  class="block py-2  text-white lg:leading-10  rounded md:bg-transparent ms-0 lg:p-0 "
                  aria-current="page"
                >
                  صفحه اصلی
                </a>
                
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 text-[14px] w-[80px] lg:leading-10  text-white  md:p-0 "
                >
                  شرکت گلستان
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 lg:leading-10  text-white  md:p-0"
                >
                  محصولات
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 lg:leading-10  text-white  md:p-0"
                >
                  وبلاگ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 w-[80px] lg:leading-10  text-white  md:p-0"
                >
                  قرعه کشی
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 lg:leading-10  text-white  md:p-0"
                >
                  استخدام
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block w-[80px]  lg:leading-10  text-white  md:p-0"
                >
                  تماس باما
                </a>
              </li>
              <li>
                <a href="#" class="block  lg:leading-10  text-white  md:p-0">
                  EN
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NAVBAR2;
