import React,{Component} from 'react';
import styles from "pages/ContactMe/contactme.module.scss";

import {Grid} from 'semantic-ui-react'


export default class ContactMe extends Component{
    state = {
    }

  
    render () { 
        
        return(
            <Grid.Row className = {styles.customRow}>
                <Grid.Column textAlign = {"center"} verticalAlign = {"middle"} width = {16} className = {styles.customColumn}>
                    contactme
                </Grid.Column>
            </Grid.Row>
        )
    } 
}
