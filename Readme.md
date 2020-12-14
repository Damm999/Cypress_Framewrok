## Cypress Framework
Automation framework using Cypress


## Setup Guide:
* Setting up the environment:
    *   run `npm i` on root folder.
    *   navigate to packages folder and run `npm i` inside all the folders.

## Environment One app.yml:
*   Widows: AppData/Local/Cypresss/Cache/6.1.0/Cypress/resources/app/packages/server/config/app.yml
*  MAC:  /Users/agoldis/Library/Caches/Cypress/3.4.1/Cypress.app/Contents/Resources/app/server/config/app.yml
*   Setting up on `https://sorry-cypress-demo.herokuapp.com/` (dashboard url)
    *   production:
        api_url: https://sorry-cypress-demo.herokuapp.com/
    *   https://sorry-cypress.dev/quickstart#run-the-services    
### To run the code:
*   navigate to packages/director
    *   run `npm run build`
    *   run `npm run start`
* Run the test cases and check the dashboard either through the logs (server location is present here).
## Environment TWO app.yml:
* Widows: AppData/Local/Cypresss/Cache/6.1.0/Cypress/resources/app/packages/
server/config/app.yml
*  MAC:  /Users/agoldis/Library/Caches/Cypress/3.4.1/Cypress.app/Contents/Resources/app/server/config/app.yml
* Setting up using docker to run on local machine: 8080 port:
    * clone the repo `https://github.com/sorry-cypress/sorry-cypress.git`
    * run `docker-compose -f docker-compose.minio.yml`
    * https://sorry-cypress.dev/quickstart#run-the-services
        *   production:
            api_url: "http://localhost:1234/ "
* Run the test cases and check the dashboard at localhost:8080

### Other setups:
*   On Windows:
    *  Edit host -> `127.0.0.1 storage`
* On MAC & linux:
    * etc\hosts edit and add-> `127.0.0.1 storage`
