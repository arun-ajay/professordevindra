import React,{Component} from 'react';
import styles from  "components/header/header.module.scss"


import {Link} from "react-router-dom";

import {Grid,Menu,Button,Card, Image, Segment, TransitionablePortal,Icon} from 'semantic-ui-react'

import {menuJson} from "./data"


export default class SiteHeader extends Component{
    state = {
        activeItem : null
    }
    
    visitAuth = (url) => {
        console.log("url",url)
        window.location.assign(url)
    }

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name });
        console.log("redirecting");
    }


    openEmail = () => {
        window.location.href = `mailto:${"professordevindra@gmail.com"}?subject=${"Request to Discuss Tutorial Services"}&body=${"Dear Professor Devindra, %0D%0A %0D%0A My name is [BLANK] and I am inquiring about your [SERVICE]. %0D%0A %0D%0A Please contact me at [###-###-####] at your earliest convenience. %0D%0A %0D%0A Thank you for your time and consideration. %0D%0A %0D%0A Sincerely, %0D%0A [BLANK]"}`;
    }

    componentDidMount(){
        this.setState({open: true})
        var path = null
        if (window.location.pathname === "/"){
            path = "Home"
        }
        else if (window.location.pathname === "/services"){
            path = "Services"
        }
        this.setState({
            activeItem: path
        })
    }
    render () { 
        const {activeItem} = this.state
        var menuArray = menuJson.map((data,index) => {
            if (data.hasOwnProperty("name")){
                return <Menu.Item
                name = {data.name}
                as = {Link}
                to = {data.to}
                active = {activeItem === data.name}
                onClick = {this.handleItemClick}>
                    {data.display}
                </Menu.Item>
            }
            else{
                return <Menu.Item header>{data.display}</Menu.Item>
            }
        })

        menuArray.push(
            <Menu.Item className = {styles.customMenuContact} name = {"Contact"} onClick = {() => this.openEmail()}> <span><Icon name = {"mail outline"}/> Email Me: professordevindra@gmail.com </span> </Menu.Item>
        )
        


        
        return(
            <Grid.Row className = {styles.customRow}>
                <Grid.Column textAlign = {"center"} width = {16} className = {styles.customColumn}>
                    <Menu size = {"huge"} compact inverted borderless stackable className = {styles.customMenu}>
                        {menuArray}
                    </Menu>
                </Grid.Column>
            </Grid.Row>
        )
    } 
}
