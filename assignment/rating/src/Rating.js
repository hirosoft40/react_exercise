import React from 'react';
import PropTypes from 'prop-types';
import {Glyphicon} from 'react-bootstrap'
import { MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon, MDBBadge, MDBContainer, MDBRow, MDBCol } from "mdbreact";

class Rating extends React.Component {
    constructor(props) {
        super(props);
        this.state = {rating:this.props.rating}   
    }

    handleClick(ratingValue){
        this.setState({rating:ratingValue})
    }

    render() {
        return (
            <div style={style.starStyle}>
            
            <Glyphicon glyph={this.state.rating >=1 ? 'star' :'start-empty'} onClick={()=>this.handleEvent}></Glyphicon>
            <Glyphicon glyph={this.state.rating >=2 ? 'star' :'start-empty'} onClick={()=>this.handleEvent}></Glyphicon>
            <Glyphicon glyph={this.state.rating >=3 ? 'star' :'start-empty'} onClick={()=>this.handleEvent}></Glyphicon>
            <Glyphicon glyph={this.state.rating >=4 ? 'star' :'start-empty'} onClick={()=>this.handleEvent}></Glyphicon>
            <Glyphicon glyph={this.state.rating >=5 ? 'star' :'start-empty'} onClick={()=>this.handleEvent}></Glyphicon>
            
            </div>
        );
    }
}


export default Rating

const styles = {
    starStyle :{
      color: 'orange'
    }
}