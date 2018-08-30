import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import propTypes from 'prop-types'
import PrivateRoute from './containers/PrivateRoute'
import LoginContainer from './containers/LoginContainer'
import LinkBtn from './components/LinkBtn'
import Home from './components/Home'
import ProfileContainer from './containers/ProfileContainer'
import NewsContainer from './containers/NewsContainer'
import NotFound from './components/NotFound'
import LogOutModal from './components/LogOutModal'

import { logOut } from './reducers/session/actions'

import './App.css'
import './assets/fonts/fonts.css'
import CssBaseline from 'material-ui/CssBaseline'

import { Component } from 'react'

const mapStateToProps = state => {
  return {
    id: state.session.id,
  }
}

class App extends Component {
  state = {
    modalVisible: false,
  }

  static propTypes = {
    id: propTypes.number,
    logOut: propTypes.func,
    location: propTypes.object,
  }

  handleModal = () => {
    this.setState({ modalVisible: !this.state.modalVisible })
  }

  render() {
    const { modalVisible } = this.state
    const { location, logOut } = this.props
    return (
      <CssBaseline>
        <div>
          <header className="header">
            <div className="top-menu">
              <LinkBtn to="/" label={'Главная'} />
              <LinkBtn to="/profile" label={'Профиль'} />
              <LinkBtn to="/news" label={'Новости'} />
              <LinkBtn to="/abra-kadabra" label={'404'} />
              {!this.props.id ? (
                <LinkBtn to="/login" label="Войти" />
              ) : (
                <LinkBtn to={location.pathname} label="Выйти" showModal={this.handleModal} />
              )}
            </div>
          </header>
          <hr />
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/news" component={NewsContainer} />
              <Route path="/login" component={LoginContainer} />
              <PrivateRoute path="/profile" component={ProfileContainer} />
              <Route component={NotFound} />
            </Switch>
          </div>{' '}
          {modalVisible && <LogOutModal logOut={logOut} showModal={this.handleModal} modalVisible={modalVisible} />}
        </div>
      </CssBaseline>
    )
  }
}

export default withRouter(connect(mapStateToProps, { logOut })(App))
