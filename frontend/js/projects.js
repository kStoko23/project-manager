document.addEventListener("DOMContentLoaded", function () {
  const allProjectsData =
    JSON.parse(sessionStorage.getItem("allProjects")) || [];
  const myProjectsData = JSON.parse(sessionStorage.getItem("myProjects")) || [];

  function displayProjects(projects) {
    const projectsTable = document.getElementById("projects-container");
    let headers =
      "<th>Nazwa Projektu</th><th>Opis</th></th><th>Data Rozpoczęcia</th><th>Data Zakończenia</th><th>Status</th>";
    let tableContent = `<table><tr>${headers}</tr>`;

    projects.forEach((project) => {
      tableContent += `<tr data-project-id="${project.id}"><td>${project.project_name}</td><td>${project.description}</td><td>${project.start_date}</td><td>${project.end_date}</td><td>${project.status}</td></tr>`;
    });
    tableContent += "</table>";
    projectsTable.innerHTML = tableContent;

    document.querySelectorAll("#projects-container table tr").forEach((row) => {
      row.addEventListener("click", () => {
        const projectId = row.getAttribute("data-project-id");
        if (projectId) {
          onProjectClick(projectId);
        }
      });
    });
  }

  function onProjectClick(projectId) {
    window.location.href = `../../frontend/html/project_details.php?id=${projectId}`;
  }

  function filterProjects(filterType) {
    if (filterType === "all") {
      displayProjects(allProjectsData);
    } else if (filterType === "mine") {
      displayProjects(myProjectsData);
    }
  }

  document
    .getElementById("all-projects-btn")
    .addEventListener("click", () => filterProjects("all"));
  document
    .getElementById("my-projects-btn")
    .addEventListener("click", () => filterProjects("mine"));

  filterProjects("all");
});
