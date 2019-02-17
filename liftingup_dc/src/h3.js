import React, { Component } from 'react';

class H3 extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <button onClick={()=>{this.props.onClickProp()}}>Submit

                </button>
            </div>
         );
    }
}
 
export default H3;