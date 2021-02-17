import react, { Component, Fragment } from 'react';
import Samplefetch from '../src/components/samplefetch/Samplefetch';
import RichTextEditor from '../src/components/richtexteditor/RichTextEditor';
import LoginAuthentication from './LoginAuthentication'
import { connect } from 'react-redux';
class Home extends Component {

    constructor(props) {
        super(props);

    }

    render() {
   const {  Loading}  = this.props;
        if (this.props.loginStatus) {
           
            return (
                <Fragment>
                {Loading ?  
                    <div className="spinner-border text-info"></div>:
                 
                    <div>
                    
                <Samplefetch />
                <RichTextEditor />
              </div>

                }
                </Fragment>
                
                
           )
        }

        return (
            <div>
                <LoginAuthentication />
                
            </div>

        );
    }
}

function mapStateToProps(state) {
    console.log("state from reducer", state)
    return {
        mainstate: state.mainfetch.data,
        loginStatus: state.logindetails.LoginSuccessfull,
        Loading: state.logindetails.Spinner
    }
}


export default connect(mapStateToProps)(Home);