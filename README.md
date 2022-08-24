[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  
# Project Title - Social Network APIs
  
  
## Project Description
This project uses MongoDB as a datastore, and mongoose as an ODM to demonstrate APIs.  
GitHub Repository -  https://github.com/roo116/social-network-api
  
## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
## Installation

This application requires [Insomnia](https://insomnia.rest/download), and [MongoDB](https://www.mongodb.com/) (community version works).  Google those packagesnif you don't know 
1. Clone or fork https://github.com/roo116/social-network-api
2. run `npm i` to install dependencies

 
## Usage
1. Type `npm start` from the root directory of the application folder.
2. You can test these routes in Insomnia.
3. Routes

http://localhost:3001/ may be used to run these locally on a user's system.

User Routes  
<img src='./img/user-api-routes.png' style='width:400px'/>  
Thought Routes  
<img src='./img/thought-api-routes.png' style='width:400px'/>   





  
## License
This is licensed under the MIT license. See the badge for the link to the license information.
  
## Contributing
contact using the contact methods below.

  
## Tests

These user stories were tested, and can be used to manually confirm the routes are working properly. 

WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts 
THEN the data for each of these routes is displayed in a formatted JSON 
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

  
## Questions
If you have questions, reach out via email or GitHub  
Gitub:  [GitHub Repository](https//github.com/roo116)  
Email:  hillkarl03@gmail.com  
  