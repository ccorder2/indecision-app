//////stateful react component
// class User extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<p>{props.name}</p>
// 				<p />
// 			</div>
// 		);
// 	}
// }
//////stateless functional components
// const User = props => {
// 	return (
// 		<div>
// 			<p>{props.name}</p>
// 			<p></p>
// 		</div>
// 	);
// };

// import './utils.js';
// import { square, add } from './utils.js';

// console.log('app js is running!');
// console.log(square(4));
// console.log(add(100, 23));

// import isSenior, { isAdult, canDrink } from './person.js';
// console.log(isAdult(15));
// console.log(canDrink(23));
// console.log(isSenior(65));

import React from 'react';
import ReactDOM from 'react-dom';

const template = <p>THIS IS JSX FROM WEBPACK</p>;
ReactDOM.render(template, document.getElementById('app'));

// class OldSyntax {
// 	constructor() {
// 		this.name = 'Casey';
// 		this.getGreeting = this.getGreeting.bind(this);
// 	}
// 	getGreeting() {
// 		return `Hi. My name is ${this.name}`;
// 	}
// }
// const oldSyntax = new OldSyntax();
// const getGreeting = oldSyntax.getGreeting;
// console.log(getGreeting);

// // ============

// class NewSyntax {
// 	name = 'Ray';
// 	getGreeting = () => {
// 		return `Hi. My name is ${this.name}`;
// 	};
// }
// const newSyntax = new NewSyntax();
// const newGetGreeting = newSyntax.getGreeting;
// console.log(newGetGreeting());
