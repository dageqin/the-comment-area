import React from 'react';
import MessageList from './MessageList';
import MessageForm from './MessageForm';
export default class MessageBox extends React.Component {
    //props 使用它的福组件给他传进来的对象
    constructor(props){
        super(props);
        this.state={messages:[]};
    }
    componentDidMount(){
        this.setState({messages:this.props.model.list()})
    }
    addMessage(message){
        //不管删除还是新增留言都会返回最新的留言列表
        var messages=this.props.model.add(message);
        this.setState({messages});//设置状态
        /*message.id=this.state.messages.length>0?this.state.messages[this.state.messages.length-1].id+1:1;
        message.createAt=new Date();
        this.state.messages.push(message);
        this.setState({messages:this.state.messages});//设置状态*/
    }
    render() {
        return (<div className = "panel panel-default" >
            < div className = 'panel-heading' >
            <h3 className="text-center">留言板</h3>
            </div >
            <div className="panel-body">
                <MessageList messages={this.state.messages}/>
            </div>
            <div className="panel-footer">
                <MessageForm addMessage={this.addMessage.bind(this)}/>
            </div>
            </div>);
    }
}


