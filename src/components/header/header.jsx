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
        
        


        
        return(
            <Grid.Row className = {styles.customRow}>
                <Grid.Column textAlign = {"center"} width = {16} className = {styles.customColumn}>
                    <Menu compact inverted borderless stackable className = {styles.customMenu}>
                        {menuArray}
                    </Menu>
                </Grid.Column>
            </Grid.Row>
        )
    } 
}
