import React, { Component } from 'react';

export default class Header extends Component {
	render() {
		return (
			<header className="page-head slider-menu-position">
				<div className="rd-navbar-wrap">
					<nav data-sm-layout="rd-navbar-static" data-sm-device-layout="rd-navbar-static" data-sm-auto-height="true" data-sm-stick-up="true" className="rd-navbar rd-navbar-default">
						<div className="rd-navbar-inner">
							<div className="rd-navbar-panel">
								<div data-rd-navbar-toggle=".rd-navbar, .rd-navbar-list" className="rd-navbar-toggle"><span></span></div>
								<div className="rd-navbar-brand" style={{marginTop: '0.3em'}}><a href="#" className="rd-navbar-brand-static"><img height="32" src="/styles/images/car-zone-logos/carZoneLogo1.png" alt="" /></a><a href="#" className="rd-navbar-brand-fixed"><img height="32" src="/styles/images/car-zone-logos/carZoneLogo1.png" alt="" /></a></div>
								<div className="rd-navbar-list">
									<ul className="list-inline">
										<li><a href="https://twitter.com/" target="_blank" className="icon fa-twitter"></a></li>
										<li><a href="https://www.facebook.com/USACarZone/" target="_blank" className="icon fa-facebook"></a></li>
									</ul>
								</div>
								<div className="rd-navbar-button">
									<p className="rd-navbar-slogan veil">Get started now. We are available 24/7 .</p><a href="javascript:;" className="btn btn-primary btn-xs" data-toggle="modal" data-target="#contactModal">Get started</a>
								</div>
							</div>
						</div>
					</nav>
				</div>
			</header>
		);
	}
}
