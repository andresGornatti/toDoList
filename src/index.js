// ROBOFRIENDS

// import React from 'react';
// import ReactDOM from 'react-dom';
// import {Provider} from "react-redux";
// import {createStore, applyMiddleware, combineReducers} from "redux";
// import {createLogger} from "redux-logger";
// import thunkMiddleware from "redux-thunk";
// import {buscarRobots, requestRobots} from "./robofriends/reducers";
// import App from './robofriends/containers/App';
// import "tachyons";
// import './index.css';
// //import Card from "./Card";
// //import CardList from "./CardList";
// import * as serviceWorker from './serviceWorker';

// const logger = createLogger();
// const rootReducer = combineReducers({buscarRobots, requestRobots});
// const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

// ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// 	// If you want your app to work offline and load faster, you can change
// 	// unregister() to register() below. Note this comes with some pitfalls.
// 	// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

// ---------------------------------------------- //

// TEMPLATE

// import React from 'react';
// import ReactDOM from 'react-dom';
// import "tachyons";
// import './index.css';
// import App from "./maqueta/containers/App";
// import * as serviceWorker from './serviceWorker';


// ReactDOM.render(<App />, document.getElementById('root'));

// 	// If you want your app to work offline and load faster, you can change
// 	// unregister() to register() below. Note this comes with some pitfalls.
// 	// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


// 	// Colores Novacor brand:   #452A9D #64598B   #FF9613 #FFAC44


// ---------------------------------------------- //

// TODO-REDUX
// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import * as serviceWorker from './serviceWorker';
// import App from "./todoredux/containers/App";
// import {applyMiddleware, createStore} from "redux";
// 	//import {createStore} from "redux";
// import {Provider} from "react-redux";
// import {createLogger} from "redux-logger";
// import thunkMiddleware from "redux-thunk";
// import {manageTasksR} from "./todoredux/reducers";

// const logger = createLogger();
// 	 	//const rootReducer = combineReducers({manageTaskR, addTaskR});
// const store = createStore(manageTasksR, applyMiddleware(thunkMiddleware, logger));
// 	//const store = createStore(manageTasksR);

// //ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// serviceWorker.unregister();


// ---------------------------------------------- //

// MAGICBRAIN

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./magicbrain/magicbrain/containers/App";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

// ---------------------------------------------- //

// GITHUB API

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./githubFinder/containers/App";
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// serviceWorker.unregister();
