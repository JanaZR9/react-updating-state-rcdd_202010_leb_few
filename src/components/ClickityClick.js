// Code ClickityClick Component Here
import React, {Component} from 'react';

export default class ClickityClick extends Component{
   constructor (){
     super();
     this.state={
       hasbeenClicked:false
     };
   }
   
   handleClick = () => { 
     this.setState(previousState => {
       return {
         hasbeenClicked: !previousState.hasbeenClicked
       }
     })
   }
   
   
}