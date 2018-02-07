import React ,{Component} from 'react'
import PropTypes from 'prop-types'
import { WingBlank,List, InputItem } from 'antd-mobile'

class CommentInput extends Component{
  render(){
    return(
      <div>
        <WingBlank>
        <List>
          <InputItem/>
        </List>
        </WingBlank>
      </div>
    )
  }
}

export default CommentInput
