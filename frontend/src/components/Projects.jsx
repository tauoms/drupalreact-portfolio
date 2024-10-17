import { useEffect, useState } from "react";
import { fetchContent, localhostAddress } from "../services/api";

const Projects = () => {
  const [content, setContent] = useState(null);
  const [included, setIndluded] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchContent("node/projects?include=field_image")
      .then((data) => {
        console.log("Fetched data:", data); // Log the fetched data
        setContent(data.data); // Access the first item in the data array
        setIndluded(data.included);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching content:", error); // Log any errors
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading content: {error.message}</div>;
  }
  return (
    <>
      <h4>Projects</h4>
      <div className="project-card-container" id="projects">
        {content &&
          content.map((project, index) => (
            <div key={index} className="project-card">
              {included &&
              included.length > 0 &&
              included[index]?.attributes?.uri?.url ? (
                <img
                  src={`${localhostAddress}/${included[index].attributes.uri.url}`}
                  alt={project.attributes.title || "Project image"}
                />
              ) : (
                <img src="./images/default.jpg" alt="Default project image" />
              )}
              <h5>{project.attributes.title || `Project ${index + 1}`}</h5>
              <span className="tech">
                {project.attributes.field_technologies ||
                  "Unknown technologies"}
              </span>
              {project && project.attributes && project.attributes.body ? (
                <>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: project.attributes.body.value,
                    }}
                  />
                </>
              ) : (
                <div>No content available</div>
              )}

              <a
                href={`${project.attributes.field_github_link.uri}`}
                target="_blank"
              >
                See GitHub repository
              </a>
            </div>
          ))}
      </div>
    </>
  );
};

export default Projects;
