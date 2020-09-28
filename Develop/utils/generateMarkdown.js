// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
![license badge](https://shields.io/category/license-${data.license})

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
Licensed by ${data.license}

## Questions
${data.questions}
* GitHub: [${data.username}](https://github.com/${data.username})
* Email: ${data.email}
`;
}

module.exports = generateMarkdown;
