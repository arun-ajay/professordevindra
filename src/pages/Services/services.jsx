import React,{Component} from 'react';
import styles from "pages/Services/services.module.scss";

import {Grid,Icon,Image,Segment,Card,List} from 'semantic-ui-react'

import {servicesData} from "pages/Services/data"


export default class Services extends Component{
    state = {
    }

    generateList = (servicesData) => {

        var colors = [
            "red","orange","yellow","olive","green","teal","blue","violet","purple","pink"
        ]

        return servicesData.map((data,index) => {
            return (
                <List.Item>
                    <List.Icon name = "circle" color = {colors[index]}/>
                    <List.Content>
                        <List.Header>
                            {data.service}
                        </List.Header>
                        <List.Description>
                            {data.subBullet}
                        </List.Description>
                    </List.Content>
                </List.Item>
            )
        })
        

    }

  
    render () { 

        var cardArray = servicesData.map((data,index) => {
            return (
            <Card  className = {styles.customCard} color = {"green"}>
                <Card.Content >
                    <Card.Header textAlign = {"center"}>
                        {data.institute}
                    </Card.Header>
                    <Card.Description>
                        <List>
                        {this.generateList(data.services)}

                        </List>
                    </Card.Description>
                </Card.Content>
            </Card>
            )
        })
        
        return(
            <Grid.Row className = {styles.customRow}>
                <Grid.Column verticalAlign = {"middle"} width = {16} className = {styles.customColumn}>
                <Card.Group itemsPerRow={4}>
                {cardArray}
                </Card.Group>
                </Grid.Column>
            </Grid.Row>
        )
    } 
}
