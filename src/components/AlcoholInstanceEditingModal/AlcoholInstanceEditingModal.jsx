import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'
import VolumeEditingInputs from '../VolumeEditingInputs'
import Button from '../Button'
import AlcoholByVolumeEditingInputs from '../AlcoholByVolumeEditingInputs'
import TotalCostEditingInputs from '../TotalCostEditingInputs'
import './AlcoholInstanceEditingModal.css'

export default class AlcoholInstanceEditingModal extends Component {
  static propTypes = {
    alcoholInstance: PropTypes.shape({
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }),
    attributeBeingEdited: PropTypes.string,
    attributeName: PropTypes.string,
    isEditingModalShown: PropTypes.bool.isRequired,
    slugBeingEdited: PropTypes.string,
    hideAlcoholInstanceEditingModal: PropTypes.func.isRequired,
    showAlcoholInstanceEditingModal: PropTypes.func.isRequired,
    updateAlcoholInstance: PropTypes.func.isRequired,
  }

  constructor (props) {
    super(props)
    const {
      alcoholInstance,
    } = this.props
    this.state = {
      modalStateClassName: 'AlcoholInstanceEditingModal--closed',
      modalOverlayStateClassName: 'AlcoholInstanceEditingModal__overlay--closed',
      alcoholInstance,
    }
    this.determineInputsComponent = this.determineInputsComponent.bind(this)
    this.setOpenStateClassNames = this.setOpenStateClassNames.bind(this)
    this.setClosedStateClassNames = this.setClosedStateClassNames.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.updateInputValue = this.updateInputValue.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    const {
      alcoholInstance,
    } = nextProps
    this.setState({
      alcoholInstance: { ...alcoholInstance },
    })
  }

  determineInputsComponent () {
    const {
      attributeBeingEdited,
    } = this.props
    const {
      alcoholInstance,
    } = this.state
    const editingFormMap = {
      volumeInOunces: <VolumeEditingInputs alcoholInstance={alcoholInstance} updateInputValue={this.updateInputValue} />,
      alcoholByVolume: <AlcoholByVolumeEditingInputs alcoholInstance={alcoholInstance} updateInputValue={this.updateInputValue} />,
      totalCost: <TotalCostEditingInputs alcoholInstance={alcoholInstance} updateInputValue={this.updateInputValue} />,
    }
    return editingFormMap[attributeBeingEdited]
  }

  setOpenStateClassNames () {
    this.setState({
      modalStateClassName: 'AlcoholInstanceEditingModal--open',
      modalOverlayStateClassName: 'AlcoholInstanceEditingModal__overlay--open',
    })
  }

  setClosedStateClassNames () {
    this.setState({
      modalStateClassName: 'AlcoholInstanceEditingModal--closed',
      modalOverlayStateClassName: 'AlcoholInstanceEditingModal__overlay--closed',
    })
  }

  closeModal () {
    const {
      hideAlcoholInstanceEditingModal,
    } = this.props
    this.setClosedStateClassNames()
    setTimeout(hideAlcoholInstanceEditingModal, 200)
  }

  updateInputValue (event) {
    const {
      target: {
        name,
        value,
      },
    } = event
    const {
      alcoholInstance,
    } = this.state
    this.setState({
      alcoholInstance: {
        ...alcoholInstance,
        [name]: value,
      },
    })
  }

  submitForm (event) {
    event.preventDefault()
    const {
      slugBeingEdited,
      updateAlcoholInstance,
    } = this.props
    const {
      alcoholInstance,
    } = this.state
    updateAlcoholInstance(slugBeingEdited, alcoholInstance)
    this.closeModal()
  }

  render () {
    const {
      alcoholInstance,
      attributeBeingEdited,
      isEditingModalShown,
      slugBeingEdited,
    } = this.props
    const attributeName = attributeBeingEdited === 'volumeInOunces' ? 'volume' : this.props.attributeName
    const alcoholInstanceName = alcoholInstance ? alcoholInstance.name : null
    const {
      modalStateClassName,
      modalOverlayStateClassName,
    } = this.state
    const inputsComponent = this.determineInputsComponent()
    return (
      <Modal
        className={`AlcoholInstanceEditingModal ${modalStateClassName}`}
        overlayClassName={`AlcoholInstanceEditingModal__overlay ${modalOverlayStateClassName}`}
        isOpen={Boolean(isEditingModalShown && attributeBeingEdited && slugBeingEdited)}
        onAfterOpen={this.setOpenStateClassNames}
        contentLabel={`AlcoholInstanceEditingModal-${attributeBeingEdited}-${slugBeingEdited}`}
        onRequestClose={this.closeModal}
      >
        <p className="AlcoholInstanceEditingModal__headline">{attributeName}</p>
        <p className="AlcoholInstanceEditingModal__subheadline">{alcoholInstanceName}</p>
        <form className="AlcoholInstanceEditingModal__form" onSubmit={this.submitForm}>
          {inputsComponent}
          <div className="AlcoholInstanceEditingModal__buttons-container">
            <Button
              type='button'
              color='orange'
              className='AlcoholInstanceEditingModal__button-cancel'
              onClick={this.closeModal}
            >
              nevermind
            </Button>
            <Button
              type='submit'
              color='blue'
              className='AlcoholInstanceEditingModal__button-submit'
            >
              update
            </Button>
          </div>
        </form>
      </Modal>
    )
  }
}
