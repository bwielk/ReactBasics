import React from 'react';
import ReactDOM from 'react-dom';

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
];

function Person(props){
	return(
		<div>
			<h1>Name: {props.name} {props.surname}</h1>
			<p>Status: {props.status}</p>
			<p>Occupation: {props.occupation}</p>
		</div>
		);
};

function Button(props){
	return(
		<div>
			<button value={props.name} onclick = {handleButton(props.number)}></button>
		</div>
	)
}

function handleButton(number){
	ReactDOM.render(<Person name={models[number].name}
						surname={models[number].surname}
						occupation={models[number].occupation}
						status={models[number].status}
						/>, document.getElementById('app'));
}

let buttons = (
		<div>
			<Button name = "Anja" number = {0}/>
			<Button name = "Raquel" number = {1}/>
			<Button name = "Gigi" numebr = {2}/>
		</div>
	)

ReactDOM.render(buttons, document.getElementById('app'));