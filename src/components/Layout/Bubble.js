import { FloatingBubble, Toast } from 'antd-mobile'
import { MessageFill } from 'antd-mobile-icons'

 function Bubble(){
  const onClick = () => {
    Toast.show('你点击了气泡')
  }
  return (
      <FloatingBubble
        style={{
          '--initial-position-bottom': '30px',
          '--initial-position-right': '24px',
          //'--edge-distance': '20px',
        }}
        onClick={onClick}
      >
      <MessageFill fontSize={32} />
      </FloatingBubble>
  )
}

export default Bubble