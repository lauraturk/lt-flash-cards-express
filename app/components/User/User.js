import React, {Component} from 'react'

export default class User extends Component{
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password: '',
    }
  }

  checkSignIn () {
    console.log('woot')
  }

  handleUserSubmit () {

  }

  render() {
    return (
    <section>
      <label className={this.checkSignIn()}>
        name
        <input type="text" value={this.state.name} onChange={(e) => this.setState({name : e.target.value})} />
      </label>
      <label className="user">
        email
        <input type="text" value={this.state.email} onChange={(e) => this.setState({email : e.target.value})} />
      </label>
      <label>
        password
        <input type="text" value={this.state.password} onChange={(e) => this.setState({password : e.target.value})} />
      </label>
      <label>
        password
        <input type="text" value={this.state.password} onChange={(e) => this.setState({password : e.target.value})} />
      </label>
      <input type="submit" onClick={this.handleUserSubmit(this.state)}/>
    </section>
    )
  }
}
