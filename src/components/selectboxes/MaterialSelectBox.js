import React from 'react'
import { Select, MenuItem } from '@material-ui/core'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { tomorrowNightBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const MaterialSelectBox = () => {
  const code = `import { Select, MenuItem } from "@material-ui/core"

<Select defaultValue="Elephant">
  <MenuItem value="Elephant">Elephant</MenuItem>
  <MenuItem value="Tiger">Tiger</MenuItem>
</Select>`

  return (
    <>
      <h2>Material Design</h2>
      <div className='component'>
        <Select defaultValue='Elephant'>
          <MenuItem value='Elephant'>Elephant</MenuItem>
          <MenuItem value='Tiger'>Tiger</MenuItem>
        </Select>
      </div>
      <div className='code'>
        <SyntaxHighlighter language='javascript' style={tomorrowNightBlue}>{code}</SyntaxHighlighter>
      </div>
    </>
  )
}

export default MaterialSelectBox
