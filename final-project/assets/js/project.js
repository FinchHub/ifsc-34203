// This JS was done completely with AI. Wanted to use Decap but it prefers site generators.
// Since I wasn't going to build the JS either way, generating was the next best thing.
// Don't like having to rely on it though, I'll come back to this and learn it just for myself.

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch("assets/data/projects.json")
  .then((res) => res.json())
  .then((projects) => {
    const project = projects.find((p) => p.id === id);

    if (!project) {
      document.querySelector(".project-container").innerHTML =
        "<p>Project not found.</p>";
      return;
    }

    document.title = `${project.title} | Doxa Construction`;

    document.querySelector(".project-container").innerHTML = `
      <p class="project-status">${project.status === "current" ? "Current Project" : "Past Project"}</p>
      <h1>${project.title}</h1>
      <img class="project-hero" src="${project.thumbnail}" alt="${project.title}" />
      <div class="project-info">
        <p><span>Location:</span> ${project.location}</p>
        <p><span>Engineer:</span> ${project.engineer}</p>
        <p><span>Client:</span> ${project.client}</p>
      </div>
      <div class="project-desc">
        <p>${project.description}</p>
      </div>
    `;
  })
  .catch((err) => console.error("Failed to load project:", err));
