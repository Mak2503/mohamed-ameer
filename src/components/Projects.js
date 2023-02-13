import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";

const Projects = ({ heading, subHeading, data }) => {
  return (
    <div className="mt-32">
      <div id="projects">
        <span className="letterSpacedText">{subHeading}</span>
        <h1 className="text-6xl my-5" style={{ fontWeight: 900 }}>
          {heading}
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-14 mt-24">
        {data.map((dt) => (
          <Link to={`/projects/${dt.id}`}>
            <ProjectCard
              key={dt.id}
              imgUrl={dt.imageUrl}
              year={dt.year}
              description={dt.header}
              descColor={dt.descColor}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
