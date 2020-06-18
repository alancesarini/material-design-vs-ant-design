import React from 'react'
import { Select } from 'antd'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { tomorrowNightBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const AntCheckbox = () => {
  const code = `import { Select } from "antd"
  
<Select defaultValue="Elephant">
  <Select.Option value="Elephant">Elephant</Select.Option>
  <Select.Option value="Tiger">Tiger</Select.Option>
</Select>`

  return (
    <>
      <h2>Ant Design</h2>
      <div className='component'>
        <Select defaultValue='Elephant'>
          <Select.Option value='Elephant'>Elephant</Select.Option>
          <Select.Option value='Tiger'>Tiger</Select.Option>
        </Select>
      </div>
      <div className='code'>
        <SyntaxHighlighter language='javascript' style={tomorrowNightBlue}>{code}</SyntaxHighlighter>
      </div>
    </>
  )
}

export default AntCheckbox
