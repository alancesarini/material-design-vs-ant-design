import React, { useState } from 'react'
import { Modal, Button } from 'antd'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { tomorrowNightBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const AntDialog = () => {
  const [open, setOpen] = useState(false)

  const code = `import { Modal } from "antd"
  
<Modal title='Dialog title' visible={open} onOk={handleClose} onCancel={handleClose}>
  <p>I am Dialog</p>
</Modal>`

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <h2>Ant Design</h2>
      <div className='component'>
        <Modal title='Dialog title' visible={open} onOk={handleClose} onCancel={handleClose}>
          <p>I am Dialog</p>
        </Modal>
        <Button type='primary' onClick={() => setOpen(true)}>Open dialog</Button>
      </div>
      <div className='code'>
        <SyntaxHighlighter language='javascript' style={tomorrowNightBlue}>{code}</SyntaxHighlighter>
      </div>
    </>
  )
}

export default AntDialog
