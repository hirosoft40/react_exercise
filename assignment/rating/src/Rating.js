import React from 'react';
import PropTypes from 'prop-types';
import {Glyphicon} from 'react-bootstrap'

class Rating extends React.Component {
    constructor(props) {
        super(props);

        this.state = {rating:this.props.rating}
        
    }

    render() {
        return (
            <div style={style.starStyle}>
            
            <Glyphicon glyph={this.state.rating >=1 ? 'star' :'start-empty'} onClick={this.handleEvent}></Glyphicon>
            <Glyphicon glyph={this.state.rating >=2 ? 'star' :'start-empty'} onClick={this.handleEvent}></Glyphicon>
            <Glyphicon glyph={this.state.rating >=3 ? 'star' :'start-empty'} onClick={this.handleEvent}></Glyphicon>
            <Glyphicon glyph={this.state.rating >=4 ? 'star' :'start-empty'} onClick={this.handleEvent}></Glyphicon>
            <Glyphicon glyph={this.state.rating >=5 ? 'star' :'start-empty'} onClick={this.handleEvent}></Glyphicon>
            
            </div>
        );
    }
}


Rating.propTypes = {
    
};

export default Rating
