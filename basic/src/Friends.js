import React, { Component } from 'react';

class Friends extends Component{

    render(){
        let friendsList = this.props.friends.map(friend =>{
            return <li >{friend}</li>
            })
        return(
            <div>
                <ul>
                    <li>{friendsList}</li>
                </ul>
            </div>
        )
    }

}

export default Friends;