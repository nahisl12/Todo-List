import {note, createNote} from './note';

let notesArray = [];
let notesIndex = [];

const project = (name) => {
  const noteHolder = document.createElement('div');

  const details = () => {
    console.log(name);
  };

  const addNote = (parentElement) => {
    const addNoteBtn = document.createElement('button');
    addNoteBtn.innerText = "New Note";

    parentElement.appendChild(addNoteBtn);

    addNoteBtn.addEventListener('click', () => {
      createNotePanel(parentElement);
    });
  };

  const createNotePanel = (parentElement) => {
    let noteTitle;
  
    const noteDiv = document.createElement('div');  // Div where the note is held
    noteDiv.classList.add('noteDiv');
    const noteForm = document.createElement('form');
    // Form items
    const noteName = document.createElement('p');
    noteName.innerText = "Name of note: ";
    const noteNameText = document.createElement('input');
    // Note desc
    const noteDesc = document.createElement('p');
    noteDesc.innerText = "Describe your note: ";
    const noteDescText = document.createElement('textarea');
    // Note due date
    const dueDate = document.createElement('p');
    dueDate.innerText = "When is this due?";
    const dueDateChoice = document.createElement('input');
    dueDateChoice.type = 'date';
    // Note urgency
    const priority = document.createElement('select');
    const urgent = document.createElement('option');
    urgent.innerText = "Urgent";
    const kindaUrgent = document.createElement('option');
    kindaUrgent.innerText = "Kinda Urgent";
    const notUrgent = document.createElement('option');
    notUrgent.innerText = "Not Urgent";
    

    // Submit btn
    const submitForm = document.createElement('button');
    submitForm.type = 'button';
    submitForm.innerText = "Create Note";
  
    // Name appends
    noteName.appendChild(noteNameText);
    noteForm.appendChild(noteName);
    // Description appends
    noteDesc.appendChild(noteDescText);
    noteForm.appendChild(noteDesc);
    // Due date appends
    dueDate.appendChild(dueDateChoice);
    noteForm.appendChild(dueDate);
    // Priority appends
    priority.appendChild(urgent);
    priority.appendChild(kindaUrgent);
    priority.appendChild(notUrgent);
    noteForm.appendChild(priority);
    // Form appends
    noteForm.appendChild(submitForm);
    noteDiv.appendChild(noteForm);
    parentElement.appendChild(noteDiv);
  
    submitForm.addEventListener('click', () => {
      createNote(notesIndex, notesArray, noteNameText.value, noteDescText.value, dueDateChoice.valueAsDate, priority.value);
      noteHolder.innerText = "";
      displayNote(parentElement);
      noteDiv.hidden = true;
    });
  };

  // Loops throught the array holding notes to display them on the screen
  const displayNote = (parentElement) => {
    noteHolder.classList.add('noteDiv');

    for(let i = 0; i < notesArray.length; i++){
      const cardDiv = document.createElement('div');
      cardDiv.classList.add('cardDiv');
      const noteTitle = document.createElement('p');
      noteTitle.innerText = notesArray[i].name;
      const noteDescription = document.createElement('p');
      noteDescription.innerText = notesArray[i].desc;
      const noteDueDate = document.createElement('p');
      noteDueDate.innerText = notesArray[i].dueDate;
      const notePrio = document.createElement('p');
      notePrio.innerText = notesArray[i].priority;

      cardDiv.appendChild(noteTitle);
      cardDiv.appendChild(noteDescription);
      cardDiv.appendChild(noteDueDate);
      cardDiv.appendChild(notePrio);
      noteHolder.appendChild(cardDiv);
    }
    parentElement.appendChild(noteHolder);
  };

  return {details, addNote, name};
};


export default project;