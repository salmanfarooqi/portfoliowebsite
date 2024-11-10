import React from 'react';

interface BannerProps {
  message: string;
  highlight: string;
  buttonText: string;
  className?: string;
}

const Banner: React.FC<BannerProps> = ({ message, highlight, buttonText, className }) => {
  return (
    <div className={`bg-primary w-[100%] mt-10 font-serif flex flex-col items-start ${className}`}>
      <p className="text-xl xxs:text-3xl px-10 py-10 text-black flex flex-col">
        {message}{" "}
        <span className="">{highlight}</span>
      </p>
      <div className="w-full px-10">
        <button className="border-[1px] mb-5 border-black px-1 py-1">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Banner;
