import React ,{Component} from 'react'
import PropTypes from 'prop-types'
import Comment from '../Component/Comment'
class CommentList extends Component{

  constructor(props){
    super(props)
    this.state = {
      commentlist:[],
    }
  }

  handleDelete(index){
      if(this.props.deleteComment){
        this.props.deleteComment(index);
      }
  }
  render(){
    return(
      <div className="comment-list">
        {
          this.props.commentlist.map((comment,i)=>
            <Comment key={i} index={i} comment={comment} delete={this.handleDelete.bind(this,i)}/>
          )
        }
      </div>
    )
  }

}


export default CommentList
