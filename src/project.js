const project = (name, description) => {
  const details = () => {
    console.log(name, description);
  };
  return {details};
};

export default project;