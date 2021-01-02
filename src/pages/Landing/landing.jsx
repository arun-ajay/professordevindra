import React,{Component} from 'react';
import styles from "pages/Landing/landing.module.scss";

import {Grid,Image,Transition,Header,Container} from 'semantic-ui-react'

import books from "pages/Landing/assets/books.png"


export default class Landing extends Component{
    state = {

        typeIndex : 0,
        open: false
    }

    componentDidMount(){
        this.setState({
            open: true
            }
        )
    }
    


  
    render () { 
        
        var tutoringTypes = ["One to One", "Face to Face", "Hybrid"]
        return(
            <Grid.Row className = {styles.customRow}>
                <Grid.Column width = {2}/>
                <Grid.Column  textAlign = {"center"} width = {12} className = {styles.customColumn}>
                    <div className = {styles.landingHero}>
                        

                        <Transition animation = {"fade down"} duration = {500} visible = {this.state.open}>
                        
                        <span className = {styles.tagline}>
                        <Image verticalAlign = {"middle"} size = {"medium"} src = {books} className = {styles.booksImage}/>
                        <br></br>
                            Private, One to One Tutoring using an online, face to face, or hybrid management learning system
                            <br></br><br></br>
                        </span>
                        </Transition>
                        <Transition animation = {"fade down"} duration = {1000} visible = {this.state.open}>
                        <span className = {styles.tagline}>
                            Professor Devindra
                            <br></br><br></br>
                        </span>
                        </Transition>
                        <Transition animation = {"fade down"} duration = {1500} visible = {this.state.open}>
                        <span className = {styles.tagline}>
                            <b className = {styles.certified}>Certified</b>, experienced college professor with <b className = {styles.certified}>30 years</b> of tutorial services in multiple content areas
                            <br></br><br></br>
                        </span>
                        </Transition>
                        <Transition animation = {"fade down"} duration = {1500} visible = {this.state.open}>
                        <span className = {styles.phil}>
                        <i>
                        Professor Devindra believes the teaching/learning process is an interactive, engaging experience that begins with providing content knowledge aligned to the common core standards integrated with patience, understanding and care. By extension, it is an opportunity to mentor and guide rather than to lead the student. It is about building relationships with students to help them realize their full potential while laying a solid foundation for their future. 
                        </i>
                        </span>
                        </Transition>
                    </div>
                </Grid.Column>
                <Grid.Column width = {2}/>
                <Grid.Column width = {16} textAlign = {"center"}>
                    testimonial
                </Grid.Column>
            </Grid.Row>
        )
    } 
}
