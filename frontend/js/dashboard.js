document.addEventListener("DOMContentLoaded", function () {
  fetch("backend/php/dashboard_fetch.php")
    .then((response) => response.json())
    .then((data) => {
      const allProjectsDiv = document.getElementById("all-projects");
      const myProjectsDiv = document.getElementById("my-projects");

      // All projects table
      let allProjectsTable =
        "<table><tr><th>Nazwa Projektu</th><th>Opis</th><th>Data Rozpoczęcia</th><th>Data Zakończenia</th><th>Status</th></tr>";
      data.allProjects.forEach((project) => {
        allProjectsTable += `<tr><td>${project.project_name}</td><td>${project.description}</td><td>${project.start_date}</td><td>${project.end_date}</td><td>${project.status}</td></tr>`;
      });
      allProjectsTable += "</table>";
      allProjectsDiv.innerHTML = allProjectsTable;

      // Logged user's projects table
      let myProjectsTable =
        "<table><tr><th>Nazwa Projektu</th><th>Opis</th><th>Data Rozpoczęcia</th><th>Data Zakończenia</th><th>Status</th></tr>";
      data.myProjects.forEach((project) => {
        myProjectsTable += `<tr><td>${project.project_name}</td><td>${project.description}</td><td>${project.start_date}</td><td>${project.end_date}</td><td>${project.status}</td></tr>`;
      });
      myProjectsTable += "</table>";
      myProjectsDiv.innerHTML = myProjectsTable;
    })
    .catch((error) => console.error("Błąd:", error));
});
