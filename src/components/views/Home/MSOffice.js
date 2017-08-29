import React, { Component } from 'react';

export default class MSOffice extends Component {
	render() {
		return (
			<section>
				<div className="shell">
					<div className="range range-xs-center offset-top-30">
						<div className="cell-xs-10 cell-md-8">
							<h3>Microsoft O365 Consulting and Migration</h3>
							<p style={{color: 'black'}}>Tronix Data's Office 365 consulting services can help you get the best out of your investment with Office 365. We can help you build a complete picture of your IT infrastructure and on how Office 365 can increase your profitability, productivity and help achieve your business goals. We can help you migrate to Office 365 from any platform with zero to minimum downtime.</p>
						</div>
					</div>
					<div className="range range-xs-center text-left" style={{paddingBottom: '2em'}}>
						<div className="cell-sm-6 cell-xs-10 cell-md-4">
							<div className="unit unit-horizontal">
								<div className="unit-left"><i className="fa fa-black-tie fa-4x"></i></div>
								<div className="unit-body">
									<div>
										<h5>Familiar, But Better</h5>
									</div>
									<div className="offset-top-10">
										<p className="small">Office 365 keeps itself up to date, so you always have the latest features of Word, Excel, PowerPoint, and more.</p>
									</div>
								</div>
							</div>
						</div>
						<div className="cell-sm-6 cell-xs-10 cell-md-4 offset-top-75 offset-sm-top-0">
							<div className="unit unit-horizontal">
								<div className="unit-left"><i className="fa fa-money fa-4x"></i></div>
								<div className="unit-body">
									<div>
										<h5>Better ROI</h5>
									</div>
									<div className="offset-top-10">
										<p className="small">With low upfront costs and the flexibility to add users and services as needed, Office 365 provides the ROI you need to succeed.</p>
									</div>
								</div>
							</div>
						</div>
						<div className="cell-sm-6 cell-xs-10 cell-md-4 offset-top-75 offset-md-top-0">
							<div className="unit unit-horizontal">
								<div className="unit-left"><i className="fa fa-globe fa-4x"></i></div>
								<div className="unit-body">
									<div>
										<h5>Available Everywhere</h5>
									</div>
									<div className="offset-top-10">
										<p className="small">Whether you're working online or off, from your computer, tablet, or phone, Office 365 has you covered.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
