document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get("id");
  const userId = parseInt(window.userId);
  let currentTask = {};

  if (projectId) {
    fetchTasksForProject(projectId);
  } else {
    const projectContainer = document.getElementById("project_container");
    projectContainer.innerHTML = "<p>Projekt nie istnieje</p>";
  }
});

function fetchTasksForProject(projectId) {
  fetch(`../../backend/php/get_tasks_by_project_id.php?project_id=${projectId}`)
    .then((response) => response.json())
    .then((tasks) => {
      if (tasks) {
        console.log(tasks);
        displayTasks(tasks);
      } else {
        const taskContainer = document.getElementById("task_container");
        taskContainer.innerHTML = "<p>Brak zadań dla tego projektu.</p>";
      }
    })
    .catch((error) => {
      console.error("Błąd przy pobieraniu zadań:", error);
    });
}

function displayTasks(tasks) {
  const taskContainer = document.getElementById("task_container");
  currentTask = tasks;
  localStorage.setItem("currentTask", JSON.stringify(currentTask));
  let tasksHTML = "<h3>Zadania:</h3>";

  tasks.forEach((task) => {
    tasksHTML += `
      <div class="task">
        <div><strong>Nazwa Zadania:</strong> ${task.task_name}</div>
        <div><strong>Opis:</strong> ${task.description}</div>
        <div><strong>Status:</strong> ${task.status}</div>
        <div><strong>Priorytet:</strong> ${task.priority}</div>
        <div><strong>Termin:</strong> ${task.due_date}</div>
      </div>
    `;
  });

  taskContainer.innerHTML = tasksHTML;
}
