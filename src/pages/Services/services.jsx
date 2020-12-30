import React,{Component} from 'react';
import styles from "pages/Services/services.module.scss";

import {Grid,Icon,Image,Segment,Card} from 'semantic-ui-react'


export default class Services extends Component{
    state = {
    }

  
    render () { 
        
        return(
            <Grid.Row className = {styles.customRow}>
                <Grid.Column textAlign = {"center"} verticalAlign = {"middle"} width = {16} className = {styles.customColumn}>
                <Card.Group itemsPerRow={4}>
                <Card color='red' />
                <Card color='orange' />
                <Card color='yellow' />
                <Card color='olive' />

  </Card.Group>
                </Grid.Column>
            </Grid.Row>
        )
    } 
}
