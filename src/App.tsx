import React from 'react';

const App = () => {
	return (
		<div className="container">
			<div className="app" id="drum-machine">
				<div id="display">
					<div className="drum-pad" id="Q">
						Q
						<audio
							src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
							className="clip"
							id="Q"
						></audio>
					</div>
					<div className="drum-pad" id="W">
						W
						<audio
							src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
							className="clip"
							id="W"
						></audio>
					</div>
					<div className="drum-pad" id="E">
						E
						<audio
							src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
							className="clip"
							id="E"
						></audio>
					</div>
					<div className="drum-pad" id="A">
						A
						<audio
							src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
							className="clip"
							id="A"
						></audio>
					</div>
					<div className="drum-pad" id="S">
						S
						<audio
							src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
							className="clip"
							id="S"
						></audio>
					</div>
					<div className="drum-pad" id="D">
						D
						<audio
							src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
							className="clip"
							id="D"
						></audio>
					</div>
					<div className="drum-pad" id="Z">
						Z
						<audio
							src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
							className="clip"
							id="Z"
						></audio>
					</div>
					<div className="drum-pad" id="X">
						X
						<audio
							src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
							className="clip"
							id="X"
						></audio>
					</div>
					<div className="drum-pad" id="C">
						C
						<audio
							src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
							className="clip"
							id="C"
						></audio>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
