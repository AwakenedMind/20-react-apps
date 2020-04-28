import React, { useState } from 'react';

function Tab({ children }) {
	const [highlightStyle, setHighlightStyle] = useState({ left: 0 });

	function moveHighlight(e) {
		console.log(e.nativeEvent.layerX);

		setHighlightStyle({
			left: e.nativeEvent.layerX - 150,
		});
	}

	function hideHighlight(e) {
		setHighlightStyle({
			opacity: 0,
			left: e.nativeEvent.layerX - 150,
		});
	}

	return (
		<div className="tab" onMouseOut={hideHighlight} onMouseMove={moveHighlight}>
			<div className="highlight" style={highlightStyle} />
			{children}
		</div>
	);
}

export default Tab;
