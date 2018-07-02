import React from 'react';
import {createDrawerNavigator} from 'react-navigation';
import {Business} from './Business';
import {Tech} from './Tech';
import {Bitcoin} from './bitcoin';
import {Topnews} from './topnews';

export const MainDrawer=createDrawerNavigator({

    BUSINESS: {

        path: '/',
        screen: Business

    },

    TECHCRUNCH: {

        screen: Tech

    },

    BITCOIN: {

        screen: Bitcoin

        
    },

    TOPNEWS: {

        screen: Topnews
    }

},
{

 
    drawerPosition: 'left',
    drawerWidth:300,drawerBackgroundColor: "lightgray"
});