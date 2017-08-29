import React, { Component } from 'react';

export default class NotFound extends Component {
	render() {
		return (
			<div className="page text-center">
				<main style={{background: '#191919 url(/styles/images/backgrounds/background-16-1920x955.jpg) 0/cover no-repeat'}} className="page-content">
					<div className="one-page">
						<div className="one-page-header">
							<div className="rd-navbar-brand"><a href="index.html"><img style={{marginTop: '3em', marginLeft: '-15px'}} src='/styles/images/tronix-data/logo-1.png' /></a></div>
						</div>
						<section className="context-dark">
							<div className="shell">
								<div className="range">
									<div className="section-110 section-cover range range-xs-center range-xs-middle">
										<div className="cell-lg-6">
											<h3>Sorry, but page was not found</h3>
											<div className="text-extra-big text-light" style={{marginTop: '0.3em'}}>404</div>
											<p className="offset-top-50">You may have mistyped the address or the page may have moved.</p>
											<div className="group offset-top-30"><a href="/" className="btn btn-icon btn-icon-left btn-primary">Return to Home</a></div>
										</div>
									</div>
								</div>
							</div>
						</section>
						<div className="one-page-footer">
							<p style={{color: 'rgba(255,255,255, 0.3)'}} className="small">Tronix Data &copy; <span id="copyright-year"></span> . <a href="privacy.html">Privacy Policy</a></p>
						</div>
					</div>
				</main>
			</div>
		);
	}
}
