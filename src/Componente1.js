import 'semantic-ui-css/semantic.min.css'
import { Button, Icon, Label, Menu} from 'semantic-ui-react'
import MyModal from './MyModal';
import React from "react";

function Componente1(){
    var [openModal, setOpenModal] = React.useState(false);

    console.log("modal state", openModal);
    
    

    return (
        <div className="Componente1">
        <Menu>
            <Menu.Item
            name='Ina'          
            onClick={this.handleClick()}
            >
            Ina
            </Menu.Item>

            <Menu.Item
            name='Fubuki'
            
            onClick={()=>console.log("click menu 3")}
            >
            Fubuki
            </Menu.Item>

            <Menu.Item
            name='Marine'          
            onClick={()=>console.log("click menu 3")}
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
        </div>
    );
}

export default Componente1;