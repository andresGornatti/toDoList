
import React from "react";

class SignIn extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      signInEmail : '',
      signInPass : ''
    }
  }

  gettingEmail = (event) => {
    this.setState({signInEmail:event.target.value});
  }
  gettingPass = (event) => {
    this.setState({signInPass:event.target.value});
  }
  signIn = () => {
    fetch('https://smart-brainapi.herokuapp.com/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        pass: this.state.signInPass
      })
    })
    .then(response=>response.json())
    .then(data=>{
      if(data.id){
      this.props.setUser(data)
      this.props.setRoute('home');
      }
    })
  }

  render(){
  const {setRoute,
   //isSignedIn
 } = this.props;
    return (
      <div className="br3 ba b--black-10 mv4 w-100 w-50-m w-30-l mw6 shadow-5 center">
      <div className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Iniciar sesión</legend>
            <div className="mt3 tl">
              <label className="pl1 db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input 
              onChange={this.gettingEmail}
              className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
            </div>
            <div className="mv3 tl">
              <label className="pl1 db fw6 lh-copy f6" htmlFor="password">Contraseña</label>
              <input 
              onChange={this.gettingPass}
              className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
            </div>
          </fieldset>
          <div className="">
            <input onClick={()=>this.signIn()} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Ingresar"/>
          </div>
          <div className="lh-copy mt3">
            <p onClick={()=>setRoute('signUp')} href="#0" className="f6 link dim black db pointer">Registrarse</p>
          </div>
        </div>
      </div>  
      </div>
    );
  }
}

export default SignIn;
