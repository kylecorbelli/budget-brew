import React from 'react'
import PropTypes from 'prop-types'
import './OptionTile.css'

const OptionTile = ({ children, onClick }) => (
  <div
    className="OptionTile"
    onClick={onClick}
  >
    {children}
  </div>
)

OptionTile.propTypes = {
  onClick: PropTypes.func,
}

export default OptionTile
