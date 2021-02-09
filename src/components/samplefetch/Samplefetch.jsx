import React, {Component, Fragment} from 'react';

class Samplefetch extends Component {
    constructor(props){
     super(props);
      this.state ={
          loader: true,
          details: null
      }
    }
     componentDidMount(){
       
        const Url = 'http://localhost:8000/results';
        /* fetching data from json server */
       /*  steps to creat Json server */
       /* 
         1- creat a folder outof src 
         2- Inside that folder create a file with .json extension
         3- Run with this command in new terminal "npx json-server --watch DB/mock.json --port 8000" 
         4- react and json server has to run in different terminals 
       */
        const response =  fetch(Url)
        .then(res =>{
            return res.json();
        })
        .then(data =>{
            this.setState({details: data[0], loader: false})
        })
    }

    render(){
        return(
            <div>{
                
                this.state.loader ? 
                <div>Loading......</div> : 
                <div>
                <div>{this.state.details.gender}</div>
                <div>Hello</div>
                <div>{this.state.details.name.first}</div>
                <img src={this.state.details.picture.large}/>
                </div>
            }</div>
        )
    }
}

export default Samplefetch