import React ,{Component} from 'react'
import PropTypes from 'prop-types'

class CommentInput extends Component{
  constructor(props){
    super(props);
    this.state = {
      username:' ',
      content:' '
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleInputBlur = this.handleInputBlur.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(e){
    this.setState({
      username:e.target.value
    })
  }

  handleInputBlur(e){
    localStorage.setItem('username',e.target.value)
  }

  handleTextChange(e){
    this.setState({
      content:e.target.value
    })
  }

  handleSubmit(){
    if(!this.state.content){
      return alert('请输入评论内容')
    }
    if(!this.state.username){
      return alert('请输入用户名')
    }

    let comment = localStorage.getItem('comment')
    comment = comment ? JSON.parse(comment) : []
    comment.push({...this.state,createTime:(new Date()).getTime()})
    localStorage.setItem('comment',JSON.stringify(comment))
    this.setState({
      content:''
    })
  }

  componentDidMount(){
    const username = localStorage.getItem('username')
    this.setState({username})
  }

  
  render(){
    return(
      <div className="comment-input">
        <div className="comment-field">
          <span className="comment-field-name">用户名：</span>
          <div className="comment-field-input">
            <input value={this.state.username} onChange={this.handleInputChange} onBlur={this.handleInputBlur}/>
          </div>
        </div>
        <div className="comment-field">
          <span className="comment-field-name">评论内容：</span>
          <div className="comment-field-input">
            <textarea ref={(textarea) => this.textarea = textarea} value={this.state.content} onChange={this.handleTextChange}/>
          </div>
        </div>
        <div className="comment-field-button">
          <button onClick={this.handleSubmit}>发布</button>
        </div>
      </div>
    )
  }
}

export default CommentInput
