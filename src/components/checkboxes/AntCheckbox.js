import React from 'react'
import { Checkbox } from 'antd'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { tomorrowNightBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const AntCheckbox = () => {
  const code = `import { Checkbox } from "antd"
  
<Checkbox name="checkbox1">I am Checkbox</Checkbox>`

  return (
    <>
      <h2>Ant Design</h2>
      <div className='component'>
        <Checkbox name='checkbox1'>I am Checkbox</Checkbox>
      </div>
      <div className='code'>
        <SyntaxHighlighter language='javascript' style={tomorrowNightBlue}>{code}</SyntaxHighlighter>
      </div>
    </>
  )
}

export default AntCheckbox
