import React from "react";
import PropTypes from "prop-types";
import { Media } from "react-bootstrap";
import Rating from './Rating';
class Product extends React.Component {
//   constructor(props) {
//     super(props);
//   }

  render() {
    return (
      <div>
        <Media>
          <Media.Left>
            <img 
            width={64} 
            height={64} 
            src={this.props.data.imageUrl} />
          </Media.Left>
          <Media.Body>
            <Media.Heading>
            {this.props.data.productName}
            </Media.Heading>
            {this.props.data.releaseDate}
            <Rating rating={this.props.data.rating} />
            <p>{this.props.data.description}</p>
          </Media.Body>
        </Media>
      </div>

      // <Media>
      // <img
      //     width={64}
      //     height={64}
      //     className="mr-3"
      //     src="holder.js/64x64"
      //     alt="Generic placeholder"
      // />
      // <Media.Body>
      //     <h5>Media Heading</h5>
      //     <p>
      //     Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
      //     ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
      //     tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
      //     Donec lacinia congue felis in faucibus.
      //     </p>
      // </Media.Body>
      // </Media>;
    );
  }
}

Product.propTypes = {};

export default Product;
