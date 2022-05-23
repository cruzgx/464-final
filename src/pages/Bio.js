import React from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import portrait from '../styling/portrait.jpg'
import Image from 'react-bootstrap/Image'

const Bio = () => {

    return(
        // <div>
        //     <h2>A little more on Cruz</h2>
        //     <p> Hello world this is a bio page!</p>
        // </div>
            

        <>
            <Container>
                <Row>
                    <Col>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                        <h2>A little more on Cruz</h2>
                        <br/>

                        <p>Hi there! My name is Cruz and I’ll be interning at Clever this summer. I’m Mexican and I’m also an NYC native who enjoys going out for walks around the city, plants, and trying out new foods!</p>
                        <br/>
                        <p>I’m someone who really enjoys the outdoors. My favorite drinks include boba and green tea and some of my favorite cuisines are Korean, Indian and Mexican.</p>
                        <br/>
                        <p>In my spare time I love to read, watch videos on photography, wellness, self care, vlogs and listen to music.</p>
                        <br/>
                         
                        <p>
                          <i><a href="https://www.linkedin.com/in/cruz-gonzalez/">LinkedIn</a></i><i> and </i>
                          <i><a href="https://github.com/cruzgx">Github</a></i>
                        </p>
                    </Col>
                    <Col>
                        {/* <img src={portrait} className="fluid rounded" /> */}
                        <Image src={portrait} fluid rounded="true" responsive/>
                    </Col>
                </Row>
            </Container>
        </>
    )
    
}

export default Bio;