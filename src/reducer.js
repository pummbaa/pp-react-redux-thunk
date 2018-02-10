const ADD_COMMENT = 'ADD_COMMENT'
const DELETE_COMMENT = 'DELETE_COMMENT'
const INIT_COMMENTS = 'INIT_COMMENTS'

export function commentReducer(state,action){
  if(!state){
    state ={
      comments:[]
    }
  }
  switch(action.type){
    case INIT_COMMENTS:
      return {comments:action.comments}
    case ADD_COMMENT:
      return {comments:[...state.comments,action.comment]}
    case DELETE_COMMENT:
      return {comments:[...state.comments.slice(0,action.index),...state.comments.slice(action.index+1)]}
    default:
      return state
  }
}


function _addComment(comment){
  return {type:ADD_COMMENT,comment}
}

function _deleteComment(index){
  return {type:DELETE_COMMENT,index}
}

function _initComments(comments){
  return {type:INIT_COMMENTS,comments}
}


export function addComment(comment){
  return dispatch=>{
    let comments = loadComments()
    comments.push(comment)
    localStorage.setItem('comments',JSON.stringify(comments))
    dispatch(_addComment(comment))
  }
}

export function deleteComment(index){
  return dispatch=>{
    let comments = loadComments()
    comments = [...comments.splice(0,index),...comments.splice(index+1)]
    localStorage.setItem('comments',JSON.stringify(comments));
    dispatch(_deleteComment(index))
  }
}

export function initComments(comments){
  return dispatch=>{
    const comments = loadComments()
    dispatch(_initComments(comments))
  }
}

function loadComments(){
  let comments = localStorage.getItem('comments')
  comments = comments ? JSON.parse(comments) : []
  return comments
}
