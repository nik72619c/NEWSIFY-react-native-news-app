import React,{Component} from 'react'; 
import {Splash} from './splash';
import {News} from './news';
import { MainDrawer } from '../drawers/MainDrawer';

export default class Intro extends Component{

    constructor(){

         super();
         this.state={

            currentState: 'Splash'
        }
    
        setTimeout(()=>{
    
            this.setState({currentState: 'News'});
        },5000);
    }

    render(){

        
         if(this.state.currentState=='Splash'){

            return <Splash></Splash>
         }

         else{

            return <MainDrawer/>
         }

}

}