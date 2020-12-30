import React from 'react';
class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: '',
            password: ''
        }
    }
    convertToUpperCase =(input)=>{
         return input.toUpperCase();
    }
    handleInputChange = (event) => {
        const value = this.convertToUpperCase(event.target.value);
        const user = { [event.target.name]: value };
       
        this.setState(
            {
               
               ...user
               
            }
        )
    }
    render() {
        {console.log(this.state)}
        return (
            <form className="login">
                <label>Username</label>
                <input id="userName" onChange={this.handleInputChange} name="userName" type="text"/>
                <label>Password</label>
                <input id='password' onChange={this.handleInputChange}
                    name='password' type='password' />
                <button>Submit</button>
            </form>
            

        )
    }
}
export default Login;