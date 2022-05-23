import axios from "axios";
import { Component, React } from "react";

class Contact extends Component {

    constructor(props) {
        super(props)

        this.state = {
            curImg: ""
        }
    }

    /* The following code makes a call to the 
       Giphy API

    */

    handleRandomGif = async() => {
        const API_KEY = "V7Ts2WacqvQVNRvL6TZvNPWNttJXaF0U"
        const searchQuery = 'http://api.giphy.com/v1/gifs/random?api_key=' + API_KEY

        axios.get(searchQuery).then((req) => {
            console.log(req.data.data.images.original.url)
            const IMAGE = req.data.data.images.original.url

            this.setState({
                curImg: IMAGE
            })
        })
    } 

    removeGif = () => {
        this.setState({
            curImg: ""
        })
    }

    render() {
        return(
            <div>
                <br/>
                <h1> Want to contact me?</h1>
                <h2>Do so here!</h2> <br/>
                <p>Email me at <b>cruz.gonzalezgarcia@lc.cuny.edu</b></p>

                <h4>In the mean time want to get a random gif?</h4>
                <button onClick={this.handleRandomGif}>Random Gif!</button> <br/>
                <br/> <br/> <br/>
            
                { this.state.curImg === "" ? <> <p> Nothing to see here...</p> <br/> </>  :
                   <>
                    <img src={this.state.curImg} />
                    <br/>
                    <br/>
                   </> 
                }

                {
                    !(this.state.curImg === "") ? 
                    <>
                        <button onClick={this.removeGif}>Remove gif</button> <br/> <br/>
                    </> : null
                }
            </div> 
        )
    }
    
}

export default Contact; 
