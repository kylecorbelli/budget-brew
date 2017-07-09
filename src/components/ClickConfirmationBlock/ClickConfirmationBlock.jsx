import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './ClickConfirmationBlock.css'

export default class ClickConfirmationBlock extends Component {
  static propTypes = {
    confirmationText: PropTypes.string.isRequired,
  }

  constructor (props) {
    super(props)
    this.state = {
      showConfirmationContent: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState({
      showConfirmationContent: true,
    })
    setTimeout(() => {
      this.setState({
        showConfirmationContent: false,
      })
    }, 2500)
  }

  render () {
    const {
      children,
      confirmationText,
    } = this.props
    const {
      showConfirmationContent,
    } = this.state
    const rollingBlockClassName = `
      ClickConfirmationBlock__rolling-block
      ${(showConfirmationContent ? 'ClickConfirmationBlock__rolling-block--show-confirmation'
                                 : 'ClickConfirmationBlock__rolling-block--show-normal-content')}
    `
    return (
      <div className="ClickConfirmationBlock" onClick={this.handleClick}>
        <div className={rollingBlockClassName}>
          <div className="ClickConfirmationBlock__normal-content">
            {children}
          </div>
          <div className="ClickConfirmationBlock__confirmation-content">
            {confirmationText}
          </div>
        </div>
      </div>
    )
  }
}
