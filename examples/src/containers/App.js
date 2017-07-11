import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import DashBoard from '../components/DashBoard'
import MenuBar from './MenuBar'
import Sub1 from '../components/Sub1'
import Sub2 from '../components/Sub2'
import Sub3 from '../components/Sub3'
import Sub4 from '../components/Sub4'
import './App.css'

const App = () => (
  <Router>
    <div style={{ margin: 10 }}>
      {/* todo 메뉴에 없는 링크로 갔을때 이전에 선택한 메인메뉴 해제 안됨. */}
      {/*<h4><Link to="/">Redux-Router-Menu</Link></h4>*/}
      <h4>Redux-Router-Menu</h4>
      <hr />
      <MenuBar />
      <hr />
      <div>
        <Route exact path="/" component={DashBoard} />
        <Route path="/main1/sub1" component={Sub1} />
        <Route path="/main1/sub2" component={Sub2} />
        <Route path="/main2/sub3" component={Sub3} />
        <Route path="/main2/sub4" component={Sub4} />
      </div>
    </div>
  </Router>
)

export default App