import React from 'react'
import { connect } from 'react-redux'
import VerticalSpring from './VerticalSpring'
import MenuLink from './MenuLink'
import MainMenu from './MainMenu'

// todo menuId를 상위 컴포넌트에서 받아서 주입하고 싶은데, background color 스타일링하면 hoc때문에 깜빡거려서 넣을 수가 없네...
// const Hoc = (Component, menuId) => props => {
//   return <Component menuId={menuId} {...props} />
// }

// todo 컴포넌트 이름 다른거 뭐 없을까?
const Accordion = ({ openedMenus, menuId, title, children }) => {
  const isOpen = openedMenus.indexOf(menuId) > -1

  return (
    <div>
      {title({ MainMenu })}
      <VerticalSpring
        duration={300}
        height={isOpen ? 'auto' : 0}>
        {children({ MenuLink })}
      </VerticalSpring>
    </div>
  )
}

export default connect(state => ({ openedMenus: state.menu.openedMenus }))(Accordion)
