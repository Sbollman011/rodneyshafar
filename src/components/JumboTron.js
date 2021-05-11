import React, {Component} from 'react';
import './JumboTron.css';

class JumboTron extends Component{
    constructor(props) {
        super(props);
        this.state = {
   
        }
    };  

        render(){

            return(
            <div className="jumbotron" >
                <div className=" headerText">Hello!</div>
                    <p className="lead pText">Welcome to RodneyShafar.com</p>

                    <p className="lead pText">
                        <a className="btn btn-primary btn-lg" href="#" role="button">Check me out!</a>
                    </p>
            </div>
            );
        }

}

export default JumboTron;