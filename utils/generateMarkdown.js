// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadg(license) {
  if (license !== 'None'){
    return `![GitHub license](https://img.shieldio/badge/license-${license.replace(' ', ' ')}-blue.svg)`;

  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License (#license)]n`;

  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSec(license) {
  if(license !== 'None'){
  return `## License 
  This project is licensed under the ${license} license.`;
  }
    return '';
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadg(data.license)}
## Description
${data.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)
${renderLicenseLink(data.license)}

* [Contributing](#contribution)

* [Tests](#tests)

* [Questions](#questions)

## Installation
To install necessary dependencies, run the following command:
\`\`\`
${data.installation}
\`\`\`

## Usage
${data.usage}

${renderLicenseSec(data.license)}

## Contributing

${data.contribution}

## Tests

To run tests, run the following command:

\`\`\`
${data.test}
\`\`\`

## Questions

Any questions about the repo, create an issue or contact me at ${data.email}.
 View more of my work in GitHub at [${data.github}](https://github.com/${data.github}/).
`;
}

module.exports = generateMarkdown;
