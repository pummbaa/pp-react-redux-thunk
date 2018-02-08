import React ,{Component} from 'react'
import PropTypes from 'prop-types'

class Comment extends Component{
  constructor(props){
    super(props)
    this.State = {
      timeString : ' '
    }
  }

  componentWillMount(){
    const timeString = this._updateTimeString();
    this.setState({timeString})
  }

  render(){
    const comment = this.props.comment;

    return(
      <div className='comment'>
          <span className="comment-username">{comment.username} :</span>
          <p className="comment-content" dangerouslySetInnerHTML={{__html:this._getProcessedContent(comment.content)}}></p>
          <span className="comment-time">{this.state.timeString}</span>
      </div>
    )
  }

  _updateTimeString(){
    const comment = this.props.comment;
    let duration = (+Date.now() - comment.createTime)/1000;
    let timeString = null;
    if(duration < 60){
      //秒
      duration = Math.max(Math.round(duration),1);
      timeString = `${duration} 秒前`;
    }else if(60 < duration && duration < 3600){
      //分钟
      duration = Math.round(duration / 60);
      timeString = `${duration} 分钟前`;
    }else if(3600 < duration && duration < 1314000){
      //小时
      duration = Math.round(duration/ 60 / 60);
      timeString = `${duration}小时前`;
    }else if( 1314000 < duration && duration <31536000){
      //天
      duration = Math.round(duration / 60 / 60 / 24);
      timeString = `${duration}天前`;
    }else {
      //具体时间
      timeString = new Date(comment.createTime).toLocaleDateString()
    }
    return timeString
  }

  _getProcessedContent(content){
    return content
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#039;")
          .replace(/`([\S\s]+?)`/g, '<pre>$1</pre>')
  }

}

export default Comment
