import React ,{Component} from 'react'
import PropTypes from 'prop-types'
import CommentList from '../Component/CommentList'
import {initComments,deleteComment} from '../reducer'
import {connect} from '../pp.react-redux/react-redux'

@connect(
  state=>state,
  {initComments,deleteComment}
)
class CommentListContainer extends Component{
  constructor(props){
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
    this.state={
      comments:[]
    }
  }
  handleDelete(index){
    if(this.props.deleteComment){
      this.props.deleteComment(index)
    }
  }

  componentWillMount(){
    this.loadCommentList();
  }

  loadCommentList(){
    if(this.props.initComments){
      this.props.initComments();
    }
  }

  render(){
    return(
        <CommentList commentlist={this.props.comments} deleteComment={this.handleDelete}/>
    )
  }
}


export default CommentListContainer
