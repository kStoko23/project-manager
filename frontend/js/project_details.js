document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get("id");
  const userId = parseInt(window.userId);
  let currentProject = {};

  if (projectId) {
    fetchProjectDetails(projectId);
  } else {
    const projectContainer = document.getElementById("project_container");
    projectContainer.innerHTML = "<p>Projekt nie istnieje</p>";
  }
});
function fetchProjectDetails(projectId) {
  fetch(`../../backend/php/get_project_by_id.php?id=${projectId}`)
    .then((response) => response.json())
    .then((project) => {
      if (project) {
        displayProjectDetails(project);
      } else {
        const projectContainer = document.getElementById("project_container");
        projectContainer.innerHTML = "<p>Projekt nie istnieje</p>";
      }
    })
    .catch((error) => {
      console.error("Błąd:", error);
    });
}

function displayProjectDetails(project) {
  const projectContainer = document.getElementById("project_container");
  currentProject = project;

  const projectDetailsHTML = `
    <div class="project-info">
      <div class="project-detail">
        <span class="project-label">Nazwa Projektu:</span>
        <span class="project-value">${project.project_name}</span>
      </div>
      <div class="project-detail">
        <span class="project-label">Data Rozpoczęcia:</span>
        <span class="project-value">${project.start_date}</span>
      </div>
      <div class="project-detail">
        <span class="project-label">Data Zakończenia:</span>
        <span class="project-value">${project.end_date}</span>
      </div>
      <div class="project-detail">
        <span class="project-label">Status:</span>
        <span class="project-value">${project.status}</span>
      </div>
        <div class="project-detail">
            <span class="project-label">Opis:</span>
            <span class="project-value">${project.description}</span>
        </div>
        <div class="project-detail">
        <span class="project-label">Kierownik:</span>
        <span class="project-value">${project.project_manager_id}</span>
        </div>
    </div>
    
  `;
  projectContainer.innerHTML = projectDetailsHTML;

  if (userId === project.project_manager_id) {
    const ownerButtons = `<button class="edit-button" onclick="editProject()">Edytuj</button>
    <button class="delete-button" onclick="showDeleteConfirmation()">Usuń</button>`;
    projectContainer.innerHTML += ownerButtons;
  }
}

function editProject() {
  document.getElementById("project_container").style.display = "none";
  const project = currentProject;
  const editForm = document.getElementById("edit_project_form");
  editForm.style.display = "block";

  document.getElementById("edit_project_name").value = project.project_name;
  document.getElementById("edit_start_date").value = project.start_date;
  document.getElementById("edit_end_date").value = project.end_date;
  document.getElementById("edit_status").value = project.status;
  document.getElementById("edit_description").value = project.description;
}
function validateForm() {
  let isValid = true;

  const projectName = document.getElementById("edit_project_name").value;
  const startDate = document.getElementById("edit_start_date").value;
  const endDate = document.getElementById("edit_end_date").value;
  const status = document.getElementById("edit_status").value;
  const description = document.getElementById("edit_description").value;

  if (!projectName.trim()) {
    alert("Nazwa projektu jest wymagana.");
    isValid = false;
  }
  if (!startDate) {
    alert("Data rozpoczęcia jest wymagana.");
    isValid = false;
  }
  if (!endDate) {
    alert("Data zakończenia jest wymagana.");
    isValid = false;
  }

  if (new Date(startDate) > new Date(endDate)) {
    alert("Data rozpoczęcia nie może być późniejsza niż data zakończenia.");
    isValid = false;
  }

  return isValid;
}
function submitEditForm() {
  if (validateForm()) {
    const projectName = document.getElementById("edit_project_name").value;
    const startDate = document.getElementById("edit_start_date").value;
    const endDate = document.getElementById("edit_end_date").value;
    const status = document.getElementById("edit_status").value;
    const description = document.getElementById("edit_description").value;

    const project = {
      project_name: projectName,
      start_date: startDate,
      end_date: endDate,
      status: status,
      description: description,
    };

    fetch(`../../backend/php/edit_project.php?id=${currentProject.id}`, {
      method: "POST",
      body: new URLSearchParams({
        project_id: currentProject.id,
        project_name: projectName,
        start_date: startDate,
        end_date: endDate,
        status: status,
        description: description,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
          fetchProjectDetails(currentProject.id);
          document.getElementById("edit_project_form").style.display = "none";
          document.getElementById("project_container").style.display = "block";
        }
      })
      .catch((error) => {
        console.error("Błąd:", error);
      });
  }
}
function showDeleteConfirmation() {
  document.getElementById("deleteConfirmationModal").style.display = "block";
}

function closeModal() {
  document.getElementById("deleteConfirmationModal").style.display = "none";
}

function deleteProject() {
  fetch(`../../backend/php/delete_project.php?id=${currentProject.id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        alert(data.error);
      } else {
        alert("Projekt został usunięty.");
        window.location.href = "../../index.php";
      }
    })
    .catch((error) => {
      console.error("Błąd:", error);
    });
}
function confirmDelete() {
  deleteProject();
  closeModal();
}
