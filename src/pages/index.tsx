/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import Layout from "@/components/newcomponents/layout";
import HomeSlider from "@/components/newcomponents/HomeSilder";
import Navbar from "@/components/Navbar";
import Aos from "aos";
import Services from "@/components/Services/Services";
import SkillsCard from "@/components/About/SkillsCard";
import Banner from "@/components/About/Banner";
import SectionAnimation from "@/components/SectionAnimation";
import SkillChart from "@/components/Skills/SkillesLine";
import EducationalDetails from "@/components/education/EducationalDetails";
import ExperienceDetails from "@/components/experience/ExperienceDetails";
import MyWork, { Project } from "@/components/mywork/MyWork";
import ContactUs from "@/components/contactus";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaTwitter,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Index() {
  const items = [
    {
      id: "1",
      imgSrc: "About/light Transparent.png",
      text: "Graphic Design",
      borderBottomColor: "#FFCC33",
    },
    {
      id: "2",
      imgSrc: "About/Development.png",
      text: "Web Design",
      borderBottomColor: "#0373B2",
    },
    {
      id: "3",
      imgSrc: "About/Software.png",
      text: "Software",
      borderBottomColor: "#0E5189",
    },
    {
      id: "4",
      imgSrc: "About/Application.png",
      text: "Application",
      borderBottomColor: "#85DCD9",
    },
  ];

  useEffect(function () {
    Aos.init({ duration: 2000 });
  }, []);

  const skillsData = [
    { name: "HTML", percentage: 100 },
    { name: "CSS", percentage: 100 },
    { name: "JavaScript", percentage: 100 },
    { name: "TypeScript", percentage: 100 },
    { name: "React", percentage: 100 },
    { name: "Next.js", percentage: 100 },
    { name: "Tailwind CSS", percentage: 100 },
    { name: "Bootstrap", percentage: 100 },
    { name: "Ant Design", percentage: 100 },
    { name: "StoryBook", percentage: 100 },
    { name: "Node.js", percentage: 100 },
    { name: "Express", percentage: 100 },
    { name: "MongoDB", percentage: 100 },
    { name: "graphql", percentage: 100 },
    { name: "PostgreSQL", percentage: 100 },
    { name: "Sequelize", percentage: 100 },
    { name: "Nest js", percentage: 100 },
  ];

  const colors = [
    "#001f3f", // Dark Blue
    "#85144b", // Dark Red
    "#2ECC40", // Dark Green
    "#FF851B", // Dark Orange
    "#B10DC9", // Dark Purple
    "#3D9970", // Dark Teal
    "#111111", // Black
    "#001f3f", // Dark Navy
    "#85144b", // Dark Maroon
    "#3D9970", // Dark Sea Green
  ];

  const educationalRecords = [
    {
      category: "BACHELOR DEGREE OF COMPUTER SCIENCE",
      details: [
        {
          Grade: "3.5GPA",
          institution: "Abdul Wali Khan University Mardan (AWKUM)",
          duration: "2023",
        },
      ],
    },
    {
      category: "HIGH SCHOOL SECONDARY EDUCATION",
      details: [
        {
          Grade: "Grade: A+",
          institution: "Hims Degree college peshawer",
          duration: "2018",
        },
      ],
    },
    {
      category: "MATRICULATION",
      details: [
        {
          Grade: "Grade: A+",
          institution: "Saeed public school charsadha",
          duration: "2016",
        },
      ],
    },
  ];

  const experienceRecords = [
    {
      title: "Full stack  Developer",
      duration: "Oct. 2023 - Oct. 2024",
      SoftwareHouse: "Alimcosoft pvt limited",
      description:
        "Led the development of multiple web applications, ensuring high performance and responsiveness. Collaborated with cross-functional teams to design and implement new features. Maintained and upgraded existing projects to meet modern web standards.",
    },
    {
      title: "InternShip",
      duration: "Jun 2023 - Aug 2023",
      SoftwareHouse: "Void Solutions - Web & Software Development",
      description:
        "Maintained various client projects, ensuring their stability and performance. Gained extensive experience with Next.js, TypeScript, and Storybook. Worked on diverse projects, enhancing my skills in frontend development and client communication.",
    },
  ];

  const liveProjects = [
    {
      name: "Foodil.com",
      link: "https://foodil.co/",
      images: [
        "/images/Foodi/Home.jpeg",
        "/images/Foodi/Registration.jpeg",
        "/images/Foodi/Login.jpeg",
        "/images/Foodi/preview.jpeg",
        "/images/Foodi/Products.jpeg",
        "/images/Foodi/productsDetails.jpeg",
        "/images/Foodi/Brands.jpeg",
      ],
      titles: [
        "Home",
        "Registration",
        "Login",
        "preview",
        "Products",
        "productsDetails",
        "Brands",
      ],
    },
    {
      name: "polarpro.com",
      link: "https://www.polarpro.com/",
      images: [
        "/images/polar/Home.jpeg",
        // "/images/Foodi/Registration.jpeg",
        "/images/polar/login.jpeg",
        "/images/polar/productsDetails.jpeg",
        "/images/polar/productsFilter.jpeg",
        "/images/polar/catogries.jpeg",
        "/images/polar/Contact Us.jpeg",
        "/images/polar/Support.jpeg",
      ],
      titles: [
        "Home",
        "Login",
        "productsDetails",
        "productsFilter",
        "catogries",
        "Contact Us",
        "Support",
      ],
    },
    {
      name: "freedomelitefunding.com",
      link: "https://freedomelitefunding.com/",
      images: [
        "images/freedome/home.jpeg",
        "images/freedome/buy.jpeg",
        "images/freedome/FQA.jpeg",
        "images/freedome/PayOut.jpeg",
        "images/freedome/About.jpeg",
        "images/freedome/contact.jpeg",
      ],
      titles: [
        "Alpha Image 1 Title",
        "Alpha Image 2 Title",
        "Alpha Image 3 Title",
      ],
    },
    {
      name: "travelnoire.com",
      link: "https://travelnoire.com/",
      images: [
        "images/Travel/Home.jpeg",
        "images/Travel/culture.jpeg",
        "images/Travel/CityGuid.jpeg",
        "images/Travel/News.jpeg",
      ],
      titles: [
        "Alpha Image 1 Title",
        "Alpha Image 2 Title",
        "Alpha Image 3 Title",
      ],
    },
    // Add more live projects here
  ];

  const underDevelopmentProjects = [
    {
      name: "comming soon...",
      link: "#",
      images: ["/Home/brand-1.jpg", "/Home/brand-1.jpg", "/Home/brand-1.jpg"],
      titles: [
        "Alpha Image 1 Title",
        "Alpha Image 2 Title",
        "Alpha Image 3 Title",
      ],
    },
  ];

  return (
    <Layout>
      <div
        className="h-screen w-full overflow-hidden overflow-y-auto bg-gray-100 text-[#101825] text-custom-black xxs:pr-10"
        id="scroll-1"
      >
        <div className="h-screen w-full" id="home">
          <div className="">
            <HomeSlider />
          </div>
        </div>

        <div className="mt-10 w-full px-10 xxs:pr-20" id="about">
          <div className="mt-3 flex w-full flex-col">
            <SectionAnimation
              sectionTitle="ABOUT US"
              // borderColor="primary"
              className="additional-class-name"
            />
            <p className="font-quicksand text-[10px] font-extralight tracking-[8px] text-gray-400">
              WHO AM I?
            </p>
            <p className="mt-6 font-serif font-bold tracking-[8px] text-black">
              WHO AM I?
            </p>
            <p className="mt-12 font-quicksand">
              <span className="font-quicksand font-bold">
                Hi I,m Salman Farooqi
              </span>{" "}
              As a full stack developer with 1 years and 3 months of experience,
              I specialize in frontend, backend, and DevOps. On the frontend, I
              excel in technologies like html, css, tailwind, React.js, Next.js
              and Next.js while on the backend, I leverage Node.js, Express, graphql,postgress and
              MongoDB. My expertise lies in building dynamic web applications
              with clean, efficient code. Additionally,
            </p>
            <p className="py-5 font-quicksand">
              I am proficient in UI development using Tailwind CSS, Storybook,
              and Jest for testing on both the frontend and backend. I also have
              experience with Nginx, PM2, Linux, Ubuntu, MinIO, and AWS. I'm
              eager to collaborate on innovative projects for exceptional
              digital experiences.
            </p>
          </div>

          <div className="mb-5 flex w-full items-center justify-center">
            <div className="flex w-full flex-wrap justify-between gap-10">
              {items.map((item) => (
                <SkillsCard
                  key={item.id}
                  id={item.id}
                  imgSrc={item.imgSrc}
                  text={item.text}
                  borderBottomColor={item.borderBottomColor}
                  className="box-shadow1 mt-16 flex w-full cursor-pointer flex-col items-start justify-start bg-white px-4 py-3 md:mt-20 md:w-[40%] xmd:w-[30%] lg:w-[20%]"
                />
              ))}
            </div>
          </div>
          <Banner
            message="I am happy to know you"
            highlight="that 30+ projects done successfully!"
            buttonText="Hire Me"
            className="additional-class-name"
          />
        </div>

        <div className="mt-10 w-full px-10" id="skills">
          <SectionAnimation
            sectionTitle="SKILLS"
            className="additional-class-name"
          />
          <div className="w-full">
            <p className="font-quicksand text-[10px] font-extralight tracking-[8px] text-gray-400">
              MY SPECIALTY
            </p>
            <p className="mt-6 font-serif font-bold tracking-[8px] text-black">
              MY SKILLS
            </p>
            <p className="mt-10 font-quicksand font-extralight">
              The Big Oxmox advised her not to do so, because there were
              thousands of bad Commas, wild Question Marks and devious Semikoli,
              but the Little Blind Text didn’t listen. She packed her seven
              versalia, put her initial into the belt and made herself on the
              way.
            </p>
          </div>
          <div className="mt-10">
            <SkillChart title="My Skills" skills={skillsData} colors={colors} />
          </div>
        </div>

        <div className="mt-10 w-full px-10" id="education">
          <SectionAnimation
            sectionTitle="EDUCATION"
            className="additional-class-name"
          />
          <div className="w-full">
            <p className="font-quicksand text-[10px] font-extralight tracking-[8px] text-gray-400">
              EDUCATION
            </p>
            <p className="mt-6 font-serif font-bold tracking-[8px] text-black">
              EDUCATION
            </p>
            <EducationalDetails records={educationalRecords} />
          </div>
        </div>

        <div className="mt-10 w-full px-10" id="experience">
          <SectionAnimation
            sectionTitle="EXPERIENCE"
            className="additional-class-name"
          />
          <div className="w-full">
            <p className="font-quicksand text-[10px] font-extralight tracking-[8px] text-gray-400">
              EXPERIENCE
            </p>
            <p className="mt-6 font-serif font-bold tracking-[8px] text-black">
              EXPERIENCE
            </p>
            <ExperienceDetails experience={experienceRecords} />
          </div>
        </div>

        <div className="mt-10 w-full px-10" id="project">
          <SectionAnimation
            sectionTitle="MY WORK"
            className="additional-class-name"
          />
          <div className="w-full">
            <p className="font-quicksand text-[10px] font-extralight tracking-[8px] text-gray-400">
              MY WORK
            </p>
            <p className="mt-6 font-serif font-bold tracking-[8px] text-black">
              MY WORK
            </p>
            <MyWork
              liveProjects={liveProjects}
              underDevelopmentProjects={underDevelopmentProjects}
            />
          </div>
        </div>

        <SectionAnimation
          sectionTitle=" CONTACT US "
          className="additional-class-name"
        />
        <p className="font-quicksand text-[10px] font-extralight tracking-[8px] text-gray-400">
          CONTACT US
        </p>
        <p className="mt-6 font-serif font-bold tracking-[8px] text-black">
          CONTACT US
        </p>
        <div
          className="mt-10 flex w-full flex-col px-2 sm:flex-row md:px-10"
          id="contact"
        >
          <div className="flex w-full flex-col py-5 sm:w-[30%] md:items-center md:justify-center">
            <h2 className="mb-4 text-2xl font-bold text-gray-700">Follow Us</h2>
            <div className="flex flex-wrap gap-6">
              {/* Social Media Icons */}
              <a
                href="https://www.linkedin.com/in/salman-farooqi-82554125a/"
                target="_blank"
                rel="noopener noreferrer"
                className="transform rounded-md bg-gradient-to-br from-blue-100 to-green-100 p-3 px-1 py-1 shadow-lg transition-transform hover:scale-110 sm:p-5 md:p-7 lg:p-10"
              >
                <FaLinkedin
                  className="h-10 w-10 text-white hover:text-gray-200"
                />
              </a>
              <a
                href="https://www.gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transform rounded-md bg-gradient-to-br from-blue-100 to-green-100 p-3 px-1 py-1 shadow-lg transition-transform hover:scale-110 sm:p-5 md:p-7 lg:p-10"
              >
                <SiGmail className="h-10 w-10 text-white hover:text-gray-200" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transform rounded-md bg-gradient-to-br from-blue-100 to-green-100 p-3 px-1 py-1 shadow-lg transition-transform hover:scale-110 sm:p-5 md:p-7 lg:p-10"
              >
                <FaTwitter className="h-10 w-10 text-white hover:text-gray-200" />
              </a>
              <a
                href="https://www.facebook.com/salman.farooqi.98478"
                target="_blank"
                rel="noopener noreferrer"
                className="transform rounded-md bg-gradient-to-br from-blue-100 to-green-100 p-3 px-1 py-1 shadow-lg transition-transform hover:scale-110 sm:p-5 md:p-7 lg:p-10"
              >
                <FaFacebook className="h-10 w-10 text-white hover:text-gray-200" />
              </a>
              <a
                href="https://github.com/salmanfarooqi"
                
                target="_blank"
                rel="noopener noreferrer"
                className="transform rounded-md bg-gradient-to-br from-blue-100 to-green-100 p-3 px-1 py-1 shadow-lg transition-transform hover:scale-110 sm:p-5 md:p-7 lg:p-10"
              >
                <FaGithub className="h-10 w-10 text-white hover:text-gray-200" />
              </a>
              <a
              href="https://www.instagram.com/salmanfarooqi2001/"
                target="_blank"
                rel="noopener noreferrer"
                className="transform rounded-md bg-gradient-to-br from-blue-100 to-green-100 p-3 px-1 py-1 shadow-lg transition-transform hover:scale-110 sm:p-5 md:p-7 lg:p-10"
              >
                <FaInstagram className="h-10 w-10 text-white hover:text-gray-200" />
              </a>
            </div>
          </div>

          <div className="w-full sm:w-[70%]">
            <div className="w-full">
              <ContactUs />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Index;
