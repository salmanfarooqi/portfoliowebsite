import { useState } from "react";
import Image from "../newcomponents/Image";
import Modal from "../Modal";
import Link from "next/link";

export interface Project {
  name: string;
  link: string;
  images: string[];
  titles: string[];
}

export interface ProjectsComponentProps {
  liveProjects: Project[];
  underDevelopmentProjects: Project[];
}

const ProjectsComponent: React.FC<ProjectsComponentProps> = ({
  liveProjects,
  underDevelopmentProjects,
}) => {
  const [activeTab, setActiveTab] = useState<"live" | "under">("live");
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  

  const handleImageClick = (project: Project) => {
    setSelectedProject(project);
    setSelectedImageIndex(0);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
    setSelectedImageIndex(0);
  };

  const handleImageChange = (index: number) => {
    setSelectedImageIndex(index);
  };

  const renderProjects = (projects: Project[]) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div
            key={project.name}
            className="relative p-4 border rounded-md transition-all cursor-pointer"
            onClick={() => handleImageClick(project)}
          >
            <Image
              src={project.images[0]}
              alt={project.name}
              width={700}
              height={300}
              className="object-cover w-full max-h-[400px]"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity">
              More Info About Project...
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-2 bg-white bg-opacity-75 text-center">
              <Link href={project.link} target="_blank" rel="noopener noreferrer">
                <p>{project.name}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="font-quicksand text-sm mt-10">
        <nav className="flex justify-center mb-4">
          <button
            className={`px-4 py-1 mx-1 ${
              activeTab === "live"
                ? "bg-primary text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setActiveTab("live")}
          >
            Live Projects
          </button>
          <button
            className={`px-4 py-1 mx-1 ${
              activeTab === "under"
                ? "bg-primary text-white "
                : "bg-gray-200"
            }`}
            onClick={() => setActiveTab("under")}
          >
            Under Development
          </button>
        </nav>

        {activeTab === "live" && (
          <div>
            <h2 className="text-xl mb-2">Live Projects</h2>
            {renderProjects(liveProjects)}
          </div>
        )}

        {activeTab === "under" && (
          <div>
            <h2 className="text-xl mb-2">Under Development Projects</h2>
            {renderProjects(underDevelopmentProjects)}
          </div>
        )}
      </div>
      {selectedProject && (
        <Modal
          show={showModal}
          className="!w-full overflow-auto"
          containerClass="w-[70%] sm:w-1/2 md:w-1/3 lg:w-[500px] lg:h-[500px] px-1 sm:px-4 bg-white"
          onClose={handleCloseModal}
        >
          <div className="!w-full flex flex-col items-center">
            <div className="flex justify-end w-full px-4 sm:px-2 md:px-0">
              <div
                onClick={handleCloseModal}
                className="relative top-1 sm:top-1 font-extrabold cursor-pointer"
              >
                X
              </div>
            </div>
            <div className="w-full font-OpenSans mb-10">
              <div className="overflow-y-auto max-h-[300px] sm:max-h-[400px] custom-scrollbar" id="scroll-1">
                <p className="text-center font-bold">
              {selectedProject.titles[selectedImageIndex]}
              </p>
                <Image
                  src={selectedProject.images[selectedImageIndex]}
                  alt={selectedProject.name}
                  width={100}
                  height={100}
                  className="object-contain w-full min-h-[300px] sm:min-h-[400px]"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-0 lg:p-2 bg-white bg-opacity-75 text-center">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {selectedProject.name}
                </a>
              </div>
              <div className="flex justify-center lg:mb-10">
                {selectedProject.images.map((_, index) => (
                  <button
                    key={index}
                    className={`mx-1 sm:mx-2 p-2 sm:p-2 border ${
                      selectedImageIndex === index
                        ? "bg-primary text-white"
                        : "bg-gray-200"
                    }`}
                    onClick={() => handleImageChange(index)}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default ProjectsComponent;
