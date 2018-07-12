import React from 'react';
import ReactDOM from 'react-dom';

function Person(props){
	return(
		<div>
			<h1>Name: {props.name} {props.surname}</h1>
			<p>Age: {props.age}</p>
			<p>Occupation: {props.occupation}</p>
		</div>
		);
}

let people = (
	<div>
		<Person name="Blazej" 
						surname="Wielk" 
						age="26" 
						occupation="UX designer"/>
		<Person name="Joni" 
						surname="Mitchell" 
						age="76"
						occupation="Composer"/>
	</div>
)

ReactDOM.render(people, document.getElementById('app'));