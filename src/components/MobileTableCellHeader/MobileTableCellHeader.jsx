import React from 'react'
import PropTypes from 'prop-types'
import './MobileTableCellHeader.css'

const MobileTableCellHeader = ({ text }) => (
  <p className="MobileTableCellHeader">{text}</p>
)

MobileTableCellHeader.propTypes = {
  text: PropTypes.string.isRequired,
}

export default MobileTableCellHeader
