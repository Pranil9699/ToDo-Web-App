// create the Todo
function addTODO() {
  const title = document.getElementById("todo-title").value;
  const content = document.getElementById("todo-content").value;
  if (title && content) {
    const todo = {
      title: title,
      content: content,
      status: "Process",
      date_day:new Date().getDate(),
      date_month:new Date().getMonth(),
      date_year:new Date().getFullYear()

    };
    // Check if there are existing TODOs in localStorage
    const existingTODOs = JSON.parse(localStorage.getItem("todos")) || [];
    existingTODOs.push(todo);

    // Save the updated TODOs to localStorage
    localStorage.setItem("todos", JSON.stringify(existingTODOs));

    // Clear the form fields
    document.getElementById("todo-title").value = "";
    document.getElementById("todo-content").value = "";

    swal({
      title: "Good job!",
      text: "TODO added successfully!",
      icon: "success",
      button: "Done!",
    });
  } else {
    swal({
      title: "Good job!",
      text: "Please fill in both title and content fields.",
      icon: "error",
      button: "Done!",
    });
  }
}

// Add a submit event listener to the form
const todoForm = document.getElementById("todo-form");
todoForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission
  addTODO(); // Call the function to add TODO
});

//---------------------------

