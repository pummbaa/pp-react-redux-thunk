import React ,{Component} from 'react'
import PropTypes from 'prop-types'
import CommentInput from './Container/CommentInput'
import CommentList from './Container/CommentList'

import './comment.less'

class App extends Component{
  render(){
    return(
      <div id="app">
        <CommentInput/>
        <CommentList/>
      </div>
    )
  }
}

export default App
