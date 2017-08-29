import React, { Component } from 'react';

export default class DataCenterModernization extends Component {
	render() {
		return (
			<section>
				<div className="shell">
					<div className="range range-xs-center offset-top-30">
						<div className="cell-xs-10 cell-md-8">
							<h3>Data Center Modernization</h3>
							<p style={{color: 'black'}}>We can help you reduce your expenditures on what is typically the most costly component of your IT budget. We do it by rationalizing, consolidating, and pruning servers, applications, and data centers to eliminate waste, redundancy, and under-utilization.</p>
						</div>
					</div>
					<div className="range range-xs-center text-left" style={{paddingBottom: '2em'}}>
						<div className="cell-sm-6 cell-xs-10 cell-md-4">
							<div className="unit unit-horizontal">
								<div className="unit-left"><i className="fa fa-cloud fa-4x"></i></div>
								<div className="unit-body">
									<div>
										<h5>Cloud Migrations</h5>
									</div>
									<div className="offset-top-10">
										<p className="small">Migration to the cloud can be a daunting experience and the right expertise makes all the difference. We provide data migration, machine replication, and P2V migration.</p>
									</div>
								</div>
							</div>
						</div>
						<div className="cell-sm-6 cell-xs-10 cell-md-4 offset-top-75 offset-sm-top-0">
							<div className="unit unit-horizontal">
								<div className="unit-left"><i className="fa fa-bolt fa-4x"></i></div>
								<div className="unit-body">
									<div>
										<h5>Cloud Disaster Recovery</h5>
									</div>
									<div className="offset-top-10">
										<p className="small">We can set up storage DR to the cloud, set up the cloud as a manager or witness between 2 physical data centers or set up the cloud as the DR manager and destination or a combination of the above.</p>
									</div>
								</div>
							</div>
						</div>
						<div className="cell-sm-6 cell-xs-10 cell-md-4 offset-top-75 offset-md-top-0">
							<div className="unit unit-horizontal">
								<div className="unit-left"><i className="fa fa-server fa-4x"></i></div>
								<div className="unit-body">
									<div>
										<h5>Cloud Integrated Storage</h5>
									</div>
									<div className="offset-top-10">
										<p className="small">Cloud Integrated Storage (CIS) may not fit for every company. We have the tools to identify the right use cases for CIS and have successfully deployed CIS appliances to leverage Microsoft Azure, Amazon, and Google cloud migrations.</p>
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
