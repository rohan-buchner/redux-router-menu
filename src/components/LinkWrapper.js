import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { closeOthersMainMenu } from '../actions'

class LinkWrapper extends React.Component {
  componentDidMount() {
    const { match, menuId, closeOthersMainMenu } = this.props
    if (match) {
      closeOthersMainMenu(menuId)
    }
  }
  render() {
    const { to, onClick, style, children, className } = this.props
    return <Link to={to} onClick={onClick} style={style} children={children} className={className} />
  }
}

export default connect(null, { closeOthersMainMenu })(LinkWrapper)