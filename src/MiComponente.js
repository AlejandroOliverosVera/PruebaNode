import React, { Component } from 'react';

class MiComponente extends Component {
    render() {
        return(
            <div>
                <p>OwO {this.props.mensaje}</p>
                <img src="https://pbs.twimg.com/profile_images/1270045892872220679/8Q-6-85B_400x400.jpg" />
            </div>
             
        );
    }
}

export default MiComponente;