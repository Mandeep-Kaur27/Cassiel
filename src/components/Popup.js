import React, { } from 'react';
import { FaTimes } from "react-icons/fa";
import emailjs from 'emailjs-com';
import { Form, Input, Button } from 'semantic-ui-react';
import ReactTooltip from "react-tooltip";
import Swal from 'sweetalert2';

const SERVICE_ID = "service_kdt0zni";
const TEMPLATE_ID = "template_v341q0c";
const USER_ID = "V1xhN12rp5Zjn67cQ";


const Popup = props => {
    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    html: `<div class="img-outer"></div>
                    <p class="tagline"> A member of the Cassiel team will get back to you shortly.<br> Have a nice day! <br>Team Cassiel</p>
                     <h4 class="mt-4"><i>Financing Your Kitchen On Wheels</i></h4> `
            })
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: 'error',
                    title: 'Ooops, something went wrong',
                    text: error.text,
                })
            });
        e.target.reset()
    };
    return (
        <div className="popup-box">
            <div className="container-fluid h-100 d-flex align-items-center">
                <div className="row">
                    <div className="box p-5 text-center">
                        <div className="popup-wrappper">
                            <span className="close-icon" onClick={props.handleClose}><FaTimes /></span>
                            <div className="col-md-12">
                                <h2 className="text-orange mb-1">Request Information on a Food Trailer Lease</h2>
                                <p className="tagline mb-4">Please answer the following questions</p>

                            </div>
                            <Form onSubmit={handleOnSubmit}>
                                <div className="row">
                                    <Form.Field className="col-sm-12 mb-4"
                                        id='form-input-control-sell'
                                        control={Input}
                                        name='sell'
                                        placeholder='Description of the food you plan to sell?*'
                                        type="text" 
                                        data-tip="Description of the food you plan to sell?*"
                                        data-event="click"                                    
                                        required
                                    />
                                </div>
                                <div className="row">
                                    <Form.Field className="col-sm-6 mb-4"
                                        id='form-input-control-name'
                                        control={Input}
                                        name='name'
                                        placeholder='First Name*'
                                        required
                                        type="text"
                                    />
                                    <Form.Field className="col-sm-6 mb-4"
                                        id='form-input-control-last-name'
                                        control={Input}
                                        name='lastName'
                                        placeholder='Last Name*'
                                        required
                                    />
                                </div>
                                <div className="row">
                                    <Form.Field className="col-sm-6 mb-4"
                                        id='form-input-control-email'
                                        control={Input}
                                        name='email'
                                        placeholder='Your Email*'
                                        required
                                        type="email"
                                    />
                                    <Form.Field className="col-sm-6 mb-4"
                                        id='form-input-control-phone'
                                        control={Input}
                                        name='Phone'
                                        placeholder='Cell Phone*'
                                        required
                                        type="PhoneInput"
                                    />
                                </div>
                                <div className="row">
                                    <Form.Field className="col-sm-6 mb-4"
                                        id='form-input-control-comp'
                                        control={Input}
                                        name='comp'
                                        placeholder='Your Company Name'
                                        type="text"
                                    />
                                    <Form.Field className="col-sm-6 mb-4"
                                        id='form-input-control-city'
                                        control={Input}
                                        name='city'
                                        placeholder='City and State where you plan to serve*'
                                        required
                                        type="text"
                                        data-tip="City and State where you plan to serve*"
                                        data-event="click"
                                    />
                                </div>
                                <div className="row">
                                    <Form.Field className="col-sm-6 mb-4"
                                        id='form-input-control-refer'
                                        control={Input}
                                        name='refer'
                                        placeholder='Share who referred you'
                                        type="text"
                                    />
                                    <Form.Field className="col-sm-6 mb-4"
                                        id='form-input-control-people'
                                        control={Input}
                                        name='people'
                                        placeholder='How many people do you expect to work in the trailer?'
                                        type="text"
                                        data-tip="How many people do you expect to work in the trailer?"
                                        data-event="click"
                                    />
                                </div>

                                <div className="row">
                                    <Form.Field className="col-sm-6 mb-4"
                                        id='form-input-control-service'
                                        control={Input}
                                        name='service'
                                        placeholder='How many years of food service?'
                                        type="text"
                                        data-tip="How many years of food service?"
                                        data-event="click"
                                    />
                                </div>

                                <Button type='submit' className="common-btn mt-3">Submit Information</Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>            
            <ReactTooltip place="bottom" effect="solid" globalEventOff="click" />
        </div>
        
    );

};

export default Popup;