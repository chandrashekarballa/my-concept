import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import homeFetchExampledata from './actions/Home.Action';
class HomeFetch extends Component {
    constructor(props){
     super(props);
    this.onLoad = this.onLoad.bind(this);

    
    }
     componentDidMount(){
        this.onFetch();
    }

    onFetch(){
      this.props.homeFetchExampledata(); 
        
    }

    onLoad(){
        window.location.reload();
    }

    render(){
        return(
            <div>
               <button onClick={()=>{this.onLoad()}}>Reload </button>
              </div>
        )
    }
}

function mapStateToProps(state){
   console.log("state from reducer",state)
   return {
       mainstate : state.mainfetch.data
   }
}

function mapDispatchToProps(dispatch){
    return {
        homeFetchExampledata: (data) => dispatch(homeFetchExampledata(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeFetch);




