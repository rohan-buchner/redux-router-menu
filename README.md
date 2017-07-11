# Redux-Router-Menu

## Installation

```
npm install --save redux-router-menu
```
## Demo

http://3794.github.io/redux-router-menu/

## Guide

Let's take a look at a simple example.


Menu reducer
```javascript
import { combineReducers } from 'redux'
import { menuReducer } from 'redux-router-menu'
  
const rootReducer = combineReducers({
  // your other reducers here
  menu: menuReducer
})

```

Your menu component
```js
import React from 'react'
import { Accordion } from 'redux-router-menu'
  
const activeStyle = { color: 'red' }
  
const MenuBar = () => {
  return (
    <ul>
      <li>
        <Accordion
          menuId="/menu1"
          title={(MainMenu) =>
            <MainMenu className="menu" menuId="/menu1" activeStyle={activeStyle}>Main Menu1</MainMenu>
          }
          children={({ MenuLink }) => (
            <ul>
              <li><MenuLink className="menu" to="/main1/sub1" menuId="/menu1" activeStyle={activeStyle}>
                Submenu1
              </MenuLink></li>
              <li><MenuLink className="menu" to="/main1/sub2" menuId="/menu1" activeStyle={activeStyle}>
                Submenu2
              </MenuLink></li>
            </ul>
          )}/>
      </li>
      <li>
        <Accordion
          title={(MainMenu) =>
            <MainMenu className="menu" menuId="/menu2" activeStyle={activeStyle}>Main Menu2</MainMenu>
          }
          menuId="/menu2"
          children={({ MenuLink }) => (
            <ul>
              <li><MenuLink className="menu" to="/main2/sub3" menuId="/menu2" activeStyle={activeStyle}>
                Submenu1
              </MenuLink></li>
              <li><MenuLink className="menu" to="/main2/sub4" menuId="/menu2" activeStyle={activeStyle}>
                Submenu2
              </MenuLink></li>
            </ul>
          )}/>
      </li>
    </ul>
  )
}
  
export default MenuBar

```

The accordian menu is the only available component currently, but more support for various components will be provided. Contributions will be welcomed!