import *as React from 'react'
import { ComponentExt } from '@untils/ReactExt'
import { observer,inject } from 'mobx-react';
import { Button } from 'antd'
// class Test extends React.Component{
interface IGlobalStore {
    increase:()=>void,
    decrease:()=>void,
    num:number
}
interface Iprops{
    globalStore?:IGlobalStore.GlobalStore
}

    @inject('globalStore')
    @observer
class Test extends ComponentExt<Iprops>{
    increase = ()=>{
        // this.$message.success("正确弹出")
       let {num} = this.props.globalStore
        this.props.globalStore.increase(num)
    }
    decrease = ()=>{

    }

    render(){
        console.log(this.props)
        const {num} = this.props.globalStore
        return (
            <div> 
                <div >{ num }</div>
                <Button type="primary" onClick={this.increase}>增加</Button>
                <Button type="primary">减少</Button>
            </div>
        )
    }
}

export default Test