import React from 'react';
import moment from 'moment'

function Date() {
	

	var date = moment().format('MMM.Do');



	return(

	<h2>	{date} </h2>

		)

}

export default Date;