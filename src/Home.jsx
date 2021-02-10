import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import homeFetchExampledata from './actions/Home.Action';
class Home extends Component {
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

function mapDispatchToProps(dispatch){
    return {
        homeFetchExampledata: () => homeFetchExampledata()
    }
}

export default connect(mapDispatchToProps)(Home);



