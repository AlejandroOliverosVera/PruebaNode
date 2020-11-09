import React from "react";
import {Modal, Header, Icon, Button} from "semantic-ui-react"

export default function MyModal(props){
    let {visible, onClose} = props;
    
    
    React.useEffect(()=>{
        console.log("se inicio el componente, o cambio una de sus propiedades");


    }, [visible]);


    if (visible){
        return ( <Modal
            basic            
            open={visible}
            size='small'
           
          >
            <Header icon>
              <Icon name='archive' />
              Archive Old Messages
            </Header>
            <Modal.Content>
              <p>
                    Modal para la clase de desarrollo web
              </p>
            </Modal.Content>
            <Modal.Actions>
              <Button basic color='red' inverted onClick={() =>onClose() }>
                <Icon name='remove' /> No
              </Button>
              <Button color='green' inverted onClick={() => onClose()}>
                <Icon name='checkmark' /> Yes
              </Button>
            </Modal.Actions>
          </Modal>)
    } else {
        return (<></>);

    }
}