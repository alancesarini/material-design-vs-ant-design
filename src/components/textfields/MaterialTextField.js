import React, { useState } from 'react'
import { TextField } from '@material-ui/core'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { tomorrowNightBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import { changeType } from '../../shared/utils'

const types = {
  standard: 'Standard text field',
  filled: 'Filled text field',
  outlined: 'Outlined text field'
}

const MaterialTextField = () => {
  const [index, setIndex] = useState(0)

  const handleClick = () => {
    changeType(types, index, setIndex)
  }

  const code = `import { TextField } from "@material-ui/core"
  
<TextField variant="${Object.keys(types)[index]}" placeholder="Click me to change type" />
  `

  return (
    <>
      <h2>Material Design</h2>
      <div className='component'>
        <TextField onClick={handleClick} variant={Object.keys(types)[index]} placeholder='Click me to change type' />
      </div>
      <div className='code'>
        <SyntaxHighlighter language='javascript' style={tomorrowNightBlue}>{code}</SyntaxHighlighter>
      </div>
    </>
  )
}

export default MaterialTextField
