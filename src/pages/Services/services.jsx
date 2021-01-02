import React,{Component} from 'react';
import styles from "pages/Services/services.module.scss";

import {Grid,Transition,Card,List,Header} from 'semantic-ui-react'

import {servicesData} from "pages/Services/data"



export default class Services extends Component{
    state = {
        open : false,
    }

    componentDidMount(){
        this.setState({
            open: true
            }
        )
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
                            <Header as='h4' className = {styles.textColor}>
                                {data.service}
                            </Header>
                        </List.Header>
                        <List.Description>
                            <i className = {styles.textColor}>
                                {data.subBullet}
                            </i>
                        </List.Description>
                    </List.Content>
                </List.Item>
            )
        })
        

    }

  
    render () { 

        var animation = [
            "fly right","fly left"
        ]

        var cardArray = servicesData.map((data,index) => {
            return (
                <Transition animation = {animation[index%2]} duration = {700+(index)*200} visible = {this.state.open}>
                <Card  className = {styles.customCard}>
                    <Card.Content className = {styles.customCardContent}>
                        <Card.Header textAlign = {"center"} className = {styles.customCardHeader}>
                            <Header as = "h3" className = {styles.headerColor}>
                                {data.institute}
                            </Header>
                        </Card.Header>
                        <Card.Description className = {styles.customCardDescription}>
                            <List>
                            {this.generateList(data.services)}
    
                            </List>
                        </Card.Description>
                    </Card.Content>
                </Card>

                </Transition>
            )
        })

        
        return(
            <Grid.Row className = {styles.customRow}>
                <Grid.Column only = {"computer"} width = {1}/>
                <Grid.Column only = {"computer"} verticalAlign = {"middle"} width = {14} className = {styles.customColumn}>
                    <Card.Group itemsPerRow={2}>
                        {cardArray}
                    </Card.Group>
                </Grid.Column>
                <Grid.Column only = {"computer"} width = {1}/>
                <Grid.Column only = {"mobile tablet"} width = {1}/>
                <Grid.Column only = {"mobile tablet"} verticalAlign = {"middle"} width = {14} className = {styles.customColumn}>
                    <Card.Group itemsPerRow={1}>
                        {cardArray}
                    </Card.Group>
                </Grid.Column>
                <Grid.Column only = {"mobile tablet"} width = {1}/>
            </Grid.Row>
        )
    } 
}
