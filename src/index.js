import React from 'react';
import ReactDOM from 'react-dom';

function Person(props){
	return(
		<div>
			<h1>Name: {props.name} {props.surname}</h1>
			<p>Status: {props.status}</p>
			<p>Occupation: {props.occupation}</p>
		</div>
		);
};

let models = [
	{
		name: "Anja",
		surname: "Rubik",
		occupation: "model",
		status: "icon"
	},

	{
		name: "Raquel",
		surname: "Zimmermann",
		occupation: "model",
		status: "new icon"
	},

	{
		name: "Gigi",
		surname: "Hadid",
		occupation: "model",
		status: "instagirl"
	}
]



console.log(models[0]);

ReactDOM.render(<Person name="Ann"/>, document.getElementById('app'));