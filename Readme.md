## Cypress Framework
Automation framework using Cypress


## Setup Guide:
* Setting up the environment:
    *   run `npm i` on root folder.
    *   navigate to packages folder and run `npm i` inside all the folders.

## Environment One:
*   Widows: AppData/Local/Cypresss/Cache/6.1.0/Cypress/resources/app/packages/server/config/app.yml
*  MAC:  /Users/agoldis/Library/Caches/Cypress/3.4.1/Cypress.app/Contents/Resources/app/package.json
*   Setting up on `https://sorry-cypress-demo.herokuapp.com/`
    *   production:
        api_url: "https://sorry-cypress-demo.herokuapp.com/"
    *   https://sorry-cypress.dev/quickstart#run-the-services    
### To run the code:
*   navigate to packages/director
    *   run `npm run build`
    *   run `npm run start`
* Run the test cases and check the dashboard either through the logs (server location is present here).
## Environment TWO:
* Widows: AppData/Local/Cypresss/Cache/6.1.0/Cypress/resources/app/packages/
server/config/app.yml
*  MAC:  /Users/agoldis/Library/Caches/Cypress/3.4.1/Cypress.app/Contents/Resources/app/package.json
* Setting up using docker to run on local machine: 8080 port:
    * https://sorry-cypress.dev/quickstart#run-the-services
        *   production:
            api_url: "http://localhost:1234/"
    *   Setup the environment for local host
* Run the test cases and check the dashboard at localhost:8080

### Other setups:
*   On Windows
    *   Edit host `127.0.0.1 storage`
