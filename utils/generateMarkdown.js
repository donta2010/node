function generateMarkdown(data) {
  console.log("here",data);
  return `
  
  ${data.title}
  ${data.avatar}
  ${data.email}
 Username : ${data.username}
 Table of Contents
 ${data.contents}
 Installations
 ${data.installations}
 Usage:${data.usage}
 License:${data.license}
 Contributers:${data.contributers}
 Test:${data.test}
 Questions:${data.questions}

`;
}

module.exports = generateMarkdown;










// let fs =require("fs");
// const makeResponse = {

// function generateMarkdown() {}



// module.exports = makeResponse;