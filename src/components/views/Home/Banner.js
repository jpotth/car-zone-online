import React, { Component } from 'react';

export default class Banner extends Component {
	render() {
		return (
			<div>
				<div className="banner-parallax">
					<div className="shell">
						<div className="range">
							<div className="range range-xs-center range-md-left range-xs-middle section-cover section-90 text-md-left">
								<div className="cell-xs-10 cell-md-12" style={{paddingBottom: '15em'}}>
									<h3 data-animation="fadeInUp" className="animateItem" style={{pointerEvents: 'none', color: 'white'}}>The quickest, most reliable, and most afforable way to buy a car.</h3>
									<p data-animation="fadeInUp" data-delay="0.5" data-duration="1" className="animateItem" style={{pointerEvents: 'none', color: 'white'}}>Begin your journey today.</p>
									<div className="offset-top-30 offset-md-top-60"><a href="javascript:;" data-animation="fadeInUp" data-delay="0.2" data-duration="1" className="btn btn-primary btn-sm animateItem" data-toggle="modal" data-target="#contactModal">GET STARTED</a></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
