import React ,{Component} from 'react'
import PropTypes from 'prop-types'
import Comment from '../Component/Comment'

class CommentList extends Component{
  constructor(props){
    super(props)
    this.state = {
      commentlist:[]
    }
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentWillMount(){
    this.loadComments()
  }

  handleDelete(index){
    let commentlist = this.state.commentlist
    commentlist = [...commentlist.slice(0,index),...commentlist.slice(index+1)]
    localStorage.setItem('comment',commentlist);
    this.loadComments()
  }

  loadComments(){
    let commentlist = localStorage.getItem('comment');
    commentlist = commentlist ? JSON.parse(commentlist) : [];
    this.setState({commentlist})
  }
  render(){
    return(
      <div className="comment-list">
        {
          this.state.commentlist.map((comment,i)=>
            <Comment key={i} index={i} comment={comment} delete={this.handleDelete}/>
          )
        }
      </div>
    )
  }
}

export default CommentList
