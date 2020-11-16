import React  from 'react';
import {Form, FormGroup, Label, Col, Input, Button, FormFeedback} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

class FormContact extends React.Component{
    constructor(props){       
        
        super(props);
       
        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree:false,
            contactType:"Tel.",
            message:'',
            touched: {
                firstname: false,
                lastname: false,
                telnum: false,
                email: false
            }
            
        }
        this.baseState = this.state; 
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.validate = this.validate.bind(this);

    }
    handleInputChange(event){
        const {name, value} = event.target;
       // const value = target.type === 'checkbox' ? target.checked : target.value;
        //const name = target.name;
        if(event.target.type === 'checkbox'){
            value = event.target.checked
        }
        this.setState({[name]:value});
        
    };
  
    handleSubmit(event){      
        event.preventDefault();
        console.log('Current State is: ' + JSON.stringify(this.state));
        alert('Current State is: ' + JSON.stringify(this.state));  
        this.resetForm();  
        
    };
    resetForm = () => {
        console.log('Current State is: ' + JSON.stringify(this.state));
        alert('Current State is: ' + JSON.stringify(this.state));  
       
        this.setState(this.baseState);
        console.log('Current State is: ' + JSON.stringify(this.state));
    }
    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }
    validate(firstname, lastname, telnum, email) {
        const errors = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: ''
        };

        if (this.state.touched.firstname && firstname.length < 3)
            {console.log("o tamané " + firstname.length);
            errors.firstname = 'First Name should be >= 3 characters';}
        else if (this.state.touched.firstname && firstname.length > 10)
            errors.firstname = 'First Name should be <= 10 characters';

        if (this.state.touched.lastname && lastname.length < 3)
            errors.lastname = 'Last Name should be >= 3 characters';
        else if (this.state.touched.lastname && lastname.length > 10)
            errors.lastname = 'Last Name should be <= 10 characters';

        const reg = /^\d+$/;
        if (this.state.touched.telnum && !reg.test(telnum))
            errors.telnum = 'Tel. Number should contain only numbers';

        if(this.state.touched.email && email.split('').filter(x => x === '@').length !== 1)
            errors.email = 'Email should contain a @';

        return errors;
    }
    
    render(){
        const errors = this.validate(
                                        this.state.firstname, 
                                        this.state.lastname, 
                                        this.state.telnum, 
                                        this.state.email);
            return(
            <div className="col-12 col-md-9">
                <Form  innerRef={this.formRef} 
                       onSubmit={this.handleSubmit}>
                   <FormGroup row>
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        value={this.state.firstname}
                                        valid={errors.firstname === ''}
                                        invalid={errors.firstname !== ''}
                                        onBlur={this.handleBlur('firstname')}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.firstname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        value={this.state.lastname}
                                        valid={errors.lastname === ''}
                                        invalid={errors.lastname !== ''}
                                        onBlur={this.handleBlur('lastname')}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.lastname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Input type="tel" id="telnum" name="telnum"
                                        placeholder="Tel. Number"
                                        value={this.state.telnum}
                                        valid={errors.telnum === ''}
                                        invalid={errors.telnum !== ''}
                                        onBlur={this.handleBlur('telnum')}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.telnum}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="email" id="email" name="email"
                                        placeholder="Email"
                                        value={this.state.email}
                                        valid={errors.email === ''}
                                        invalid={errors.email !== ''}
                                        onBlur={this.handleBlur('email')}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.email}</FormFeedback>
                                </Col>
                            </FormGroup>
                    <FormGroup row>
                        <Col md={{size: 6, offset: 2}}>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox"
                                        name="agree"
                                        checked={this.state.agree}
                                        onChange={this.handleInputChange} /> {' '}
                                    <strong>May we contact you?</strong>
                                </Label>
                            </FormGroup>
                        </Col>
                        <Col md={{size: 3, offset: 1}}>
                            <Input type="select" name="contactType"
                                    value={this.state.contactType}
                                    onChange={this.handleInputChange}>
                                <option>Tel.</option>
                                <option>Email</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="message" md={2}>Your Feedback</Label>
                        <Col md={10}>
                            <Input type="textarea" id="message" name="message"
                                rows="12"
                                value={this.state.message}
                                onChange={this.handleInputChange}></Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md={{size: 10, offset: 2}}>
                            <Button type="submit" color="primary">
                                Send Feedback
                            </Button>
                        </Col>
                    </FormGroup>
             </Form>
        </div>

        );
    }
   
     


} export default FormContact;