import React, { ReactNode, useEffect, useRef } from 'react';
import UserSideBar from '../newcomponents/UserSideBar';
import { Chat, Contact, Education, Experience, Home, Skills, Task, Work } from '../icon/sidebar';

interface Props {
  children?: ReactNode;
  onclick?: () => void;
}

const Layout: React.FC<Props> = ({ children }) => {
  const data = [
    {
      icon: <Home />,
      title: 'Home',
      link: '/Home',
    },
    {
      icon: <Task />,
      title: 'About',
      id: "About"
    },
    {
      icon: <Skills />,
      title: 'Skills',
      id: "skills"
    },
    {
      icon: <Education />,
      title: 'Education',
      id: "education"
    },
    {
      icon: <Experience />,
      title: 'Experience',
      id: "experience"
    },
    {
      icon: <Work />,
      title: 'Project',
      id: "mywork"
    },
    {
      icon: <Contact />,
      title: 'Contact',
      id: "contact"
    },
  ];

  return (
    <div className="w-full h-screen text-custom-black flex">
      <title>Portfolio</title>
      <UserSideBar
        data={data as any}
        mainClassName="max-w-[320px] w-24 sm:w-1/4 text-black"
        SideBarLogoClassName={''}
      />
      {children}

    </div>
  );
};

export default Layout;
