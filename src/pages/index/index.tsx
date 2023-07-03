import { View, Text, Input, Button } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import { useState } from 'react'
import { OPENAIProxy } from 'src/models/chatgpt'
import './index.scss'



// export default function Index() {

//   useLoad(() => {
//     console.log('Page loaded.')
//   })

//   return (
//     <View className='index'>
//       <Text>Hello world!</Text>
//     </View>
//   )
// }

const ChatPage = () =>{
  const [inputValue,setInputValue] = useState('');
  const [responses,setResponses] = useState<string[]>([]);

  const handleSendMessage = async() =>{
    let msgs = []
    let msg = {role:0,content:inputValue}
    const resp = await Taro.request<OPENAIProxy.ConversationResponse>({
      url: 'https://mapletencent.top/Conversation',
      method: 'POST',
      data:{
        message: [...msgs,msg]
      }
    });

    if(resp.statusCode == 200){
      setResponses([...responses,resp.data.message.filter(x=>x.role==1)[0].content]);
      setInputValue('');
    }else{
      console.log(resp.errMsg);
    }
    // var resp = `在 Taro 中, 尺寸单位建议使用 px, %，Taro 默认会对所有单位进行转换。当转成微信小程序的时候，尺寸单位将默认转换以 rpx 为单位，当转成 H5 时将默认转换以 rem 为单位。
    // 如果你希望部分 px 单位不被转换成 rpx 或者 rem ，最简单的做法就是在 px 单位中增加一个大写字母，例如 Px 或者 PX 这样，则会被转换插件忽略。
    // Taro 默认以 750px 作为换算尺寸标准，如果设计稿不是以 750px 为标准，则需要在项目配置 config/index.js 中进行设置，例如设计稿尺寸是 640px，则需要修改项目配置 config/index.js 中的 designWidth 配置为 640：`
    // setResponses([...responses,resp]);
    // setInputValue('');
  }

  return (
    <View>
      <Text>Hello</Text>
      <View>
        {responses.map((resp,index)=> <View>{resp}{index}</View>)}
      </View>
      <Input value={inputValue} onInput={(e)=>setInputValue(e.target.dataset[0])} placeholder='Type your message...' />
      <Button onClick={handleSendMessage}>Send</Button>
    </View>
  )
}

export default ChatPage
