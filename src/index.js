import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class App extends Component {
	constructor() {
		super();
		this.state = {	name: 'React',};
	}

	showFile = () => {
		if (window.File && window.FileReader && window.FileList && window.Blob) {
			var preview = document.getElementById('show-text');
			var file = document.querySelector('input[type=file]').files[0];
			var reader = new FileReader()
			var textFile = /.*/;

			if (file.type.match(textFile)) {
				reader.onload = function (event) {
					preview.innerHTML = event.target.result;
					console.log("All Text Content : ", event.target.result);
				}
			}
			else {
				preview.innerHTML = "<span class='error'>It doesn't seem to be a text file!</span>";
			}
			reader.readAsText(file);
		} else {
			alert("Your browser is too old to support HTML5 File API");
		}
		console.log("Selected file Details: ", file)
		console.log("Selected file name : ", file.name)
	}
	render() {
		return (
			<>
				<input type="file" onChange={this.showFile} />
				<div id="show-text">Choose text File</div>
			</>
		);
	}
}

render(<App />, document.getElementById('root'));
