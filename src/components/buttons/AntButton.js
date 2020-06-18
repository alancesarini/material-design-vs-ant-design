import React, { useState } from 'react'
import { Button } from 'antd'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { tomorrowNightBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import { changeType } from '../../shared/utils'

const types = {
  primary: 'Primary button',
  default: 'Default button',
  dashed: 'Dashed button',
  text: 'Text only button',
  link: 'Link button'
}

const AntButton = () => {
  const [index, setIndex] = useState(0)

  const handleClick = () => {
    changeType(types, index, setIndex)
  }

  const code = `import { Button } from "antd"

<Button type="${Object.keys(types)[index]}">
  Click me to change type
</Button>`

  return (
    <>
      <h2>Ant Design</h2>
      <div className='component'>
        <Button type={Object.keys(types)[index]} onClick={handleClick}>Click me to change type</Button>
      </div>
      <div className='code'>
        <SyntaxHighlighter language='javascript' style={tomorrowNightBlue}>{code}</SyntaxHighlighter>
      </div>
    </>
  )
}

export default AntButton
