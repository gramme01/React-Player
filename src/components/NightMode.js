import React from "react";
import StyledNightmode from "./styles/StyledNightmode";

const Nightmode = ({ nightModeCallback, nightMode }) => (
	<StyledNightmode>
		<span>Nightmode: </span>
		<label htmlFor='theme-select' className='switch'>
			<input
				type='checkbox'
				name='theme'
				id='theme-select'
				checked={nightMode}
				onChange={nightModeCallback}
			/>
			<span className='slider round' />
		</label>
	</StyledNightmode>
);

export default Nightmode;
