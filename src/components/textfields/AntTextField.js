import React from 'react'
import { Input } from 'antd'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { tomorrowNightBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const AntTextField = () => {
  const code = `import { Input } from "antd"

<Input placeholder="Ant text field" />`

  return (
    <>
      <h2>Ant Design</h2>
      <div className='component'>
        <Input placeholder='Ant text field' />
      </div>
      <div className='code'>
        <SyntaxHighlighter language='javascript' style={tomorrowNightBlue}>{code}</SyntaxHighlighter>
      </div>
    </>
  )
}

export default AntTextField
