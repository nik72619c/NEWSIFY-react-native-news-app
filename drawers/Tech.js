import React from 'react';
import {Text,View,Button,ScrollView, Tile,Image,StyleSheet} from 'react-native';
 export class Tech extends React.Component{

    constructor(){

        super();
        this.data=[];
        this.list=[];
        this.state={

            gotData: false
        }
    }


    componentDidMount(){
       
        var url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=3b82cbf8fc33457e9f00a44e044356c6';
var req = new Request(url);
fetch(url)
    .then((response)=> {
      response.json().then((result)=>{this.data=result.articles;
       this.data.forEach((element)=>{
           
        var object={};
        object.name=element.title;
        object.avatar_url= element.urlToImage;
        object.subtitle=element.description;

        this.list.push(object);

       });

       this.setState({gotData: true});
    });

    });
}


    render(){

        return(
    
            <ScrollView>
                {console.log("inside return function...")}
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    
    {
    
        this.list.map((l,i)=>{
            console.log("inside map");
    
    //       <View  key={i} style={{ paddingTop: 0, backgroundColor: '#E8E8E8', marginBottom: 20,marginTop: 35,borderRadius: 7 }}>
    //         <Text style={styles.cardHeading}>{l.title}</Text>
    // <Image style={styles.cardImage} source={{uri: l.urlToImage}}/>
    // <Text  style={{color: '#908C8F'}}>{l.description}</Text>
    
    // </View>
     return <View  key={i} style={{ paddingTop: 0, backgroundColor: '#1A191E', marginBottom: 10,marginTop: 35,borderRadius: 7 }}>
     <Text style={styles.cardHeading}>{l.name}</Text>
    <Image style={styles.cardImage} source={{uri: l.avatar_url}}/>
    <Text  style={{color: '#908C8F', fontSize: 15, lineHeight: 30, paddingTop: 10, paddingBottom: 10}}>{l.subtitle}</Text>
    
    </View>
    
        })
    }
       </View>
            </ScrollView>
    
       );
    
         
        
    }
 }


 const styles=StyleSheet.create({

    cardImage: {

        width: 400,
        height: 400,
        paddingTop: 10,paddingBottom: 10,paddingLeft: 7,paddingRight: 7
        
    },

    cardHeading: {

        color: 'white',
        fontSize: 30,
        fontWeight: "bold",
        // fontFamily: 'Lato mono'
        
    }
});