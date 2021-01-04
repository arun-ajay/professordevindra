import React,{Component} from 'react';
import styles from "pages/Landing/landing.module.scss";

import {Grid,Image,Transition,Header,Container} from 'semantic-ui-react'

import books from "pages/Landing/assets/laptop.png"

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


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
        return(
            <Grid.Row className = {styles.customRow}>
                <Grid.Column width = {4}/>
                <Grid.Column  textAlign = {"center"} width = {8} className = {styles.customColumn}>
                    <div className = {styles.landingHero}>
                        

                        <Transition animation = {"fade down"} duration = {500} visible = {this.state.open}>
                        
                        <span className = {styles.tagline}>
                        
                        <br></br>
                            Private, one-to-one tutoring using an online or in-person or hybrid learning management system
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
                            Certified college professor with <b className = {styles.certified}>30 years</b> of tutorial experience in multiple content areas
                            <br></br><br></br>
                        </span>
                        </Transition>
                        <Transition animation = {"fade down"} duration = {1500} visible = {this.state.open}>
                        <Container fluid className = {styles.quote}>
                            <span className = {styles.phil}>
                                <i>
                                "I believe that the teaching/learning process is an interactive, engaging experience that begins with providing content knowledge aligned to the common core standards integrated with patience, understanding and care. By extension, it is an opportunity to mentor and guide rather than to lead the student. It is about building relationships with students to help them realize their full potential while laying a solid foundation for their future."
                                </i>
                                <br></br>
                            </span>
                            <span className = {styles.philAuthor}>
                                <i>
                                    - Professor Devindra
                                </i>
                            </span>
                        </Container>
                        </Transition>
                    </div>
                </Grid.Column>
                <Grid.Column stretched  width = {4}>
                    <Grid className = {styles.customGrid} >
                        <Grid.Row verticalAlign = {"top"}>

                            <Grid.Column width = {16}>
                                <Image verticalAlign = {"middle"} size = {"large"} src = {books} className = {styles.booksImage}/>

                            </Grid.Column>

                        </Grid.Row>
                        <Grid.Row>

                        </Grid.Row>

                        <Grid.Row verticalAlign = {"bottom"}>

                            <Grid.Column width = {16}>
                            {/* <Carousel>
                <div>
                    <img src = {books}/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel> */}
                            </Grid.Column>

                        </Grid.Row>

                    </Grid>

                </Grid.Column>
            </Grid.Row>
        )
    } 
}
