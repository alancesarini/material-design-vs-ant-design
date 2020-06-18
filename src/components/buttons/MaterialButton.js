import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { tomorrowNightBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import { changeType } from '../../shared/utils'

const types = {
  contained: 'Contained button',
  text: 'Text only button',
  outlined: 'Outlined button'
}

const MaterialButton = () => {
  const [index, setIndex] = useState(0)

  const handleClick = () => {
    changeType(types, index, setIndex)
  }

  const code = `import { Button } from "@material-ui/core"

<Button variant="${Object.keys(types)[index]}" color="primary">
  Click me to change type
</Button>`

  return (
    <>
      <h2>Material Design</h2>
      <div className='component'>
        <Button variant={Object.keys(types)[index]} color='primary' onClick={handleClick}>Click me to change type</Button>
      </div>
      <div className='code'>
        <SyntaxHighlighter language='javascript' style={tomorrowNightBlue}>{code}</SyntaxHighlighter>
      </div>
    </>
  )
}

export default MaterialButton
