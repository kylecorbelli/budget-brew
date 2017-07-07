import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Button.css'

export default class Button extends Component {
  static propTypes = {
    color: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.string,
  }

  static defaultProps = {
    color: 'orange',
  }

  constructor(props) {
    super(props)
    this.determineClassName = this.determineClassName.bind(this)
  }

  determineClassName() {
    const {
      color,
      className,
    } = this.props
    const baseClassName = `Button ${className}`
    const colorClassName = `Button--${color}`
    return `${baseClassName} ${colorClassName}`
  }

  render() {
    const {
      children,
      onClick,
      type,
    } = this.props
    return (
      <button
        className={this.determineClassName()}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    )
  }
}
