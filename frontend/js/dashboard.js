document.addEventListener("DOMContentLoaded", function () {
  fetch("backend/php/dashboard_fetch.php")
    .then((response) => response.json())
    .then((data) => {
      const allProjectsDiv = document.getElementById("all-projects");
      const myProjectsDiv = document.getElementById("my-projects");
      const userRoleId = parseInt(window.userRoleId);

      let headers =
        "<th>Nazwa Projektu</th><th>Data Rozpoczęcia</th><th>Data Zakończenia</th><th>Status</th>";

      let allProjectsTable = `<table><tr>${headers}</tr>`;
      let allProjectsCounter = 0;
      data.allProjects.forEach((project) => {
        if (allProjectsCounter < 5) {
          allProjectsTable += `<tr data-project-id="${project.id}"><td>${project.project_name}</td><td>${project.start_date}</td><td>${project.end_date}</td><td>${project.status}</td></tr>`;
          allProjectsCounter++;
        }
      });
      allProjectsTable += `<tr><td colspan="5"><a href="frontend/html/projects.php">Zobacz wszystkie projekty</a></td></tr>`;
      allProjectsTable += "</table>";
      allProjectsDiv.innerHTML = allProjectsTable;

      let myProjectsTable = `<table><tr>${headers}</tr>`;
      let myProjectsCounter = 0;
      data.myProjects.forEach((project) => {
        if (myProjectsCounter < 5) {
          myProjectsTable += `<tr data-project-id="${project.id}"><td>${project.project_name}</td><td>${project.start_date}</td><td>${project.end_date}</td><td>${project.status}</td></tr>`;
          myProjectsCounter++;
        }
      });
      if (userRoleId === 1) {
        myProjectsTable += `<tr><td colspan="5"><a href="frontend/html/my_projects.php">Zobacz wszystkie moje projekty</a></td></tr>`;
      } else {
        myProjectsTable += `<tr><td colspan="4"><a href="frontend/html/my_projects.php">Zobacz wszystkie moje projekty</a></td></tr>`;
      }
      myProjectsTable += "</table>";
      myProjectsDiv.innerHTML = myProjectsTable;

      function onProjectClick(projectId) {
        window.location.href = `frontend/html/project_details.php?id=${projectId}`;
      }

      document
        .querySelectorAll("#all-projects table tr, #my-projects table tr")
        .forEach((row) => {
          row.addEventListener("click", () => {
            const projectId = row.getAttribute("data-project-id");
            if (projectId) {
              onProjectClick(projectId);
            }
          });
        });
    })
    .catch((error) => console.error("Błąd:", error));
});
