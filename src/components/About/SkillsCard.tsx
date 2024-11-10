/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface Props {
  id: string;
  imgSrc: string;
  text: string;
  borderBottomColor: string;
  className:string;
}

const SkillsCard: React.FC<Props> = ({ id, imgSrc, text, borderBottomColor,className }) => {
  return (
    <div
    key={id}
    className={`${className} `}
    style={{
      borderBottomColor: borderBottomColor,
      borderBottomWidth: '2px',
      borderBottomStyle: 'solid',
    }}
  >
    <div>
      <img
        src={imgSrc}
        alt="Development Banner"
        className="w-10 h-10"
      />
    </div>
    <p className="py-5 mb-5 text-sm">{text}</p>
  </div>
  );
};

export default SkillsCard;
