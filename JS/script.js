{
  const tasks = [];

  const addNewTask = (newTaskContent) => {
    tasks.push({
      content: newTaskContent,
    });

    render();
  };

  const removeTask = (taskIndex) => {
    tasks.splice(taskIndex, 1);
    render();
  };

  const toggleTaskDone = (taskIndex) => {
    tasks[taskIndex].done = !tasks[taskIndex].done;
    render();
  };

  const bindEvents = () => {
    const removeButtons = document.querySelectorAll(".js-remove");

    removeButtons.forEach((removeButton, index) => {
      removeButton.addEventListener("click", () => {
        removeTask(index);
      });
    });

    const toggleDoneButtons = document.querySelectorAll(".js-done");

    toggleDoneButtons.forEach((toggleDoneButton, index) => {
      toggleDoneButton.addEventListener("click", () => {
        toggleTaskDone(index);
      });
    });
  };

  const render = () => {
    let htmlString = "";

    for (const task of tasks) {
      htmlString += `
       <li 
          class="section__list${task.done ? " section__list--done" : ""}"
       >
          <button class="buttonList${task.done ? " buttonList--done" : ""} js-done"></button>
          <div class="listTask">${ task.content }</div>
         <button class="buttonList buttonList--delete js-remove"></button>
       </li>
     `;
    }

    document.querySelector(".js-tasks").innerHTML = htmlString;

    bindEvents();

  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTaskContent = document.querySelector(".js-newTask").value.trim();

    if (newTaskContent === "") {
      document.querySelector(".js-newTask").focus();
      return;
    }

    addNewTask(newTaskContent);
    document.querySelector(".js-newTask").value = "";
    document.querySelector(".js-newTask").focus();
  }

  const init = () => {
    render();
    document.querySelector(".js-newTask").focus();
    const form = document.querySelector(".js-form");

    form.addEventListener("submit", onFormSubmit);
  };

  init();
}
