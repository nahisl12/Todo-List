import project from './project';

const container = document.querySelector('#container');
const addButton = document.querySelector('#addProj');
let projectArray = [];  // Stores the projects
let projIndex = [];		// stores the index of the project
let delProject;

function render() {
  addProject();
}

// This function handles the behavior of the button used to add projects
function addProject() {
  const addBtn = document.createElement('button');
  addBtn.classList.add('addBtn');
  addBtn.innerText = "Add Project";

  addButton.appendChild(addBtn);

  addBtn.addEventListener('click', () => {
    addProjectPane();
  });
}

// Creates a panel where the name for the new project can be entered
function addProjectPane() {
  let projName = "";
  const namePanel = document.createElement('div');
  namePanel.classList.add('namePanel');
  const form = document.createElement('form');
  const nameField = document.createElement('textarea');

  // Btn for submitting name, creates a form element with input field and stores input in a variable
  const submitBtn = document.createElement('button');
  submitBtn.type = "button";
  submitBtn.innerText = "Create Project";

  form.appendChild(nameField);
  form.appendChild(submitBtn);
  namePanel.appendChild(form);
  container.appendChild(namePanel);

  submitBtn.addEventListener('click', () => {
    projName = nameField.value;
		createProject(projName);
		container.innerHTML = "";
		drawProject();
  });
}

// Logic behind creating a new project and pushing it into the array
function createProject(name) {
  let newProj = project(name);
  projIndex.push(projectArray.push(newProj)-1); // Pushes the index of the proj into the array and the new proj into the projectArray for storage
}

// This handles the DOM elements that print the projects to the HTML DOC
function drawProject() {
	const displayDiv = document.createElement('div');
  displayDiv.classList.add('displayDiv');

	// Test to see if they're stored in array. It works!
	for(let i = 0; i < projectArray.length; i++) {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('projectDiv');
    projectDiv.textContent = projectArray[i].name;

		// Adds an event listener so the divs can be click on
		projectDiv.addEventListener('click', () => {
			console.log(projIndex[i]);
      console.log(projectArray[i]);
      displayDiv.innerHTML = "";
      projectArray[i].addNote(projectDiv);
      projectArray[i].displayNote(displayDiv);
    });
    

    container.appendChild(projectDiv);
    container.appendChild(displayDiv);
  }
}

let project1 = project("TempProj");
projIndex.push(projectArray.push(project1)-1);
let project2 = project("Testproj1");
projIndex.push(projectArray.push(project2)-1);

drawProject();

render();