import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'
import Articles from '../Articles/Articles'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      alerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = ({ heading, message, variant }) => {
    this.setState({ alerts: [...this.state.alerts, { heading, message, variant }] })
  }

  render () {
    const { alerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {alerts.map((alert, index) => (
          <AutoDismissAlert
            key={index}
            heading={alert.heading}
            variant={alert.variant}
            message={alert.message}
          />
        ))}
        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />
          <Route exact path='/' render={() => (
            <Articles alert={this.alert} articleType='top-headlines?' country='us' setUser={this.setUser} />
          )} />
          <Route exact path='/austrailia' render={() => (
            <Articles alert={this.alert} articleType='top-headlines?' country='au' setUser={this.setUser} />
          )} />
          <Route exact path='/canada' render={() => (
            <Articles alert={this.alert} articleType='top-headlines?' country='ca' setUser={this.setUser} />
          )} />
          <Route exact path='/france' render={() => (
            <Articles alert={this.alert} articleType='top-headlines?' country='fr' setUser={this.setUser} />
          )} />
          <Route exact path='/germany' render={() => (
            <Articles alert={this.alert} articleType='top-headlines?' country='de' setUser={this.setUser} />
          )} />
          <Route exact path='/hongkong' render={() => (
            <Articles alert={this.alert} articleType='top-headlines?' country='hk' setUser={this.setUser} />
          )} />
          <Route exact path='/uk' render={() => (
            <Articles alert={this.alert} articleType='top-headlines?' country='gb' setUser={this.setUser} />
          )} />
          <Route exact path='/us-business' render={() => (
            <Articles alert={this.alert} articleType='top-headlines?' country='us' setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />
        </main>
      </Fragment>
    )
  }
}

export default App
