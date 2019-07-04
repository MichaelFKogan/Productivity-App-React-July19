import React from 'react';
import moment from 'moment'


function Component() {
	
var name = "{mike}";

	return(

	<div>
		
		<h1>This is Component.js, with var = named {name} </h1>
		
		<h3>---</h3>
		
			<h1>Some date: {moment('12-25-1995', 'MM-DD-YYYY').format('MM/DD/YYYY')}</h1>
		
		<h3>---</h3>
		
	</div>

		)

}

export default Component;