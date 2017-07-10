import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { closeOthersMainMenu } from '../actions'
import LinkWrapper from './LinkWrapper'

const MenuLink = ({ children, to, style, activeStyle, closeOthersMainMenu, menuId, className }) => {
  const handleOnClick = () => closeOthersMainMenu(menuId)

  return (
    <Route
      path={typeof to === 'object' ? to.pathname : to}
      children={({ match }) => {
        return (
          <LinkWrapper
            match={match}
            menuId={menuId}
            to={to}
            onClick={handleOnClick}
            style={match ? { ...style, ...activeStyle } : style}
            children={children}
            className={className}
          />
        )
      }}
    />
  )
}

export default withRouter(connect(null, { closeOthersMainMenu })(MenuLink))
