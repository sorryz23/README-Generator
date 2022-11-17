// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicense(license) {
  if (license === 'Apache') {
    return '![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)(https://opensource.org/licenses/Apache-2.0)'
  }
  if (license === 'Unlicense') {
    return ''
  }
  if (license === 'MIT') {
    return '![License: MIT] (https://img.shields.io/badge/License-MIT-yellow.svg)]'
  }
}


  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title}
  ## Description
   - ${data.why}
   - ${data.problem}
   - ${data.learn}

  ## Table of Contents
  
  - [License](#license)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Features](#features)
  - [Credits](#contributors & credit)
  - [Tests](#tests)
  - [Questions](#questions)
  - [How to contribute](#how to contribute)

  ## License

  - ${renderLicense(data.license)}

  Refer to [https://choosealicense.com/]

  ## Installation
  To install this application, please follow the steps below:
  - ${data.install}

  ## Usage

  ![alt text](assets/images/screenshot.png)

  ## Features

  - ${data.test}

  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}/).

  ## How to Contribute

  - ${data.contribute}
  The [Contributor Covenant](https://www.contibutor-covenant.org/) is an industry standard, but you can always write your own.
`;
  }

  module.exports = generateMarkdown;
