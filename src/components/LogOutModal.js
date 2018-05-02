import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import propTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Zoom from 'material-ui/transitions/Zoom'
import Button from 'material-ui/Button'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    fontFamily: 'Source Sans Pro',
    fontWeight: '400',
    fontSize: '15px',
  },
})

class GalleryModal extends Component {
  static propTypes = {
    logOut: propTypes.func,
    showModal: propTypes.func,
    modalVisible: propTypes.bool,
  }

  componentWillMount() {
    this.root = document.createElement('div')
    document.body.appendChild(this.root)
  }
  componentWillUnmount() {
    document.body.removeChild(this.root)
  }

  handleModal = () => {
    this.props.showModal()
    this.props.logOut()
  }
  render() {
    const { classes, modalVisible } = this.props
    return ReactDOM.createPortal(
      <div className="gallery-modal">
        <Zoom
          in={modalVisible}
          style={{ transitionDelay: modalVisible ? 200 : 0 }}
        >
          <div className="gallery-modal__content">
            <h2 className="gallery-modal__title">
              Вы уверены, что хотите выйти?
            </h2>
            <div className="gallery-modal__buttons">
              <Button
                variant="raised"
                className={classes.button}
                onClick={this.handleModal}
              >
                Да, уверен
              </Button>
              <Button
                variant="raised"
                className={classes.button}
                onClick={this.props.showModal}
              >
                Нет
              </Button>
            </div>
          </div>
        </Zoom>
      </div>,
      this.root
    )
  }
}

export default withStyles(styles)(GalleryModal)
