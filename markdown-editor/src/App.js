import React, { useState } from 'react';
import marked from 'marked';
import ReactMarkdown from 'react-markdown';
import './App.scss';

function App() {
	const [markdown, setMarkdown] = useState(' # sup');

	function handleChange(e) {
		setMarkdown(e.target.value);
	}

	return (
		<div className="app">
			<textarea value={markdown} onChange={handleChange} />
			<ReactMarkdown className="preview" source={markdown} />
		</div>
	);
}

export default App;
