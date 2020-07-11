import {note, createNote} from './note';

const project = (name) => {
  let notesArray = [];
  let notesIndex = [];

  let triggered = false;
  const addNoteBtn = document.createElement('button');
  const noteHolder = document.createElement('div');
  let deleteNote;

  const details = () => {
    console.log(name);
  };

  const tempNotes = () => {
    let project1 = createNote(notesIndex, notesArray, "test1", "testing", "2/31", "urgent");
  };

  const addNote = (parentElement) => {
    addNoteBtn.innerText = "New Note";

    parentElement.appendChild(addNoteBtn);

    addNoteBtn.addEventListener('click', () => {
      noteHolder.innerText = "";
      if(!triggered) {
        createNotePanel(parentElement);
        triggered = true;
     }
    });
  };

  const createNotePanel = (parentElement) => {
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
      // noteHolder.innerText = "";
      displayNote(parentElement);
      noteDiv.hidden = true;
      triggered = false;
    });
  };

  // Loops throught the array holding notes to display them on the screen
  const displayNote = (parentElement) => {
    noteHolder.classList.add('noteDiv');
    noteHolder.innerHTML = "";

    for(let i = 0; i < notesArray.length; i++){
      let index = notesIndex[i];
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

      // Delete btn
      deleteNote = document.createElement('button');
      // deleteNote.type = 'input';
      deleteNote.innerText = "Delete";
      deleteNote.addEventListener('click', () => {
        console.log("firing");
        delNote();
        noteHolder.innerHTML = "";
      });

      cardDiv.appendChild(noteTitle);
      cardDiv.appendChild(noteDescription);
      cardDiv.appendChild(noteDueDate);
      cardDiv.appendChild(notePrio);
      cardDiv.appendChild(deleteNote);
      noteHolder.appendChild(cardDiv);
    }
    parentElement.appendChild(noteHolder);
  };

  const delNote = () => {
    for(let i = 0; i < notesArray.length; i++) {
      let index = notesIndex[i];
      notesArray.splice(index, 1);
    }
  };

  tempNotes();

  return {details, addNote, addNoteBtn, name, displayNote};
};


export default project;