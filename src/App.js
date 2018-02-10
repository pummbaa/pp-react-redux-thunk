import React ,{Component} from 'react'
import PropTypes from 'prop-types'
import CommentInputContainer from './Container/CommentInputContainer'
import CommentListContainer from './Container/CommentListContainer'

import './comment.less'
class App extends Component{
  render(){
    return(
      <div id="app">
        <CommentInputContainer/>
        <CommentListContainer/>
      </div>
    )
  }
}

export default App
