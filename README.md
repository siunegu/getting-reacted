Up and running with es6 react
=============================
@(an intro to react)[es6|react]

# Basic Setup
- Initialize the project
	`npm init`
- Install react and react-dom to package.json
	`npm install react react-dom --save`
- Install some babel preloaders
	`npm install babel-loader babel-core babel-preset-es2015 babel-preset-react`
- Make project files, 
	- _index.html_ as the main html file
	- _App.js_ first react component
	- _main.js_ as the entry into the application
	- _webpack.config.js_ as the webpack config
	- `touch index.html App.js main.js webpack.config.js`
- If you havent already install babel and webpack as well as webpack dev server
	- `npm install babel webpack webpack-dev-server -g`