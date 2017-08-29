import React, { Component } from 'react';

export default class OperationsManagement extends Component {
	render() {
		return (
			<section>
				<div className="shell">
					<div className="range range-xs-center offset-top-30">
						<div className="cell-xs-10 cell-md-8">
							<h3>Operations Management Suite</h3>
							<p style={{color: 'black'}}>We provide Operational intelligence solutions based primarily on the Microsoft Platform to help organizations to monitor, measure and manage their IT.</p>
						</div>
					</div>
					<div className="range range-xs-center text-left">
						<div className="cell-sm-6 cell-xs-10 cell-md-4">
							<div className="unit unit-horizontal">
								<div className="unit-left"><i className="fa fa-check fa-4x"></i></div>
								<div className="unit-body">
									<div>
										<h5>Robust Features</h5>
									</div>
									<div className="offset-top-10">
										<p className="small">Microsoft Operations Management Suite (OMS) offers you the leading platform for Operational Intelligence. You can use OMS to search, monitor, analyze and visualize operational data.</p>
									</div>
								</div>
							</div>
						</div>
						<div className="cell-sm-6 cell-xs-10 cell-md-4 offset-top-75 offset-sm-top-0">
							<div className="unit unit-horizontal">
								<div className="unit-left"><i className="fa fa-cog fa-4x"></i></div>
								<div className="unit-body">
									<div>
										<h5>Maximum Efficiency</h5>
									</div>
									<div className="offset-top-10">
										<p className="small">Because of the extra efficiency and performance benefits it offers, OMS gives you lower operational costs. In other words, it enables you to do more with less.</p>
									</div>
								</div>
							</div>
						</div>
						<div className="cell-sm-6 cell-xs-10 cell-md-4 offset-top-75 offset-md-top-0">
							<div className="unit unit-horizontal">
								<div className="unit-left"><i className="fa fa-stumbleupon fa-4x"></i></div>
								<div className="unit-body">
									<div>
										<h5>Unrestrained Flexibility</h5>
									</div>
									<div className="offset-top-10">
										<p className="small">Whether you need it as a stand-alone solution or to complement an existing System Center environment, we have the experience and the expertise to tailor it according to your needs.</p>
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
