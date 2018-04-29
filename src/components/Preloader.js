import React, { Component } from 'react'

class Preloader extends Component {
  render() {
    return (
      <div className="transition-loader">
        <div className="transition-loader-inner">
          <label />
          <label />
          <label />
          <label />
          <label />
          <label />
        </div>
      </div>
    )
  }
}

export default Preloader
