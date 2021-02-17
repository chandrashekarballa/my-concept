import react, { Component } from 'react';
import { connect } from 'react-redux';
import loginCheck from '../src/actions/Login.Action'

class LoginAuthentication extends Component {

    constructor(props) {
        super(props);
        this.state ={
              
            
        }

    }
    handleLogin = (event) =>{
     const {name , value , id } = event.target; 
     const loginid = document.getElementById("loginid").value;
      const password = document.getElementById("password").value;
      this.props.loginCheck(loginid, password);
}
    
    render() {


        return (
            <div>
                <h3>Login</h3>
               
                <label>Login</label>
                <input type="text" id="loginid" name="loginid"  placeholder="Login ID" /><br/>
                <label>Password</label>
                <input type="password" id="password" name="password"  placeholder="Password"/><br/>
                <button type="button" className="btn btn-primary" onClick={(e) => this.handleLogin(e)}>Submit</button>
            </div>

        );

    }
}

function mapStateToProps(state){
    console.log("states from reducer",state);
    console.log("success",state.logindetails.Spinner);
    return{
     logincredentials: state.logindetails.data,
    

    }   
}

function mapDispatchToProps(dispatch){
    return {
        loginCheck: (loginid, password ) => dispatch(loginCheck(loginid,password)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (LoginAuthentication);