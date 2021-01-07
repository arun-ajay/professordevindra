import React,{Component} from 'react';
import styles from "pages/Landing/landing.module.scss";

import {Grid,Image,Transition,Icon,Container,Button} from 'semantic-ui-react'

import laptop from "pages/Landing/assets/laptop.png"

import {studentTestimonial} from "pages/Landing/data"

import {parentTestimonial} from "pages/Landing/data"


import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
 



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
    

    openEmail = () => {
        window.location.href = `mailto:${"professordevindra@gmail.com"}?subject=${"Requesting for Consultation"}&body=${"Dear Professor Devindra, %0D%0A %0D%0A My name is [BLANK] and I am inquiring about your [SERVICE]. %0D%0A %0D%0A Please contact me at [###-###-####] at your earliest convenience. %0D%0A %0D%0A Thank you for your time and consideration. %0D%0A %0D%0A Sincerely, %0D%0A [BLANK]"}`;
    }


  
    render () { 
        const slideStay = 10000;

        const leftColumnAnimation = "fade right";
        const rightColumnAnimation = "fade left";
        const leftRightColumnAnimationSpeed = 1000;

        var studentTestimonialsArray = studentTestimonial.map((data,index) => {
            return <Slide index = {index}>
            <Container textAlign = {"justified"} fluid className = {styles.philHero} >
                <i className = {styles.testimonial}>
                    "{data.testimonial}"                             
                </i>
                <br></br>
            </Container>
            <Container textAlign = {"right"} fluid className = {styles.philHero} >
                <i className = {styles.testimonial}>
                    {data.name}
                </i>
            </Container>

            </Slide>
        })
        var parentTestimonialsArray = parentTestimonial.map((data,index) => {
            return <Slide index = {index}>
            <Container textAlign = {"justified"} fluid className = {styles.philHero} >
                <i className = {styles.testimonial}>
                    "{data.testimonial}"                             
                </i>
                <br></br>
            </Container>
            <Container textAlign = {"right"} fluid className = {styles.philHero} >
                <i className = {styles.testimonial}>
                    {data.name}
                </i>
            </Container>

            </Slide>
        })


        var mobileStudentTestimonialsArray = studentTestimonial.map((data,index) => {
            return <Slide index = {index}>
            <Container textAlign = {"justified"} fluid className = {styles.philHero} >
                <i className = {styles.mobileTestimonial}>
                    "{data.testimonial}"                             
                </i>
                <br></br>
            </Container>
            <Container textAlign = {"right"} fluid className = {styles.philHero} >
                <i className = {styles.mobileTestimonial}>
                    {data.name}
                </i>
            </Container>

            </Slide>
        })

        var mobileParentTestimonialsArray = parentTestimonial.map((data,index) => {
            return <Slide index = {index}>
            <Container textAlign = {"justified"} fluid className = {styles.philHero} >
                <i className = {styles.mobileTestimonial}>
                    "{data.testimonial}"                             
                </i>
                <br></br>
            </Container>
            <Container textAlign = {"right"} fluid className = {styles.philHero} >
                <i className = {styles.mobileTestimonial}>
                    {data.name}
                </i>
            </Container>

            </Slide>
        })


        return(
            <Grid.Row className = {styles.customRow}>
                <Grid.Column only = {"computer"} stretched  width = {4}>
                    <Grid className = {styles.customGrid} >
                        <Grid.Row verticalAlign = {"middle"}>
                            <Grid.Column textAlign = {"center"} width = {16}>
                            <Transition animation = {leftColumnAnimation} duration = {leftRightColumnAnimationSpeed} visible = {this.state.open}>
                                <Button onClick = {() => this.openEmail()} size = {"big"} icon labelPosition='left' className = {styles.email}>
                                    <Icon name='mail outline' />
                                    professordevindra@gmail.com
                                </Button>
                            </Transition>

                            </Grid.Column>

                        </Grid.Row>


                        <Grid.Row verticalAlign = {"bottom"}>

                            <Grid.Column textAlign = {"center"} stretched width = {16}>
                            <Transition animation = {leftColumnAnimation} duration = {leftRightColumnAnimationSpeed} visible = {this.state.open}>
                                <span>
                                        <div className = {styles.testimonialTagline}>Parent Testimonials</div>
                                        <CarouselProvider         
                                            naturalSlideWidth={100}
                                            isIntrinsicHeight = {true}
                                            interval = {slideStay}
                                            isPlaying = {true}
                                            totalSlides={parentTestimonial.length} className = {styles.carousel}>
                                        <Slider>
                                            {parentTestimonialsArray}
                                        </Slider>

                                        </CarouselProvider>
                                </span>
                            </Transition>
                            </Grid.Column>

                        </Grid.Row>

                    </Grid>

                </Grid.Column>
                <Grid.Column only = {"computer"}  textAlign = {"center"} width = {8} className = {styles.customColumn}>
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
                        <Transition animation = {"fade down"} duration = {1250} visible = {this.state.open}>
                        <span className = {styles.tagline}>
                            Certified college professor with <b className = {styles.certified}>30 years</b> of tutorial experience in multiple content areas
                            <br></br><br></br>
                        </span>
                        </Transition>
                        <Transition animation = {"fade down"} duration = {1400} visible = {this.state.open}>
                        <span className = {styles.quote}>
                            <Container textAlign = {"justified"} fluid className = {styles.philHero} >
                                <i className = {styles.phil}>
                                "I believe that the teaching/learning process is an interactive, engaging experience that begins with providing content knowledge aligned to the common core standards integrated with patience, understanding and care. By extension, it is an opportunity to mentor and guide rather than to lead the student. It is about building relationships with students to help them realize their full potential while laying a solid foundation for their future."
                                </i>
                                <br></br>
                            </Container>
                            <Container textAlign = {"right"} fluid className = {styles.philHero} >
                                <i className = {styles.phil}>
                                    - Professor Devindra
                                </i>
                            </Container>

                        </span>
                        </Transition>
                    </div>
                </Grid.Column>
                <Grid.Column only = {"computer"} stretched  width = {4}>
                    <Grid className = {styles.customGrid} >
                        <Grid.Row verticalAlign = {"top"}>
                            <Grid.Column width = {16}>
                                <Transition animation = {rightColumnAnimation} duration = {leftRightColumnAnimationSpeed} visible = {this.state.open}>
                                    <Image verticalAlign = {"middle"} size = {"large"} src = {laptop} className = {styles.booksImage}/>
                                </Transition>
                            </Grid.Column>

                        </Grid.Row>

                        <Grid.Row verticalAlign = {"bottom"} >
                            <Grid.Column textAlign = {"center"} stretched width = {16}>
                                <Transition animation = {rightColumnAnimation} duration = {leftRightColumnAnimationSpeed} visible = {this.state.open}>
                                    <span>
                                        <div className = {styles.testimonialTagline}>Student Testimonials</div>
                                        <CarouselProvider         
                                            naturalSlideWidth={100}
                                            isIntrinsicHeight = {true}
                                            interval = {slideStay}
                                            isPlaying = {true}
                                            totalSlides={studentTestimonial.length} className = {styles.carousel}>
                                        <Slider>
                                            {studentTestimonialsArray}
                                        </Slider>

                                        </CarouselProvider>
                                    </span>
                                </Transition>
                            </Grid.Column>

                        </Grid.Row>

                    </Grid>

                </Grid.Column>




                <Grid.Column only = {"tablet"}  textAlign = {"center"} width = {16} className = {styles.customColumn}>
                    <div className = {styles.landingHero}>
                        

                        <Transition animation = {"fade down"} duration = {500} visible = {this.state.open}>
                        
                        <span className = {styles.tabletTagline}>
                        
                        <br></br>
                            Private, one-to-one tutoring using an online or in-person or hybrid learning management system
                            <br></br><br></br>
                        </span>
                        </Transition>
                        <Transition animation = {"fade down"} duration = {1000} visible = {this.state.open}>
                        <span className = {styles.tabletTagline}>
                            Professor Devindra
                            <br></br><br></br>
                        </span>
                        </Transition>
                        <Transition animation = {"fade down"} duration = {1250} visible = {this.state.open}>
                        <span className = {styles.tabletTagline}>
                            Certified college professor with <b className = {styles.certified}>30 years</b> of tutorial experience in multiple content areas
                            <br></br><br></br>
                        </span>
                        </Transition>
                        <Transition animation = {"fade down"} duration = {1400} visible = {this.state.open}>
                        <span className = {styles.quote}>
                            <Container textAlign = {"justified"} fluid className = {styles.philHero} >
                                <i className = {styles.tabletPhil}>
                                "I believe that the teaching/learning process is an interactive, engaging experience that begins with providing content knowledge aligned to the common core standards integrated with patience, understanding and care. By extension, it is an opportunity to mentor and guide rather than to lead the student. It is about building relationships with students to help them realize their full potential while laying a solid foundation for their future."
                                </i>
                                <br></br>
                            </Container>
                            <Container textAlign = {"right"} fluid className = {styles.philHero} >
                                <i className = {styles.phil}>
                                    - Professor Devindra
                                </i>
                            </Container>

                        </span>
                        </Transition>
                    </div>
                </Grid.Column>

                <Grid.Column only = {"tablet"} stretched  width = {8}>
                    <Grid className = {styles.customGrid} >

                        <Grid.Row verticalAlign = {"bottom"} >
                            <Grid.Column textAlign = {"center"} stretched width = {16}>
                                <Transition animation = {leftColumnAnimation} duration = {leftRightColumnAnimationSpeed} visible = {this.state.open}>
                                    <span>
                                        <div className = {styles.tabletTestimonialTagline}>Parent Testimonials</div>
                                        <CarouselProvider         
                                            naturalSlideWidth={100}
                                            isIntrinsicHeight = {true}
                                            interval = {slideStay}
                                            isPlaying = {true}
                                            totalSlides={parentTestimonial.length} className = {styles.tabletCarousel}>
                                        <Slider>
                                            {parentTestimonialsArray}
                                        </Slider>

                                        </CarouselProvider>
                                    </span>
                                </Transition>
                            </Grid.Column>

                        </Grid.Row>

                    </Grid>

                </Grid.Column>

                <Grid.Column only = {"tablet"} stretched  width = {8}>
                    <Grid className = {styles.customGrid} >
                        <Grid.Row verticalAlign = {"bottom"} >
                            <Grid.Column textAlign = {"center"} stretched width = {16}>
                                <Transition animation = {rightColumnAnimation} duration = {leftRightColumnAnimationSpeed} visible = {this.state.open}>
                                <span>
                                        <div className = {styles.tabletTestimonialTagline}>Student Testimonials</div>
                                        <CarouselProvider         
                                            naturalSlideWidth={100}
                                            isIntrinsicHeight = {true}
                                            interval = {slideStay}
                                            isPlaying = {true}
                                            totalSlides={studentTestimonial.length} className = {styles.tabletCarousel}>
                                        <Slider>
                                            {studentTestimonialsArray}
                                        </Slider>

                                        </CarouselProvider>
                                    </span>
                                </Transition>
                            </Grid.Column>

                        </Grid.Row>

                    </Grid>
                </Grid.Column>

                <Grid.Column only = {"tablet"} textAlign = {"center"} width = {16}>
                    <br></br>
                    <Button onClick = {() => this.openEmail()} size = {"big"} icon labelPosition='left' className = {styles.email}>
                        <Icon name='mail outline' />
                        professordevindra@gmail.com
                    </Button>

                </Grid.Column>




                <Grid.Column only = {"mobile"}  textAlign = {"center"} width = {16} className = {styles.customColumn}>
                    <div className = {styles.landingHero}>
                        

                        <Transition animation = {"fade down"} duration = {500} visible = {this.state.open}>
                        
                        <span className = {styles.mobileTagline}>
                        
                        <br></br>
                            Private, one-to-one tutoring using an online or in-person or hybrid learning management system
                            <br></br><br></br>
                        </span>
                        </Transition>
                        <Transition animation = {"fade down"} duration = {1000} visible = {this.state.open}>
                        <span className = {styles.mobileTagline}>
                            Professor Devindra
                            <br></br><br></br>
                        </span>
                        </Transition>
                        <Transition animation = {"fade down"} duration = {1250} visible = {this.state.open}>
                        <span className = {styles.mobileTagline}>
                            Certified college professor with <b className = {styles.certified}>30 years</b> of tutorial experience in multiple content areas
                            <br></br><br></br>
                        </span>
                        </Transition>
                        <Transition animation = {"fade down"} duration = {1400} visible = {this.state.open}>
                        <span className = {styles.quote}>
                            <Container textAlign = {"justified"} fluid className = {styles.philHero} >
                                <i className = {styles.mobilePhil}>
                                "I believe that the teaching/learning process is an interactive, engaging experience that begins with providing content knowledge aligned to the common core standards integrated with patience, understanding and care. By extension, it is an opportunity to mentor and guide rather than to lead the student. It is about building relationships with students to help them realize their full potential while laying a solid foundation for their future."
                                </i>
                                <br></br>
                            </Container>
                            <Container textAlign = {"right"} fluid className = {styles.philHero} >
                                <i className = {styles.mobilePhil}>
                                    - Professor Devindra
                                </i>
                            </Container>

                        </span>
                        </Transition>
                    </div>
                </Grid.Column>

                <Grid.Column only = {"mobile"} stretched  width = {8}>
                    <Grid className = {styles.customGrid} >

                        <Grid.Row verticalAlign = {"bottom"} >
                            <Grid.Column textAlign = {"center"} stretched width = {16}>
                                <Transition animation = {"fade right"} duration = {leftRightColumnAnimationSpeed} visible = {this.state.open}>
                                    <span>
                                        <div className = {styles.mobileTestimonialTagline}>Parent Testimonials</div>
                                        <CarouselProvider         
                                            naturalSlideWidth={100}
                                            isIntrinsicHeight = {true}
                                            interval = {slideStay}
                                            isPlaying = {true}
                                            totalSlides={parentTestimonial.length} className = {styles.mobileCarousel}>
                                        <Slider>
                                            {mobileParentTestimonialsArray}
                                        </Slider>

                                        </CarouselProvider>
                                    </span>
                                </Transition>
                            </Grid.Column>

                        </Grid.Row>

                    </Grid>

                </Grid.Column>

                <Grid.Column only = {"mobile"} stretched  width = {8}>
                    <Grid className = {styles.customGrid} >
                        <Grid.Row verticalAlign = {"bottom"} >
                            <Grid.Column textAlign = {"center"} stretched width = {16}>
                                <Transition animation = {"fade left"} duration = {leftRightColumnAnimationSpeed} visible = {this.state.open}>
                                    <span>
                                        <div className = {styles.mobileTestimonialTagline}>Student Testimonials</div>
                                        <CarouselProvider         
                                            naturalSlideWidth={100}
                                            isIntrinsicHeight = {true}
                                            interval = {slideStay}
                                            isPlaying = {true}
                                            totalSlides={studentTestimonial.length} className = {styles.mobileCarousel}>
                                        <Slider>
                                            {mobileStudentTestimonialsArray}
                                        </Slider>

                                        </CarouselProvider>
                                    </span>
                                </Transition>
                            </Grid.Column>

                        </Grid.Row>

                    </Grid>
                </Grid.Column>

                <Grid.Column only = {"mobile"} textAlign = {"center"} width = {16}>
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
