import project from './project';

const container = document.querySelector('#container');

function render() {
  console.log("hello");
  let project1 = project("testproj", "This is a temporary description to see that this worked that's all");
  project1.details();
}

render();