# Cymptom QA Automation Task


In this task you will need to write a simple frontend automation tests, it includes the built in angular testing framework which is based on Jasmine + Karma, and e2e tests based on protractor.

## Component tests

You will be presented with a simple 2 angular components:

- CounterComponent - a simple counter which counts the number of clicks were made using the increase\decrease buttons or arrow keys. **The counter component minimum value should be 0 to infinite**.
- LoggerComponent - which logs each click with it's timestamp, so on each value change, a new log will be created with the **exact time** the value was changed.

**Make sure these requirements are being met, if you find any bugs, make sure to create automation tests for them! We DO NOT Expect all of the tests to pass.**

Use the built-in angular testing framework to write the components tests.

You will have a small example to start with at the CounterComponent spec file:
```
/src/app/components/counter/counter.component.spec.ts
```

Here is a link for some resources on getting started with angular component testing:

[https://angular.io/guide/testing#component-test-basics](https://angular.io/guide/testing#component-test-basics)

## E2E (end-to-end) Tests

end-to-end tests are comes built-in on Angular and are based on protractor. Write full e2e tests for the web UI.

An e2e simple guide:
[https://coryrylan.com/blog/introduction-to-e2e-testing-with-the-angular-cli-and-protractor](https://coryrylan.com/blog/introduction-to-e2e-testing-with-the-angular-cli-and-protractor)

## Prerequisites

- NodeJS version 12 or above.

## Before you begin
### Installation

Run the following commands to setup your environment:

```bash
# Install angular globally
npm install -g @angular/cli

# Clone the automation task
git clone git@bitbucket.org:cymptom/qa-automation-task.git

# Go into the project directory
cd qa-automation-task

# Install missing dependencies
npm install

# Run the project
ng serve
```

Now navigate on your browser to:
```bash
http://localhost:4200
```

If everything goes as planned, you will be presented with a fully working angular project.

### Running the tests


To run component tests, use:

```bash
ng test
```

To run e2e tests, use:
```bash
ng e2e
```
