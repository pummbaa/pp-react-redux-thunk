import React ,{Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from '../pp.react-redux/react-redux'
import {addComment} from '../reducer'
import CommentInput from '../Component/CommentInput'


@connect(
  state=>state,
  {addComment}
)
class CommentInputContainer extends Component{
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputBlur = this.handleInputBlur.bind(this)
  }

  handleSubmit(comment){
    if(this.props.addComment){
      this.props.addComment(comment)
    }
  }

  handleInputBlur(username){
    localStorage.setItem('username',username)
  }

  render(){
    return(
      <CommentInput addComment={this.handleSubmit} inputBlur={this.handleInputBlur} />
    )
  }

}

export default CommentInputContainer
