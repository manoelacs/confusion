import React, { useState } from 'react';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import FormContact from './FormContact';
import FormContatctRedux from './FormContactRedux';
//usar yup para validation

const Contact = (props) =>{
    const [open, setOpen] = useState(false);
    return(
        <div className = 'container'>
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Contact Us</h3>
                    <hr />
                </div>                
            </div>
            <div className='row row-content' style={{float : 'left', background: '#e4dede' }}>
                <div className='col-12'>
                    <h3 > Location Informations</h3>
                </div>
                <div className='col-12  col-sm-4 offset-sm-1'>
                    <h5>Our Address</h5>
                    <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                    </address>
                </div>
                <div className='col-12  col-sm-6  offset-sm-1'>
                    <h5>Map of our Location</h5> 
                        <div>
                            <iframe 
                             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.17908595958!2d114.28275111426868!3d22.30906584821582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34040381be582409%3A0x5ca78cbef899f174!2s121%20Clear%20Water%20Bay%20Rd%2C%20Clear%20Water%20Bay%2C%20Hong%20Kong!5e0!3m2!1spt-BR!2sbr!4v1604597793228!5m2!1spt-BR!2sbr" 
                             style =  {{ 
                                 width:"600", 
                                 height:"450", 
                                 frameborder:"0", 
                                 border:"0", 
                                 allowfullscreen:"",  tabindex:"0"}}>

                             </iframe>
                        </div>                 
                </div>
                <div className='col-12  col-sm-6 offset-sm-1 ' style={{}}>
                    <div className='btn btn-group ' role='group'>
                         <a role="button" className="btn btn-primary" href="tel:+85212345678">
                             <i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info">
                            <i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net">
                            <i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div> 
            <div className="row row-content">
                 <div className="col-12">
                    <h3  onClick={() => setOpen(!open)} style={{cursor: "pointer",}}>                             
                                Send us your Feedback</h3>
                </div>
                <div className="col-12">
                { 
                         //(open )?<FormContact/>: null
                         (open )?<FormContatctRedux/>: null                 
                }
                </div>
                
                

            </div>
        </div>
        );
}; export default Contact;