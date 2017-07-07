import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './MobileTableCellAttribute.css'
import FormattedAttributeValue from '../FormattedAttributeValue'
import AlcoholInstanceEditingModalConnected from '../../containers/AlcoholInstanceEditingModalConnected'

export default class MobileTableCellAttribute extends Component {
  static propTypes = {
    attributeName: PropTypes.string,
    isEditable: PropTypes.bool,
    format: PropTypes.string,
    label: PropTypes.string.isRequired,
    slug: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    setAlcoholSlugBeingEdited: PropTypes.func,
    setAlcoholAttributeBeingEdited: PropTypes.func,
  }

  constructor(props) {
    super(props)
    this.state = {
      isEditingModalOpen: false,
    }
    this.handleClick = this.handleClick.bind(this)
    this.openEditingModal = this.openEditingModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  handleClick() {
    const {
      attributeName,
      isEditable,
      slug,
      setAlcoholAttributeBeingEdited,
      setAlcoholSlugBeingEdited,
    } = this.props
    if (!isEditable) return
    setAlcoholAttributeBeingEdited(attributeName)
    setAlcoholSlugBeingEdited(slug)
    this.openEditingModal()
  }

  openEditingModal() {
    this.setState({
      isEditingModalOpen: true,
    })
  }

  closeModal() {
    this.setState({
      isEditingModalOpen: false,
    })
  }

  render() {
    const {
      format,
      isEditable,
      label,
      value,
    } = this.props
    const {
      isEditingModalOpen,
    } = this.state
    return (
      <p
        className={`
          MobileTableCellAttribute
          ${(isEditable ? 'MobileTableCellAttribute--editable' : null)}
        `}
        onClick={this.handleClick}
      >
        <span className="MobileTableCellAttribute__label">{label}:</span>
        <span
          className='MobileTableCellAttribute__value'
        >
          <FormattedAttributeValue format={format} value={value} />
        </span>
        <AlcoholInstanceEditingModalConnected
          isOpen={isEditingModalOpen}
          onRequestClose={this.closeModal}
        />
      </p>
    )
  }
}
