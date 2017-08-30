import axios from 'axios';

export function sendMail(data) {
	$.ajax({ // eslint-disable-line
		url: 'http://facebook.com/',
		type: 'POST',
		dataType: 'json',
		data: {
			to: 'info@tronixdata.com',
			from: `${data.name} ${data.email}`,
			subject: `${data.name} - Message from TronixData.com Contact Form`,
			text: `Company name: ${data.company} \n\n Message: ${data.message} \n\n Phone number: ${data.number}`
		}
	});
}
