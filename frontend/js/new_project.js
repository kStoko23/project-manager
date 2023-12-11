const userId = parseInt(window.userId);
function createProject() {
  const projectName = document.getElementById("new_project_name").value;
  const startDate = document.getElementById("new_start_date").value;
  const endDate = document.getElementById("new_end_date").value;
  const status = document.getElementById("new_status").value;
  const description = document.getElementById("new_description").value;

  // Tutaj możesz dodać walidację danych formularza
  if (validateForm()) {
    fetch("../../backend/php/create_project.php", {
      method: "POST",
      body: new URLSearchParams({
        project_name: projectName,
        start_date: startDate,
        end_date: endDate,
        status: status,
        description: description,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert("Projekt został utworzony.");
          window.location.href = `../../frontend/html/project_details.php?id=${data.project_id}`;
        } else {
          alert("Wystąpił błąd: " + data.error);
        }
      })
      .catch((error) => {
        console.error("Błąd:", error);
      });
  }
}
function validateForm() {
  let isValid = true;

  const projectName = document.getElementById("new_project_name").value;
  const startDate = document.getElementById("new_start_date").value;
  const endDate = document.getElementById("new_end_date").value;
  const status = document.getElementById("new_status").value;
  const description = document.getElementById("new_description").value;

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
