import React, {Component} from 'react';
import JumboTron from '../components/JumboTron'


class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
   
        }
    };  

        render(){

            return(
              <div>
              <JumboTron></JumboTron>
              
              </div>
            );
        }

}

export default Home;