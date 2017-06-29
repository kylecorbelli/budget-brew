import React from 'react'
import './SiteHeader.css'

const SiteHeader = () => (
  <div className="SiteHeader">
    <div className="SiteHeader__branding">
      <h1 className="SiteHeader__headline">
        budget
        <span className="SiteHeader__headline-highlight">brew</span>
      </h1>
      <h2 className="SiteHeader__subheadline">cost effective booze</h2>
    </div>
  </div>
)

export default SiteHeader
