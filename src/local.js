
let MESSAGES='MESSAGES';
module.exports={
    //查询所有的留言
    list(){
        let messages=localStorage.getItem(MESSAGES);
        return messages?JSON.parse(messages):[];
    },
    //增加一条新的留言
    add(message){
        let messages=this.list();//先获取老数组
        message.id=messages.length>0?messages[messages.length-1].id+1:1;
        message.createAt=new Date();
        messages.push(message);
        localStorage.setItem(MESSAGES,JSON.stringify(messages));//设置本地存储
        return messages;
    }
};