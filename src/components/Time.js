import React from 'react';
import moment from 'moment'

function Time() {
	

    var time = moment().format('hh:mm:ss A');



	return(

	<h2>	{time} </h2>

		)

}

export default Time;