import React from 'react'
import { connect } from 'react-redux'
import News from '../components/News'
import { getNews, getIsFetching } from '../reducers/news/selectors'
import { newsSaga } from '../reducers/news/actions'

class NewsContainer extends React.Component {
  render() {
    const { news, newsSaga, isFetching } = this.props
    return <News news={news} newsSaga={newsSaga} isFetching={isFetching} />
  }
}

const mapStateToProps = state => ({
  news: getNews(state),
  isFetching: getIsFetching(state),
})

export default connect(mapStateToProps, { newsSaga })(NewsContainer)
