// This JS was done completely with AI. Wanted to use Decap but it prefers site generators.
// Since I wasn't going to build the JS either way, generating was the next best thing.
// Don't like having to rely on it though, I'll come back to this and learn it just for myself.

const projectList = document.querySelector(".project-list");

fetch("assets/data/projects.json")
    .then((res) => res.json())
    .then((projects) => {
        const current = projects.filter((p) => p.status === "current");
        const past = projects.filter((p) => p.status === "past");

        if (current.length) {
            projectList.innerHTML += `<h2 class="projects-heading">Current Projects</h2>`;
            projectList.innerHTML += `<div class="projects-grid">${current.map(renderCard).join("")}</div>`;
        }

        if (past.length) {
            projectList.innerHTML += `<h2 class="projects-heading">Past Projects</h2>`;
            projectList.innerHTML += `<div class="projects-grid">${past.map(renderCard).join("")}</div>`;
        }
    })
    .catch((err) => console.error("Failed to load projects:", err));

function renderCard(project) {
    return `
    <a href="project.html?id=${project.id}" class="project-card">
      <img src="${project.thumbnail}" alt="${project.title}" />
      <p class="type">${project.type}</p>
      <p class="title">${project.title}</p>
      <p class="location">${project.location}</p>
    </a>
  `;
}
