import 'semantic-ui-css/semantic.min.css'
import { Button, Icon, Label, Menu, Image} from 'semantic-ui-react'
import MyModal from './MyModal';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ReactPlayer from 'react-player'


class Cambio extends React.Component{
  constructor(props){
    super(props)
    window.helloComponent = this;
    this.state={
      src:"https://i.pinimg.com/originals/55/82/b7/5582b708139eb343e1375d6961ab2b02.gif"
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

class Video extends React.Component{
  constructor(props){
    super(props)
    window.helloVideo = this;
    this.state={
      url:"https://www.youtube.com/watch?v=NvOHijJqups"
    }
  }
  
  componentDidMount() {
    document.body.style.backgroundColor = "#133f5a"
  }

  MyVid = (a) =>{
    this.setState({
      url: a
    })
  }

  render(){
    return(
      <div className="Videos">
        <ReactPlayer
          relative
          url={this.state.url}
          controls
          playbackRate = {1}
          width = "896px"
          height = "504px"
        />
      </div>
    )
  }
}

function App() {

  var [openModal, setOpenModal] = React.useState(false);

  console.log("modal state", openModal);

  function gifIna(){
    window.helloComponent.MyGif("https://media1.tenor.com/images/9d8813c0398119cd853424e4db7de2e9/tenor.gif");
  }

  function gifFubuki(){
    window.helloComponent.MyGif("https://media1.tenor.com/images/6effcb5e0f720ec904eefb2551fd84ab/tenor.gif");
  }

  function gifMarine(){
    window.helloComponent.MyGif("https://media1.tenor.com/images/ae37217f57af05eff7586a69716a42f4/tenor.gif");
  }

  function vidIna(){
    window.helloVideo.MyVid("https://www.youtube.com/watch?v=n-hRYCpm8wQ");
  }

  function vidFubuki(){
    window.helloVideo.MyVid("https://www.youtube.com/watch?v=2o0eJ2ULwmo");
  }

  function vidMarine(){
    window.helloVideo.MyVid("https://www.youtube.com/watch?v=e7VK3pne8N4");
  }

  return (
    <Router>
      <Switch>
        <Route path = "/" exact>
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
            <Button >
              <Link to="/">
                Inicio
              </Link>
            </Button>
            <Button >
              <Link to="/videos">
                Videos
              </Link>
            </Button>
            <Button as='div' labelPosition='right' onClick={(e,d)=>setOpenModal(true)}>
            <Button icon>
              <Icon name='heart' />
              Like
            </Button>
            <Label as='a' basic pointing='left'>
              2,048
            </Label>
            </Button>
            <MyModal visible={openModal} onClose={()=>{console.log("close"); setOpenModal(false);}} />
            <Cambio/>
          </div>
        </Route>
        <Route path = "/videos">
          <div className="App">
            <Menu inverted>
              <Menu.Item
                name='Ina'          
                onClick={vidIna}
              >
                Ina
              </Menu.Item>

              <Menu.Item
                name='Fubuki'
                
                onClick={vidFubuki}
              >
                Fubuki
              </Menu.Item>

              <Menu.Item
                name='Marine'          
                onClick={vidMarine}
              >
                Marine
              </Menu.Item>
            </Menu>
            <Button >
              <Link to="/">
                Inicio
              </Link>
            </Button>
            <Button>
              <Link to="/videos">
                Videos
              </Link>
            </Button>
            <Button as='div' labelPosition='right' onClick={(e,d)=>setOpenModal(true)}>
            <Button icon>
              <Icon name='heart' />
              Like
            </Button>
            <Label as='a' basic pointing='left'>
              2,048
            </Label>
            </Button>
            <MyModal visible={openModal} onClose={()=>{console.log("close"); setOpenModal(false);}} />
            <hr />
            <Video/>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;