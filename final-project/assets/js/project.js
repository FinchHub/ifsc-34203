// This JS was done almost completely with AI. Wanted to use Decap but it prefers site generators.
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

        // Hero
        const heroImg = document.querySelector(".project-hero-img");
        heroImg.src = project.gallery[0];
        heroImg.alt = project.title;

        document.querySelector(".project-status").textContent =
            project.status === "current" ? "Current Project" : "Past Project";
        document.querySelector(".hero-text h1").textContent = project.title;

        // Body
        document.querySelector(".project-info").innerHTML = `
      <p><span>Location</span><br> ${project.location}</p>
      <p><span>Engineer</span><br> ${project.engineer}</p>
      <p><span>Client</span><br> ${project.client}</p>
    `;

        document.querySelector(".project-desc").innerHTML = `
      <p>${project.description}</p>
    `;
    })
    .catch((err) => console.error("Failed to load project:", err));
