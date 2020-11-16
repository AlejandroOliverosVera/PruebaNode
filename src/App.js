import 'semantic-ui-css/semantic.min.css'
import { Button, Icon, Label, Menu, Image} from 'semantic-ui-react'
import MyModal from './MyModal';
import React from "react";


class Cambio extends React.Component{
  constructor(props){
    super(props)
    window.helloComponent = this;
    this.state={
      src:""
    }
  }
  
  componentDidMount() {
    document.body.style.backgroundColor = "#133f5a"
  }

  MyGif = (a) =>{
    this.setState({
      src: a
    })
  }

  render(){
    return(
      <div className="Cambio">
        <Image centered src={this.state.src} />
      </div>
    )
  }
}



function App() {

  var [openModal, setOpenModal] = React.useState(false);

  console.log("modal state", openModal);

  function gifIna(){
    window.helloComponent.MyGif("https://media.tenor.com/images/b5bfaa4a85b1dff47803cc082d8856f2/tenor.gif");
  }

  function gifFubuki(){
    window.helloComponent.MyGif("https://media1.tenor.com/images/6effcb5e0f720ec904eefb2551fd84ab/tenor.gif");
  }

  function gifMarine(){
    window.helloComponent.MyGif("https://media1.tenor.com/images/ae37217f57af05eff7586a69716a42f4/tenor.gif");
  }


  
  return (
    <div className="App">
      <Menu inverted>
        <Menu.Item
          name='Ina'          
          onClick={gifIna}
        >
          Ina
        </Menu.Item>

        <Menu.Item
          name='Fubuki'
          
          onClick={gifFubuki}
        >
          Fubuki
        </Menu.Item>

        <Menu.Item
          name='Marine'          
          onClick={gifMarine}
        >
          Marine
        </Menu.Item>
      </Menu>
      <Button as='div' labelPosition='right' onClick={(e,d)=>setOpenModal(true)}>
      <Button icon>
        <Icon name='heart' />
        Like
      </Button>
      <Label as='a' basic pointing='left'>
        2,048
      </Label>
    </Button>
    <Button as='div' labelPosition='left'>
      <Label as='a' basic pointing='right'>
        2,048
      </Label>
      <Button icon>
        <Icon name='heart' />
        Like
      </Button>
    </Button>
    <Button as='div' labelPosition='left'>
      <Label as='a' basic>
        2,048
      </Label>
      <Button icon>
        <Icon name='fork' />
      </Button>
    </Button>
    <MyModal visible={openModal} onClose={()=>{console.log("close"); setOpenModal(false);}} />
    <Cambio/>
    </div>
  );
}

export default App;