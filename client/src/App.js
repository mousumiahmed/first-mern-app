import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from "./components/AppNavbar";
import ShoppingList from "./components/Shopping_list.js";
class App extends React.Component{
  render(){
    return(
      <div>
        <AppNavbar/>
        <ShoppingList />
      </div>
    )
  }
}

export default App;
