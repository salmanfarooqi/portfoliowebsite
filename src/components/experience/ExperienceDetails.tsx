/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface ExperienceDetail {
    title: string;
    duration: string;
    description: string;
    SoftwareHouse?: string;
}

interface ExperienceDetailsProps {
    experience: ExperienceDetail[];
}

const ExperienceDetails: React.FC<ExperienceDetailsProps> = ({ experience }) => {
    function getRandomColor(): string {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
    return (
        <div className='w-full font-quicksand exprience relative mt-10'>
            {experience.map((item, index) => (
                <div key={index} className='w-full flex justify-between gap-5 mb-4  '>
                    <div className='w-[40px] h-[40px] rounded-full border-[3px] z-50  -ml-[17px] border-[#e3ebe3] flex justify-center items-center'
                    style={{backgroundColor:getRandomColor()}}
                    >
                    </div>
                    <div className='w-[90%] timeline-exprience py-5 px-2 relative bg-[#e3ebe3]'>
                        <p className='font-semibold text-sm sm:text-base'>
                            {item.title} <span className='font-light text-sm sm:text-base text-gray-400'>{item.duration}</span>
                        </p>
                        <p className='font-semibold text-sm sm:text-base'>
                        Software House: <span className='font-light text-sm sm:text-base font-quicksand text-gray-400'> {item.SoftwareHouse}</span>
                        </p>
                        <p className='text-sm sm:text-base'>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ExperienceDetails;
