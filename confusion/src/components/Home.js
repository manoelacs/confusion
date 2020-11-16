import React from 'react';
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap';

const RenderCard = ({item}) => {
    return(
        <div className="col-12 col-md m-1">
            <Card>
                <CardImg src={item.image}/>
                <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                    <CardText className="text-justify">{item.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
};
const Home = (props) =>{
    const RenderListCards = () => {
        return(
            <div className="row align-items-start">
                <RenderCard key= {props.dish.id} item= {props.dish} />
                <RenderCard key ={props.promotion.id} item= {props.promotion} />
                <RenderCard key = {props.leader.id} item= {props.leader} />
        </div> 
        );       
                 
    };
    return(
        <div  className='container'>
            <div className="col-12 col-md m-1">
               <RenderListCards/>                
            </div>
        </div>

    );
}; export default Home;