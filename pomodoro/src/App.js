import React, { useState, useRef } from 'react';
import './App.scss';

const padTime = (time) => {
	return time.toString().padStart(2, '0');
};

function App() {
	const [title, setTitle] = useState('Let the countdown begin!!!');
	const [timeLeft, setTimeLeft] = useState(15);
	const [isRunning, setIsRunning] = useState(false);
	const intervalRef = useRef(null);

	function startTimer() {
		if (intervalRef.current !== null) return;

		setTitle(`You're doing great!`);
		setIsRunning(true);

		intervalRef.current = setInterval(() => {
			setTimeLeft((timeLeft) => {
				// decrease the timer by one second
				if (timeLeft >= 1) return timeLeft - 1;

				// if the timer hits 0 reset
				resetTimer();
				return 0;
			});
		}, 1000);
	}

	function stopTimer() {
		// Disable starting the intervalRef if the timer hasnt even started
		if (intervalRef.current === null) return;

		// Reset the intervalRef
		clearInterval(intervalRef.current);
		intervalRef.current = null;

		setTitle('Keep it up!');
		setIsRunning(false);
	}

	function resetTimer() {
		// reset the intervalRef to null
		clearInterval(intervalRef.current);
		intervalRef.current = null;

		// display title
		setTitle('Ready to go another round?');

		// reset timer state
		setTimeLeft(25 * 60);
		setIsRunning(false);
	}

	const minutes = padTime(Math.floor(timeLeft / 60));
	const seconds = padTime(timeLeft - minutes * 60);

	return (
		<div className="App">
			<h2 className={'title'}>{title}</h2>

			<div className={'clock'}>
				<span>{minutes}</span>
				<span>:</span>
				<span>{seconds}</span>
			</div>

			<div className="buttons-container">
				{!isRunning && <button onClick={startTimer}>Start</button>}
				{isRunning && <button onClick={stopTimer}>Stop</button>}
				<button onClick={resetTimer}>Reset</button>
			</div>
		</div>
	);
}

export default App;
