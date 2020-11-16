import React from 'react';
import {Button, Row, Col, Label} from 'reactstrap';
import {Control, LocalForm, Errors} from 'react-redux-form'
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class FormComment extends React.Component{
    constructor(props){
        super(props);
       
    }
    handleSubmit(values){      
        // event.preventDefault();
         console.log('Current State is: ' + JSON.stringify(values));
         alert('Current State is: ' + JSON.stringify(values));  
         //this.resetForm();  
         
     };
    
    render(){
            var options = [1, 2, 3, 4, 5]
            var result = null;            
            result = options.map( 
                   (i) => {  
                       return( <option>{i}</option>); 
            });
            
             return(
            <LocalForm>
                <Row>
                    <Label for="selectRating" md={10}>Rating</Label>
                    <Col md={12}>
                        <Control.select 
                            model=".seletRating"
                            name="seletRating"
                            className="form-control custom-select mr-sm-2">                             
                                {result}
                        </Control.select>                    
                    </Col> 
                    <Errors
                                        className="text-danger"
                                        model=".seletRating"
                                        show="touched"
                                        messages={{
                                            required: 'Required'                                           
                                        }}
                            />                
                </Row>

                <Row>
                    <Label htmlFor="name" md={10}> Your Name</Label>
                        <Col md={12}>
                            <Control.text 
                                model=".name" 
                                id="name" name="name"
                                placeholder="Your Name"
                                className="form-control"
                                validators={{
                                    required,
                                    minLength: minLength(3),
                                    maxLength: maxLength(15)
                                }}
                            />
                            <Errors
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                            />
                        </Col>        


                </Row>

                <Row className="form-group">
                        <Label htmlFor="message" md={10}> Comment</Label>
                        <Col md={12}>
                            <Control.textarea model=".message" id="message" name="message"
                                rows="6"
                                className="form-control" />
                        </Col>
                    </Row>
                <Row>
                    <Col md={{size:10, offset: 0}}>
                    <Button type='submit' color='primary' onClick = {this.props.toggleModal}>Submit</Button> 
                    </Col>
                </Row>

            </LocalForm>
        );
    }

}; export default FormComment;