import React from 'react'
import { useState } from 'react';

export const Counter = (props) => {	
	const [value, setValue] = useState(props.value);	

	return (
		<div>
			<div>{props.sum}</div>
			<div>
				<span>
					<button onClick={props.toAdd}>{'+' + value}</button>
				</span>
				<span>
					<button onClick={props.toSubtract}>{'-' + value}</button>
				</span>
			</div>
		</div>
	)
}
