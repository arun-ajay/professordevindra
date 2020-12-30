import React,{Component} from 'react';
import styles from "pages/Landing/landing.module.scss";

import {Grid} from 'semantic-ui-react'


export default class Landing extends Component{
    state = {
    }

  
    render () { 
        
        return(
            <Grid.Row className = {styles.customRow}>
                <Grid.Column textAlign = {"center"} verticalAlign = {"middle"} width = {16} className = {styles.customColumn}>
                </Grid.Column>
            </Grid.Row>
        )
    } 
}
