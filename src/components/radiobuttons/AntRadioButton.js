import React from 'react'
import { Radio } from 'antd'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { tomorrowNightBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const AntCheckbox = () => {
  const code = `import { Radio } from "antd"
  
<Radio.Group>
  <Radio value="A">A</Radio>
  <Radio value="B">B</Radio>
  <Radio value="C">C</Radio>
</Radio.Group>`

  return (
    <>
      <h2>Ant Design</h2>
      <div className='component'>
        <Radio.Group>
          <Radio value='A'>A</Radio>
          <Radio value='B'>B</Radio>
          <Radio value='C'>C</Radio>
        </Radio.Group>
      </div>
      <div className='code'>
        <SyntaxHighlighter language='javascript' style={tomorrowNightBlue}>{code}</SyntaxHighlighter>
      </div>
    </>
  )
}

export default AntCheckbox
