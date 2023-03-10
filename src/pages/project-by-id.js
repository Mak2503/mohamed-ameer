import { useParams } from "react-router-dom";

const ProjectById = ({ data, view, subHeading }) => {
  const { id } = useParams();
  const project = data.find((dt) => dt.id === id);
  console.log(project);

  let mybutton = document.getElementById("scrollBtn");
  window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <div className="mt-16">
      <div
        id="scrollBtn"
        onClick={() => topFunction()}
        className="fixed cursor-pointer bottom-8 right-8 rounded-full w-12 h-12 text-center p-3 bg-gray-300"
      >
        &#8593;
      </div>
      <div>
        <span className="letterSpacedText">{subHeading}</span>
        <div className="grid gap-20" style={{ gridTemplateColumns: "1fr 2fr" }}>
          <div className="">
            <h2
              className="my-5"
              style={{ fontWeight: 700, fontSize: 42, lineHeight: 1.25 }}
            >
              {project.header}
            </h2>
            <div className="mt-10">
              <span className="letterSpacedText">year</span>
              <div className="mt-3 font-medium text-lg">{project.year}</div>
            </div>
          </div>
          <div className="my-5">
            <div
              style={{ color: "#878a8f" }}
              dangerouslySetInnerHTML={{ __html: project.description }}
              className="font-medium font-family-regular text-xl"
            />
          </div>
        </div>
      </div>
      <div
        className={`${view === "grid" ? "grid grid-cols-2 gap-16 mt-16" : ""}`}
      >
        {project.projectImages.map((img, index) => (
          <div className={`${view === "list" ? "my-16" : ""}`} key={index}>
            <img src={img} alt={index} className="w-full h-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectById;
