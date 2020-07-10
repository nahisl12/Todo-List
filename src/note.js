const note = (name, desc, dueDate, urgency) => {
    const details = () => {
      console.log(name, desc, dueDate, urgency);
    };
    
    return {details};
  };
  
export default note;