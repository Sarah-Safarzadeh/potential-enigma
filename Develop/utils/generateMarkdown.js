// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
![license badge](#)

## Description
${data.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## License
![license badge](#)${data.license}
<br>
Licensed by ${data.license}

## Questions
${data.questions}
* GitHub: [${data.username}](https://github.com/${data.username})
* Email: ${data.email}

`;
}

module.exports = generateMarkdown;
