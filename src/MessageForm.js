import React from 'react';
export default class MessageForm extends React.Component{
    constructor(props){ //构造函数
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        var authorInput=this.refs.author;
        var contentInput=this.refs.content;
        var message={
            author:authorInput.value,
            content:contentInput.value,
        };
        this.props.addMessage(message);
        contentInput.value='';
    }
    render(){
        return (
            <form role="form" className="form-horizontal" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="author" className="control-label col-md-1">姓名</label>
                    <div className="col-md-11">
                        <input ref="author" type="text" className="form-control" id="author"/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="content" className="control-label col-md-1">内容</label>
                    <div className="col-md-11">
                        <textarea ref="content" className="form-control" id="content"></textarea>
                    </div>
                </div>
                <div className="form-group">
                    <div className=" col-md-offset-1 col-md-11">
                        <button className="btn btn-primary" type="submit">发表</button>
                    </div>
                </div>
            </form>
        )
    }
}