import React, {useState} from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, 
    BreadcrumbItem, Breadcrumb, Button, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';
import {Link } from 'react-router-dom';
import {  Col, Label} from 'reactstrap';
import {Control, LocalForm, Errors} from 'react-redux-form'
//import FormComment from './FormComment';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);


const FormComment = (props) => {
   
    const handleSubmit = (values) => {      
        // event.preventDefault();
         console.log('Current State is: ' + JSON.stringify(values));
         alert('Current State is: ' + JSON.stringify(values));  
         //this.resetForm();  
         
     };
    var options = [1, 2, 3, 4, 5];
    var result = null;            
    result = options.map( 
            (i) => {  
                    return( <option>{i}</option>); 
    });
            
    return(
            <LocalForm onSubmit={handleSubmit}>
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
                    <Button type='submit' color='primary' onClick = {props.toggleModal}>Submit</Button> 
                    </Col>
                </Row>

            </LocalForm>
    );
            
} 



const CommentForm= (props) =>{
    return(
        <Modal isOpen={props.isOpenModalComment}>
                <ModalHeader toggle={props.toggleModal}  >
                Submit 
                    
                </ModalHeader>
                <ModalBody> 
                   <FormComment {...props}/>
                </ModalBody>
        </Modal>
    );    
};


function RenderDetails({dish}){
    
    return(
    (dish != null) ?
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg top src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card> 
        </div>       
         : <div></div>    
         )
}
function RenderComments({comments, toggleModal}) {

    var allComments = null;
        allComments = comments.map(
            (comment) => {  
                return(                    
                    <li key={comment.id}>                        
                        <p>
                            {comment.comment} <br/>
                            -- {comment.author}, {new Intl.DateTimeFormat('en-US', {year:'numeric', month:'short', day:'2-digit'})
                                                            .format( new Date(Date.parse(comment.date )))}
                        </p>
                    </li> 
                )         
          });
        if(allComments != null){
            return(
                <div className="col-12 col-md-5 m-1">
                    <h4>Comentários</h4>                
                    <ul className="list-unstyled"> 
                        {allComments}
                    </ul>  
                    <Button type='submit' color='secondary' onClick = {toggleModal}> <span className="fa fa-pencil fa-lg mr-1"></span>Submit Comment</Button>                
                </div> 

            )
            
        } else{
            return(
                    <div className="col-12 col-md-5 m-1">
                        <h4> Be the first to comment</h4>
                        <Button type='sub' color='secondary' onClick = {toggleModal}>Submit Comment</Button>
                       
                    </div>
            )
        }
};
 

 const DishDetails = (props) => { 

    const [isOpenModalComment, setIsOpenModalComment] = useState(false);

     const toggleModal = () =>{
         console.log('click');
         setIsOpenModalComment(!isOpenModalComment)
         console.log(isOpenModalComment)
      }  

     return(
            <div className= "container"> 
                <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>                
                    </div>           
                <div className="row">
                    <RenderDetails dish={props.dish}/>            
                    {props.dish && <RenderComments 
                    comments = {props.comments}
                    toggleModal= {toggleModal}
                    
                    />}                                  
                </div>
                <CommentForm 
                    isOpenModalComment={ isOpenModalComment}
                    toggleModal= {toggleModal}
                /> 
                
               
            </div>
            
        );          
   

}; export default DishDetails;