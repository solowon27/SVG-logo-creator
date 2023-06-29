# SVG-logo-creator
an SVG format logo creator application 

## Description
This application is a logo creator that allows the user to create a logo in SVG format. The user can choose the background color, the logo (shape) type, and the logo text with color.\

```here is the video demo link for the application:``` https://drive.google.com/file/d/1Y5vAPnsS1rpIrqBBBDOgCX8_IkFivBNC/view

```In this application, you can find the Examples folder that contains the SVG files created by this application. ```

```here is the tree of the application file structure:```

```
|__ dist/               // index.dev.js generated here
├── examples/           // you can find svg files created by the app
├── lib/                // here is the folder for classes or functions
    ├── dist            // the file which contain shapes.dev.js and shapes.test.dev.js
    ├── shapes.js       // the main file for rendering shapes
    ├── shapes.test.js  // Jest tests for shapes
    |__ logo.svg            // the logo created by the application
|
├── .gitignore          // files and folders to be ignored by git
├── index.js            // main file that runs the application using imports from lib/
|__ LICENSE             // MIT license
├── package.json        // npm package file
├── package-lock.json   // npm package file
└── README.md           // the read me file          
```

## installation
you may need to install dependencies using the following command:

```'npm install'```
```npm install --save-dev jest```
```npm install inquirer```
```npm install fs```
## Usage
To use this application, run the following command in the terminal:

```'node index.js'```   

## License
This application is licensed under the MIT license.

## Contributing
Contributions are welcome. you can fork the repo and create a pull request with your changes.

## Tests
To run tests, use the following command: run the following command in the terminal:

```npm test``` or ```npx jest```

## Questions
If you have any questions about the repo, open an issue or contact me directly at solowon27@hotmail.com \
You can find more of my work at [https://github.com/solowon27](Solomon Tegegne).