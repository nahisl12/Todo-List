const note = (name, desc, dueDate, priority) => {
  const details = () => {
    console.log(name, desc, dueDate, priority);
  };
    
  return {name, desc, dueDate, priority};
};

function createNote(indexArr, noteArr, name, desc, dueDate, priority) {
  let newNote = note(name, desc, dueDate, priority);
  indexArr.push(noteArr.push(newNote)-1);
}

export {note, createNote};