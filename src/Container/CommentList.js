import React ,{Component} from 'react'
import PropTypes from 'prop-types'
import Comment from '../Component/Comment'

class CommentList extends Component{
  constructor(props){
    super(props)
    this.state = {
      commentlist:[]
    }
  }

  componentWillMount(){
    const commentlist = JSON.parse(localStorage.getItem('comment')) || []
    this.setState({commentlist})
  }

  render(){
    return(
      <div className="comment-list">
        {
          this.state.commentlist.map((comment,i)=>
            <Comment key={i} comment={comment}/>
          )
        }
      </div>
    )
  }
}

export default CommentList
