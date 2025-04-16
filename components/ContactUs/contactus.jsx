import { Button } from "../ui/button";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
export function ContactUs() {
  return (
    <div classname="md:py-12 py-4 ">
      <section className="max-w-5xl mx-auto p-8 bg-white  flex flex-col md:flex-row gap-8  relative">
        <div className="absolute z-10 right-48 bottom-10 hidden 2xl:block animate-rotate">
          <img src="/service_shpe2.png" />
        </div>
        <div className="Container">
          <div className="grid grid-cols-6 lg:grid-cols-12 items-start">
            <div className="col-span-6 lg:col-span-7">
              <div className="relative z-10">
                <img
                  draggable="false"
                  className="w-full lg:w-[inherit] max-w-[inherit] rounded-md"
                  src="/contact.jpg"
                />
                <img
      
                  className="absolute top-[58%] sm:top-1/3 md:top-[58%] left-14 animate-swing"
                  src="/contact_shapes.png"
                />
                <div className="hidden absolute bottom-[65px] left-[55px] bg-transparent bg-opacity-10 rounded-full pr-10 border-2 border-gray-300 border-opacity-40 backdrop-filter backdrop-blur-md sm:flex items-center gap-7">
                  <div className="size-[78px] rounded-full bg-[var(--primary)]  flex items-center justify-center relative z-10 after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:size-[81px] after:rounded-full after:bg-[var(--primary)] after:-z-10 before:absolute before:-top-3 before:-left-3 before:size-[102px] before:rounded-full before:border-2 before:border-[var(--primary)]">
                    <span className="size-9 flex items-center justify-center rounded-full text-white border-2 border-white bg-[var(--primary)]">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 24 24"
                        height={20}
                        width={20}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                      </svg>
                    </span>
                  </div>
                  <a
                    className="text-white"
                    href="/"
                    data-discover="true"
                  >
                    +980 123 (4567) 890
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-6 lg:col-span-5 relative">
              <img
                draggable="false"
                className="absolute top-0 right-6 animate-movebtn"
                src="/contact_shape.png"
              />
              <div className="relative z-20 bg-white shadow-shades pt-11 mt-[100px] px-4 sm:px-6 md:px-[50px] lg:px-4 xl:px-10 2xl:px-[50px] rounded-md">
                <div className="text-center">
                  <h5 className=" text-sm sm:text-base text-[var(--primary)] uppercase mb-3">
                    CONTACT US
                  </h5>
                  <h1 className="font-FiraSans font-semibold text-[var(--primary)] inline-block text-[16px] leading-[26px] sm:text-[25px] sm:leading-[35px] md:text-[30px] md:leading-[40px] lg:text-[30px] lg:leading-[44px] xl:text-[32px] xl:leading-[44px] 2xl:text-[34px] 2xl:leading-[44px] relative pb-4">
                    Get In Touch With advisar
                    <img
                      draggable="false"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2"
                      src="/hero_border.png"
                    />
                  </h1>
                </div>
                <form
                  action="https://formspree.io/f/xayrekgy"
                  method="post"
                  className="flex flex-col gap-y-5 pt-11 pb-[60px]"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="relative inline-block">
                      <input
                        id="name"
                        placeholder="Enter Name*"
                        required
                        className=" text-[var(--primary)] placeholder:text-TextColor-0 text-sm bg-transparent border border-Secondarycolor-0 border-opacity-20 rounded py-2 px-6 h-[54px] w-full focus:outline-PrimaryColor-0"
                        type="text"
                        name="name"
                      />
                      <svg
                        stroke="#2c336a"
                        fill="#2c336a"
                        strokeWidth={0}
                        viewBox="0 0 448 512"
                        className="absolute text-[var(--primary)] top-1/2 -translate-y-1/2 right-5"
                        height={14}
                        width={14}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" />
                      </svg>
                    </div>
                    <div className="relative inline-block">
                      <input
                        id="email"
                        placeholder="Enter E-Mail*"
                        required
                        className="text-[var(--primary)] placeholder:text-TextColor-0 text-sm bg-transparent border border-Secondarycolor-0 border-opacity-20 rounded py-2 px-6 h-[54px] w-full focus:outline-PrimaryColor-0"
                        type="email"
                        name="email"
                      />
                      <svg
                        stroke="#2c336a"
                        fill="none"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="absolute text-[var(--primary)] top-1/2 -translate-y-1/2 right-5"
                        height={16}
                        width={16}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="relative inline-block">
                      <input
                        id="number"
                        placeholder="Enter Number*"
                        required
                        className=" text-[var(--primary)] placeholder:text-TextColor-0 text-sm bg-transparent border border-Secondarycolor-0 border-opacity-20 rounded py-2 px-6 h-[54px] w-full focus:outline-PrimaryColor-0"
                        type="text"
                        name="number"
                      />
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 24 24"
                        className="absolute text-PrimaryColor-0 top-1/2 -translate-y-1/2 right-5"
                        height={16}
                        width={16}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                      </svg>
                    </div>
                  </div>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Write a short meassage..."
                    className="font-FiraSans text-[var(--primary)] placeholder:text-TextColor-0 text-sm bg-transparent border border-Secondarycolor-0 border-opacity-20 rounded py-2 px-6 h-[120px] w-full focus:outline-PrimaryColor-0 resize-none"
                    defaultValue={""}
                  />
                  <label
                    htmlFor="terms"
                    className="font-FiraSans text-TextColor-0 text-sm flex items-center gap-2 cursor-pointer"
                  >
                    <input id="terms" type="checkbox" name="terms" />I accept
                    all terms &amp; conditions.
                  </label>
                  <div className="inline-block mt-2">
                    <button className="primary-btn3">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M466.27 286.69C475.04 271.84 480 256 480 236.85c0-44.015-37.218-85.58-85.82-85.58H357.7c4.92-12.81 8.85-28.13 8.85-46.54C366.55 31.936 328.86 0 271.28 0c-61.607 0-58.093 94.933-71.76 108.6-22.747 22.747-49.615 66.447-68.76 83.4H32c-17.673 0-32 14.327-32 32v240c0 17.673 14.327 32 32 32h64c14.893 0 27.408-10.174 30.978-23.95 44.509 1.001 75.06 39.94 177.802 39.94 7.22 0 15.22.01 22.22.01 77.117 0 111.986-39.423 112.94-95.33 13.319-18.425 20.299-43.122 17.34-66.99 9.854-18.452 13.664-40.343 8.99-62.99zm-61.75 53.83c12.56 21.13 1.26 49.41-13.94 57.57 7.7 48.78-17.608 65.9-53.12 65.9h-37.82c-71.639 0-118.029-37.82-171.64-37.82V240h10.92c28.36 0 67.98-70.89 94.54-97.46 28.36-28.36 18.91-75.63 37.82-94.54 47.27 0 47.27 32.98 47.27 56.73 0 39.17-28.36 56.72-28.36 94.54h103.99c21.11 0 37.73 18.91 37.82 37.82.09 18.9-12.82 37.81-22.27 37.81 13.489 14.555 16.371 45.236-5.21 65.62zM88 432c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24z" />
                      </svg>
                      Get Started now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
