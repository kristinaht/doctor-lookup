# _PDX Doctors_

#### _Independent project 6, Feb 2020_

#### By _**Kristina Hengster Tintor**_

## Description
Website where users may enter a medical issue (ie: “sore throat”, "rash", etc.) into a form, submit it, and receive a list of doctors in Portland, Oregon who can treat their medical issue.

## Project Specifications

User enters a medical issue or doctor's name or partial name to receive a list of doctors that meet the search criteria within Portland
* Input: Headache
* Output: a list of doctors who treat headache is shown. Included in the list are the name, address, website, phone number and whether they accept new patients.

User enters a medical issue or doctor's name or partial name and there are no results that meet the search criteria
* Input: Kamenko
* Output: "OOps! No doctors for you."

User submits the information but the API call is not successful
* Input: headache
* Output: an error message is alerted prompting the user to try again.
## Setup/Installation Requirements

_In Terminal:_

* Navigate to where you want this application to be saved, i.e.:
```cd desktop```
* Clone the file from GitHub with HTTPS
```git clone https://github.com/kristinaht/dino.git```
* Open file in your preferred text editor
* On Mac: ```open -a {your text editor} doctor-lookup```
* On Windows: ```doctor-lookup```

_Download Manually:_

* Navigate to https://github.com/kristinaht/dino.
* Click green "Clone or Download" button.
* Click "Download ZIP".
* Click downloaded file to unzip.
* Open folder called "dino".
* Right click "index.html" and select your preferred browser or text editor.

_Note For Editors:_ 
* Once cloned/downloaded, to run and make changes, in the terminal simply run **$ npm install** to download necessary dependencies
* Run **$ npm run build** to create your own dist folder with a bundle.js file
* Obtain API key from (API website link)
* Create .env file in the root directory of (project name)
* Add API key to .env file (EX: API_KEY: your API key here)
* Add .env file to .gitignore file (*important*)
* The API key will now be refrenced within the (project name)-interface.js file
* Lastly, run **$ npm run start** to run application

## Known Bugs

_No known bugs at this time._

## Support and contact details

_Have a bug or an issue with this application? [Open a new issue](https://github.com/kristinaht/doctor-lookup) here on GitHub._

## Technologies Used

* HTML
* CSS
* Bootstrap
* Javascript
* jQuery
* Webpack
* Node.js
* BetterDoctor API

### License

[MIT](https://choosealicense.com/licenses/mit/)

Copyright (c) 2020 **Kristina Hengster Tintor_**