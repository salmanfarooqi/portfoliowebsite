import React, { useState } from 'react';

interface EducationalDetail {
    Grade: string;
  institution: string;
  duration: string;
}

interface EducationalRecord {
  category: string;
  details: EducationalDetail[];
}

interface EducationalDetailsProps {
  records: EducationalRecord[];
}


const EducationalDetails: React.FC<EducationalDetailsProps> = ({ records }) => {
  const [showCategory, setShowCategory] = useState<string | null>(records[0]?.category || null);

    const toggleShow = (category: any) => {
        setShowCategory(showCategory === category ? null : category);
    }

    return (
        <div className='font-quicksand text-sm mt-10'>
           {records.map((record, index) => (
                <div key={index}>
                    <div
                        className={`w-full border-[1px] border-[#d0d2d7] my-2 px-2 sm:px-10 cursor-pointer py-2 flex items-center justify-between ${showCategory === record.category ? 'bg-primary' : 'bg-[#eef0f6]'}`}
                        onClick={() => toggleShow(record.category)}
                    >
                        <div>
                            <p className='text-base font-medium'>{record.category}</p>
                        </div>
                        <div className='text-lg font-bold'>
                            {showCategory === record.category ? '-' : '+'}
                        </div>
                    </div>
                    {showCategory === record.category && (
                        <div className='w-full flex flex-col px-2 sm:px-10 mt-1 border-[#d0d2d7] border-[1px]'>
                            {record.details.map((detail, detailIndex) => (
                                <div key={detailIndex} className='w-full flex justify-between py-2 border-gray-300'>
                                    <div className='w-full'>
                                       
                                        <p>{detail.institution}</p>
                                        <p>{detail.duration}</p>
                                        <p>{detail.Grade}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default EducationalDetails;
