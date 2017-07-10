import React from 'react'
import { selectMainMenu } from '../actions'
import { connect } from 'react-redux'


const MainMenu = ({ activeMenu, selectMainMenu, className, style, activeStyle, menuId, children, ownProps }) => {
  const handleToggle = () => {
    selectMainMenu(menuId)
  }
  const match = activeMenu === menuId
  return <div style={match ? {...style, ...activeStyle} : style} onClick={handleToggle} className={className}>{children}</div>
}

const mapDispatchToProps = { selectMainMenu }

export default connect((state, ownProps) => ({ activeMenu: state.menu.activeMenu, ownProps }), mapDispatchToProps)(MainMenu)
