import React, { Component } from 'react';

export default class FooterBanner extends Component {
	render() {
		return (
			<section className="context-dark footer-banner-parallax">
				<div className="shell section-90 section-md-260">
					<div className="range range-xs-center range-md-left">
						<div className="cell-sm-8 cell-md-6 text-md-left">
							<h3 style={{textShadow: '0px 0px 30px black'}}>Level Up Your<br className="veil reveal-md-inline-block" />Business Today</h3>
							<div className="offset-top-20">
								<p style={{textShadow: '0px 0px 30px black'}}>With solutions designed by Tronix Data, you can <br className="veil reveal-md-inline-block" /> easily take your business to the next level in no time.</p>
							</div>
							<div className="offset-top-30 offset-md-top-60"><a href="javascript:;" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#contactModal">GET STARTED</a></div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
