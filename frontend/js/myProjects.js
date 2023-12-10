document.addEventListener("DOMContentLoaded", function () {
  fetch("../../backend/php/dashboard_fetch.php")
    .then((response) => response.json())
    .then((data) => {
      const projectsTable = document.getElementById("projects-container");
      let headers =
        "<th>Nazwa Projektu</th><th>Opis</th><th>Data Rozpoczęcia</th><th>Data Zakończenia</th><th>Status</th>";
      let tableContent = `<table><tr>${headers}</tr>`;

      data.myProjects.forEach((project) => {
        tableContent += `<tr data-project-id="${project.id}"><td>${project.project_name}</td><td>${project.description}</td><td>${project.start_date}</td><td>${project.end_date}</td><td>${project.status}</td></tr>`;
      });
      tableContent += "</table>";
      projectsTable.innerHTML = tableContent;

      document.querySelectorAll("#projects-container tr").forEach((row) => {
        row.addEventListener("click", () => {
          const projectId = row.getAttribute("data-project-id");
          if (projectId) {
            window.location.href = `../../frontend/html/project_details.php?id=${projectId}`;
          }
        });
      });
    })
    .catch((error) => console.error("Błąd:", error));
});
