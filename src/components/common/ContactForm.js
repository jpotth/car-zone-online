import React, { Component } from 'react';

import { sendMail } from '../../utils/api';

export default class ContactForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			message: '',
			name: '',
			number: '',
			company: ''
		};
	}

	updateForm(key, val) {
		this.setState({
			...this.state,
			[key]: val
		});
	}

	submitMail(e) {
		e.preventDefault();
		if(this.state.email) {
			sendMail(this.state);
		}
	}

	render() {
		return (
			<div id="contactModal" className="modal fade" role="dialog" style={{paddingTop: '10%'}}>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close" data-dismiss="modal">&times;</button>
							<h4 className="modal-title">Contact Us</h4>
						</div>
						<div className="modal-body">
							<div className="offset-sm-top-66">
								<div className="range range-xs-center">
									<div className="cell-xs-10 cell-md-8">
										<form data-form-output="form-output-global" data-form-type="contact" className="rd-mailform text-left" noValidate="novalidate">
											<div className="range range-xs-center">
												<div className="cell-sm-12">
													<div className="form-group">
														<label htmlFor="git-3-mailform-company-name" className="form-label rd-input-label">Company Name</label>
														<input id="git-3-mailform-company-name" type="text" name="companyname" className="form-control bg-white form-control-has-validation form-control-last-child" style={{paddingTop: '20px'}} value={this.state.company} onChange={e => this.updateForm('company', e.target.value)} /><span className="form-validation"></span>
													</div>
												</div>
												<div className="cell-sm-12">
													<div className="form-group offset-sm-top-30">
														<label htmlFor="git-3-mailform-first-name" className="form-label rd-input-label">Name</label>
														<input id="git-3-mailform-first-name" type="text" name="firstname" className="form-control bg-white form-control-has-validation form-control-last-child" style={{paddingTop: '20px'}} value={this.state.name} onChange={e => this.updateForm('name', e.target.value)} /><span className="form-validation"></span>
													</div>
												</div>
												<div className="cell-sm-6">
													<div className="form-group offset-sm-top-30">
														<label htmlFor="git-3-mailform-phone" className="form-label rd-input-label">Phone</label>
														<input id="git-3-mailform-phone" type="text" name="phone" className="form-control bg-white form-control-has-validation form-control-last-child" style={{paddingTop: '20px'}} value={this.state.number} onChange={e => this.updateForm('number', e.target.value)} /><span className="form-validation"></span>
													</div>
												</div>
												<div className="cell-sm-6">
													<div className="form-group offset-sm-top-30">
														<label htmlFor="git-3-mailform-email" className="form-label rd-input-label">Email</label>
														<input id="git-3-mailform-email" type="text" name="email" className="form-control bg-white form-control-has-validation form-control-last-child" style={{paddingTop: '20px'}} value={this.state.email} onChange={e => this.updateForm('email', e.target.value)} /><span className="form-validation"></span>
													</div>
												</div>
												<div className="cell-sm-12">
													<div className="form-group offset-sm-top-30">
														<label htmlFor="git-3-mailform-message" className="form-label rd-input-label">Message</label>
														<textarea id="git-3-mailform-message" name="message" className="form-control bg-white form-control-has-validation form-control-last-child" value={this.state.message} onChange={e => this.updateForm('message', e.target.value)}></textarea><span className="form-validation"></span>
													</div>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
						<div className="modal-footer">
							<button type="submit" className="btn-aqil-effect-mod-1 btn-success btn btn-aqil-effect" data-dismiss="modal" onClick={e => this.submitMail(e)}>Submit</button>
							<button type="button" className="btn-aqil-effect-mod-2 btn-danger btn btn-aqil-effect" data-dismiss="modal">Close</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
