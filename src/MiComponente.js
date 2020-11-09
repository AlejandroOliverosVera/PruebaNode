import React, { Component } from 'react';

class MiComponente extends Component {
    
    constructor( props ){
        super(props);
        this.state = {seconds : 0};
    }
    
    cambiarSegundo(){
        this.setState({seconds : this.state.seconds +1})
    }
    
    componentDidMount(){
        this.interval = setInterval(() => this.cambiarSegundo(), 1000)
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render() {
        
        return(
            <div>
                <p>Ahoooy!{this.props.mensaje}</p>
                <img alt="senchou" src="https://pbs.twimg.com/profile_images/1270045892872220679/8Q-6-85B_400x400.jpg" />
             <h1> Segundos : {this.state.seconds}</h1>
             </div>
             
        );
    }
}

export default MiComponente;