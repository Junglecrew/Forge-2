import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Preloader from './Preloader'

class News extends Component {
  static propTypes = {
    news: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    newsSaga: PropTypes.func,
  }

  componentDidMount() {
    const { newsSaga } = this.props
    newsSaga()
  }

  getBody() {
    const { news, isFetching } = this.props
    const allNews =
      isFetching === false ? (
        news.map(item => (
          <div className="news__item" key={item.id}>
            <h2>{item.title}</h2>
            <div>{item.text}</div>
          </div>
        ))
      ) : (
        <div>
          <Preloader />
        </div>
      )
    return allNews
  }

  render() {
    const { isFetching, news } = this.props
    return (
      <div>
        {this.getBody()}
        {!isFetching && <div className="news-total">Всего новостей: {news.length}</div>}
      </div>
    )
  }
}

export default News
