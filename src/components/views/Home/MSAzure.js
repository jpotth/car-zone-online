import React, { Component } from 'react';

export default class MSAzure extends Component {
	render() {
		return (
			<section style={{paddingBottom: '4em'}}>
				<div className="shell">
					<div className="range range-xs-center offset-top-30">
						<div className="cell-xs-10 cell-md-8">
							<h3>Microsoft Azure Consulting</h3>
							<p style={{color: 'black'}}>Microsoft Azure is a leading enterprise grade cloud computing platform that allows businesses to save money with Infrastructure as a Services and Platform as a Service. With our consulting services, we help companies to take advantage of Microsoft Azure services and set your infrastructure at best utilization with lower TCO as compared to on-premise deployments.</p>
						</div>
					</div>
					<div className="range range-xs-center text-left" style={{paddingBottom: '2em'}}>
						<div className="cell-sm-6 cell-xs-10 cell-md-4">
							<div className="unit unit-horizontal">
								<div className="unit-left"><i className="fa fa-wrench fa-4x"></i></div>
								<div className="unit-body">
									<div>
										<h5>Cloud You Can Trust</h5>
									</div>
									<div className="offset-top-10">
										<p className="small">Security and privacy are built right into the Azure platform, beginning with the Security Development Lifecycle (SDL) that addresses security at every development phase from initial planning to launch, and Azure is continually updated to make it even more secure.</p>
									</div>
								</div>
							</div>
						</div>
						<div className="cell-sm-6 cell-xs-10 cell-md-4 offset-top-75 offset-sm-top-0">
							<div className="unit unit-horizontal">
								<div className="unit-left"><i className="fa fa-usd fa-4x"></i></div>
								<div className="unit-body">
									<div>
										<h5>Lower Operational Costs</h5>
									</div>
									<div className="offset-top-10">
										<p className="small">With cloud services, there are no upfront purchases of equipment. You will be able to access your data from any device or location giving you more control, security and flexibility.</p>
									</div>
								</div>
							</div>
						</div>
						<div className="cell-sm-6 cell-xs-10 cell-md-4 offset-top-75 offset-md-top-0">
							<div className="unit unit-horizontal">
								<div className="unit-left"><i className="fa fa-database fa-4x"></i></div>
								<div className="unit-body">
									<div>
										<h5>Simplified Infrastructure</h5>
									</div>
									<div className="offset-top-10">
										<p className="small">We will ensure all data and applications stored on servers, clients, and within the cloud can be backed up and store proactively with the option to geo-replicate your data across multiple secure Microsoft datacenters.</p>
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
