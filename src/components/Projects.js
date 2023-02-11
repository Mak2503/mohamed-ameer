import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="projects" className="mt-24">
      <div>
        <span className="letterSpacedText">projects</span>
        <h1 className="text-6xl my-5" style={{ fontWeight: 900 }}>
          Case Studies
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-14 mt-24">
        <ProjectCard
          imgUrl="/assets/project-img.jpeg"
          year="2017"
          description="Basic UX Design"
        />
        <ProjectCard
          imgUrl="/assets/project-img.jpeg"
          year="2017"
          description="Basic UX Design"
        />
        <ProjectCard
          imgUrl="/assets/project-img.jpeg"
          year="2017"
          description="Basic UX Design"
        />
      </div>
    </div>
  );
};

export default Projects;
