export function createStore(reducer,enhancer){
  if(enhancer){
    return enhancer(createStore)(reducer)
  }
  let listeners = []
  let state = null

  const subscribe = (listener)=>{
    listeners.push(listener)
  }

  const getState = () => state

  const dispatch = (action)=>{
    state = reducer(state,action)
    listeners.forEach(listener=>listener())
  }
  dispatch({type:'@@INIT'})
  return {getState,dispatch,subscribe}
}


function bindActionCreator(creator,dispatch){
  return (...args) => dispatch(creator(...args))
}

export function bindActionCreators(creators,dispatch){
  // let bound = {}
  // Object.keys(creators).forEach(v=>{
  //   let creator = creators[v]
  //   bound[v] = bindActionCreator(creator,dispatch)
  // })
  // return bound
  return  Object.keys(creators).reduce((res,item)=>{
    res[item] = bindActionCreator(creators[item],dispatch)
    return res
  },{})
}

export function applyMiddlewares(...middlewares){
  return createStore => (...args) => {
    const store = createStore(...args)
    let dispatch = store.dispatch
    const midApi = {
      getState:store.getState,
      dispatch:(...args)=>dispatch(...args)
    }
    const middlewareChain = middlewares.map(middleware=>middleware(midApi))
    dispatch = compose(...middlewareChain)(store.dispatch)
    //dispatch = middleware(midApi)(store.dispatch)
    return {
      ...store,
      dispatch
    }
  }
}
export function applyMiddleware(middleware){
  return createStore => (...args) => {
    const store = createStore(...args)
    let dispatch = store.dispatch
    const midApi = {
      getState:store.getState,
      dispatch:(...args)=>dispatch(...args)
    }
    //const middlewareChain = middlewares.map(middleware=>middleware(midApi))
    //dispatch = compose(...middlewareChain)(store.dispatch)
    dispatch = middleware(midApi)(store.dispatch)
    return {
      ...store,
      dispatch
    }
  }
}
//compose(fn1,fn2,fn3)
//fn(fn2(fn3))
export function compose(...funcs){
  if(funcs.length === 0){
    return arg => arg
  }
  if(funcs.length === 1){
    return funcs[0]
  }
  return funcs.reduce((result,item) => (...args) => result(item(...args)))
}
