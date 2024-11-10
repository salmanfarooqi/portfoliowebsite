
import React, { useEffect, useRef, useState } from 'react';

interface Skill {
  name: string;
  percentage: number;
}

interface SkillChartProps {
  title: string;
  skills: Skill[];
  colors: string[];
}

const SkillChart: React.FC<SkillChartProps> = ({ title, skills, colors }) => {
  const [isVisible, setIsVisible] = useState(false);
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after the animation is triggered
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => {
      if (chartRef.current) {
        observer.unobserve(chartRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={chartRef}
      style={{ borderRadius: '8px', fontFamily: "font-quicksand" }}
      className='text-base'
    >
      <h2 style={{ textAlign: 'center', color: '#333' }}>{title}</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {skills.map((skill, index) => (
          <div key={index} style={{ flex: '1 1 45%', margin: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
              <span>{skill.name}</span>
              <span className='hidden'>{skill.percentage}%</span>
            </div>
            <div style={{ backgroundColor: '#f0f0f0', borderRadius: '2px', overflow: 'hidden', marginTop: '2px', padding: '3px' }}>
              <div
              className='bg-primary'
                style={{
                  width: isVisible ? `${skill.percentage}%` : '0%',
                  // backgroundColor: "#F97316",
                  height: '7px',
                  position: 'relative',
                  borderRadius: '10px',
                  transition: 'width 1s ease-in-out',  // Smooth width transition
                }}
              >
                <div
                  style={{
                    height: '10px',
                    width: '10px',
                    borderRadius: '100%',
                    backgroundColor: "white",
                    position: 'absolute',
                    top: '-1px',
                    right: '0px',
                    zIndex: 100,
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillChart;
