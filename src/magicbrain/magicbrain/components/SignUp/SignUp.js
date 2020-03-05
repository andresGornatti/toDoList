
import React from "react";
//import "./SignIn.css";

class SignUp extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      signUpName: '',
      signUpEmail: '',
      signUpPass: '',            
    }
  }

  settingName = (event) => {
    this.setState({signUpName:event.target.value});
  }
  settingEmail = (event) => {
    this.setState({signUpEmail:event.target.value});
  }
  settingPass = (event) => {
    this.setState({signUpPass:event.target.value});
  }

  onSignUp = () => {
    fetch('https://smart-brainapi.herokuapp.com/signup', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: this.state.signUpName,
        email: this.state.signUpEmail,        
        pass: this.state.signUpPass        
        })
      })
      .then(response=>response.json())
      .then(data=>{
        if(data.id){
          this.props.setUser(data)
          this.props.setRoute('home')
        }
      })
  }

  render(){
    const {setRoute,
   //  isSignedIn
   } = this.props;
    return (
      <div className="br3 ba b--black-10 mv4 w-100 w-50-m w-30-l mw6 shadow-5 center">
      <div className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Crear cuenta</legend>
            <div className="mt3 tl">
              <label className="pl1 db fw6 lh-copy f6" htmlFor="email-address">Nombre</label>
              <input
              onChange={this.settingName}
              className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name"/>
            </div>
            <div className="mt3 tl">
              <label className="pl1 db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input
              onChange={this.settingEmail}
              className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
            </div>
            <div className="mv3 tl">
              <label className="pl1 db fw6 lh-copy f6" htmlFor="password">Contraseña</label>
              <input
              onChange={this.settingPass}
              className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
            </div>
          </fieldset>
          <div className="">
            <input onClick={this.onSignUp} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Registrarse"/>
          </div>
          <div className="lh-copy mt3">
            <p onClick={()=>setRoute('signIn')} href="#0" className="f6 link dim black db pointer">Iniciar Sesión</p>
          </div>
        </div>
      </div>  
      </div>
    )
  }
}

export default SignUp;
