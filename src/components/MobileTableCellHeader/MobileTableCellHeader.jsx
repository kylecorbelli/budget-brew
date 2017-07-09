import React from 'react'
import PropTypes from 'prop-types'
import './MobileTableCellHeader.css'

const MobileTableCellHeader = ({
  slug,
  text,
  showAlcoholInstanceEditingModal
}) => (
  <p
    className="MobileTableCellHeader"
    onClick={() => showAlcoholInstanceEditingModal(slug, 'name')}
  >{text}</p>
)

MobileTableCellHeader.propTypes = {
  showAlcoholInstanceEditingModal: PropTypes.func.isRequired,
  slug: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default MobileTableCellHeader
