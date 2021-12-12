import React from 'react'
import { useState } from 'react';

export const Counter = (props) => {	
	const [value, setValue] = useState(props.value);
	const [sum, setSum] = useState(0);

	function toAdd(initialSum, newValue){
		setSum(initialSum + newValue);
	}

	function toSubtract(initialSum, newValue){
		setSum(initialSum - newValue);
	}

	return (
		<div>
			<div>{sum}</div>
			<div>
					<span>
							<button onClick={() => toAdd(sum, value)}>{'+' + value}</button>
					</span>
					<span>
							<button onClick={() => toSubtract(sum, value)}>{'-' + value}</button>
					</span>
			</div>
		</div>
	)
}
