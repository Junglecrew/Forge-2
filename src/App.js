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
  static propTypes = {
    id: propTypes.number,
  }

  render() {
    return (
      <CssBaseline>
        <div>
          <header className="header">
            <div className="top-menu">
              <LinkBtn to="/" label={'Главная'} />
              <LinkBtn to="/profile" label={'Профиль'} />
              <LinkBtn to="/news" label={'Новости'} />
              <LinkBtn to="/abra-kadabra" label={'404'} />
              <LinkBtn to="/login" label={this.props.id ? 'Выйти' : 'Войти'} />
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
          </div>
        </div>
      </CssBaseline>
    )
  }
}

export default withRouter(connect(mapStateToProps)(App))

// const App = () => (
//   <CssBaseline>
//     <div>
//       <header className="header">
//         <div className="top-menu">
//           <LinkBtn to="/" label={'Главная'} />
//           <LinkBtn to="/profile" label={'Профиль'} />
//           <LinkBtn to="/news" label={'Новости'} />
//           <LinkBtn to="/abra-kadabra" label={'404'} />
//           <LinkBtn to="/login" label={'Логин'} />
//         </div>
//       </header>

//       <hr />
//       <div className="content">
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route path="/news" component={NewsContainer} />
//           <Route path="/login" component={LoginContainer} />
//           <PrivateRoute path="/profile" component={ProfileContainer} />
//           <Route component={NotFound} />
//         </Switch>
//       </div>
//     </div>
//   </CssBaseline>
// )

// export default App
