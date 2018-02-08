const ADD_COMMENT = 'ADD_COMMENT'
const DELETE_COMMENT = 'DELETE_COMMENT'


const initState = {
  comments:[]
}

export function commentReducer(state=initState,action){
  switch(action.type){
    case ADD_COMMENT:
      return [...state,action.comment]
    case DELETE_COMMENT:
      return [...state.slice(0，index),...state.slice(index+1)]
    default:
      return state
  }
}


export function addComment(comment){
  return {type:ADD_COMMENT,comment}
}

export function deleteComment(index){
  return {type:DELETE_COMMENT,index}
}
