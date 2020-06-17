import  React from 'react';
import {Container,ListGroup,ListGroupItem,Button} from 'reactstrap';
import {CSSTransition,TransitionGroup} from 'react-transition-group';
import { v4 as uuid } from 'uuid';
//uuid();


export default class ShoppingList extends React.Component{
    state={
        items:[
            {id:uuid(),name:"Egg"},
            {id:uuid(),name:"Water"},
            {id:uuid(),name:"Egg"},
            {id:uuid(),name:"Egg"}
        ]
    }

  render(){
    const {items} =this.state
      return(
      <Container>
          <Button 
            color="dark"
            style={{marginButtom:'2rem'}}
            onClick={()=>{
                const name = prompt('enter item');
                if(name){
                    this.setState(state =>({
                        items:[...state.items,{id:uuid(),name:name}]
                    }))
                }
            }}>
                Add Item
            </Button>

      </Container>)
  }  
}

  

