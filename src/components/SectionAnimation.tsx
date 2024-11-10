import React from 'react';

interface Props {
  sectionTitle: string;
  // borderColor: string;
  className?: string;
}

const SectionAnimation: React.FC<Props> = ({ sectionTitle, className }) => {
  return (
    <div className={`about-us-section ${className}`}>
      <p className="text-xs tracking-[8px]">{sectionTitle}</p>
      <div className="border-container flex justify-center">
        <div className={`border-line relative w-[120px] border-[6px] border-primary`}>
          <span className="star absolute -top-[12px] left-0">★</span>
        </div>
      </div>
    </div>
  );
};

export default SectionAnimation;
