import React,{Component} from 'react';
import styles from "pages/Services/services.module.scss";

import {Grid,Transition,Card,List,Header,Button,Icon} from 'semantic-ui-react'

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

    openEmail = () => {
        window.location.href = `mailto:${"professordevindra@gmail.com"}?subject=${"Requesting for Consultation"}&body=${"Dear Professor Devindra, %0D%0A %0D%0A My name is [BLANK] and I am inquiring about your [SERVICE]. %0D%0A %0D%0A Please contact me at [###-###-####] at your earliest convenience. %0D%0A %0D%0A Thank you for your time and consideration. %0D%0A %0D%0A Sincerely, %0D%0A [BLANK]"}`;
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
                <Transition animation = {animation[index%2]} duration = {1000+(index)*200} visible = {this.state.open}>
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


                <Grid.Column textAlign = {"center"} width = {16}>
                    <br>
                    </br>
                    <br></br>
                    <Button onClick = {() => this.openEmail()} size = {"big"} icon labelPosition='left' className = {styles.email}>
                        <Icon name='mail outline' />
                        professordevindra@gmail.com
                    </Button>

                </Grid.Column>
            </Grid.Row>
        )
    } 
}
