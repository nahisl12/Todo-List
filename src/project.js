import note from './note';

const project = (name) => {
  const details = () => {
    console.log(name);
  };

  return {details, name};
};

export default project;