  /* eslint-disable react/no-unescaped-entities */
  import React, { useEffect, useState } from "react";
  import Slider from "react-slick";
  import "slick-carousel/slick/slick.css";
  import "slick-carousel/slick/slick-theme.css";
  import Image from "./Image";
  import { MdOutlineFileDownload } from "react-icons/md";
  import Aos from "aos";

  interface SlideProps {
    imgUrl: string;
    text: string;
  }

  const HomeSlider: React.FC = () => {
    useEffect(function () {
      Aos.init({ duration: 2000 });
    }, []);

    const downloadFile = () => {
      const link = document.createElement("a");
      link.href = "/Document/salmn.docx";
      link.download = "document.docx";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      fade: true,
    };

    return (
      <Slider {...settings}>
        {/* slide 1 */}
        <div data-aos="fade-right " className="Slide relative flex items-center justify-center">
          <Image
            height={0}
            width={0}
            src="/Home/img_bg_2.jpg.webp"
            className="h-screen w-full object-cover"
            alt="Background Image"
          />
          <div className="absolute left-0 top-[40%] flex w-1/2 -translate-y-1/2 transform items-center px-10 sm:top-1/2">
            <p
              data-aos="fade-right"
              className="flex flex-col font-serif text-2xl font-extrabold leading-relaxed text-custom-black sm:text-5xl"
            >
              Hi! I'm Salman farooqi
            </p>
          </div>
          <div className="absolute left-0 top-[70%] mt-10 flex -translate-y-1/2 transform items-center px-10">
            <button
              className="button-- custom-btn btn-3 flex items-center justify-center gap-2 border px-2 py-2 !text-sm text-custom-black sm:!text-base"
              onClick={downloadFile}
            >
              DOWNLOAD CV{" "}
              <span>
                <MdOutlineFileDownload className="border" />
              </span>
            </button>
          </div>
        </div>

        {/* slide 2 */}
        <div className="Slide relative flex items-center justify-center">
          <Image
            height={0}
            width={0}
            src="images/img_bg_1.jpg.webp"
            className="h-screen w-full object-cover"
            alt="Background Image"
          />
          <div className="absolute left-0 top-[40%] flex w-1/2 -translate-y-1/2 transform items-center px-10 sm:top-1/2">
            <p className="flex flex-col font-serif text-2xl font-extrabold leading-relaxed text-custom-black md:text-3xl lg:text-5xl">
              I am A Full Stack Web Developer
            </p>
          </div>
          <div className="absolute left-0 top-[70%] mt-10 flex -translate-y-1/2 transform items-center px-10">
            <button
              className="button-- custom-btn btn-3 !sm:px-2 flex items-center justify-center gap-2 border px-1 py-2 !text-sm text-custom-black sm:!text-base"
              onClick={downloadFile}
            >
              DOWNLOAD CV{" "}
              <span>
                <MdOutlineFileDownload className="border" />
              </span>
            </button>
          </div>
        </div>
      </Slider>
    );
  };

  export default HomeSlider;
