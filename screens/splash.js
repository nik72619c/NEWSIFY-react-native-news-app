import React,{Component} from 'react';
import {Text,StyleSheet,View,Dimensions,Animated,ActivityIndicator} from 'react-native';

export class Splash extends Component{

constructor(props){

    super(props);
    this.opacityValue=new Animated.Value(0);
    
}
    componentDidMount(){

        this.opacityValue.setValue(0);
        Animated.timing(this.opacityValue,{

            toValue: 1,
            duration: 3000

        }).start();

        

    }


    render(){

    
        return(

            <View style={styles.background}>
            <Animated.Text style={{opacity: this.opacityValue, color: '#F82A85', fontSize: 30,
        marginLeft: 50,
        letterSpacing: 10,
        fontFamily: 'Roboto',
        paddingBottom: 20}}>WELCOME TO NEWSIBUD! HOP ON BUD</Animated.Text>
        <Text style={{color: '#D8F1A0',paddingBottom: 40,fontWeight: 'bold'}}>Kindly wait while we load the news for ya ...</Text>
        <ActivityIndicator size="large" color="white" />

            </View>
        )
    }
}

let styles=StyleSheet.create({

    background: {

        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        flex: 1,
        backgroundColor: 'rgb(32,53,70)',
        justifyContent: 'center',
        alignItems: 'center'
    },

    title:{

        opacity: this.opacityValue,
        color: 'white',
        fontSize: 30,
        marginLeft: 50,
        letterSpacing: 10,
        fontFamily: 'Roboto',
       
    }
})

