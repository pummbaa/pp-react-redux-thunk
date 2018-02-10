import React ,{Component} from 'react';
import PropTypes from 'prop-types'
import {bindActionCreators} from '../pp.redux/redux'
//将sotre放到context供其他组价使用其中的数据
export class Provider extends Component{
    constructor(props,context){
      super(props,context)
      this.store = props.store
    }

    static childContextTypes = {
      store:PropTypes.object
    }

    getChildContext(){
      return {store:this.store}
    }

    render(){
      return(
        <div>{this.props.children}</div>
      )
    }
}

// function connect(mapStateToProps,mapDispatchToProps){
//   return function (wrapperComponent){
//     return class ConnectComponent extends Component{
//
//     }
//
//   }
// }
//connect 负责链接组件，将redux中的数据映射到组件的props里
export const connect = (mapStateToProps=state=>state,mapDispatchToProps={})=>(WrapperComponent)=>{
  return class ConnectComponent extends Component{
    static contextTypes = {
      store:PropTypes.object
    }

    constructor(props,context){
      super(props,context)
      this.state = {
        props:{}
      }
    }

    componentWillMount(){
      const {store} = this.context;
      store.subscribe(()=>this.update())
      this.update()
    }

    update(){
      //获取mapStateToProps,mapDispatchToProps
      const {store} = this.context
      const stateProps = mapStateToProps(store.getState())
      //方法需要dispatch
      const dispatchProps = bindActionCreators(mapDispatchToProps,store.dispatch)
      this.setState({
        props:{
          ...this.state.props,
          ...stateProps,
          ...dispatchProps
        }
      })
    }
    render(){
      return(
        <WrapperComponent {...this.state.props} />
      )
    }
  }
}
