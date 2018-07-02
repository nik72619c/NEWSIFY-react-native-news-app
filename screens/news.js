import React from 'react';
import {Text, View , StyleSheet,Button} from 'react-native';
import {MainDrawer} from '../drawers/MainDrawer';

export class News extends React.Component{

    constructor(props){

        super(props);
    }

    render(){

        return (
            <View>
                <MainDrawer/>
                </View>
            
        )
    }
}