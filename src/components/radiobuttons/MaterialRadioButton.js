import React from 'react'
import { Radio, RadioGroup, FormControlLabel } from '@material-ui/core'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { tomorrowNightBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const MaterialCheckbox = () => {
  const code = `import { Radio, RadioGroup, FormControlLabel } from "@material-ui/core"

<RadioGroup name="letters">
  <FormControlLabel value="A" control={<Radio />} label="A" />
  <FormControlLabel value="B" control={<Radio />} label="B" />
  <FormControlLabel value="C" control={<Radio />} label="C" />
</RadioGroup>`

  return (
    <>
      <h2>Material Design</h2>
      <div className='component'>
        <RadioGroup name='letters'>
          <FormControlLabel value='A' control={<Radio />} label='A' />
          <FormControlLabel value='B' control={<Radio />} label='B' />
          <FormControlLabel value='C' control={<Radio />} label='C' />
        </RadioGroup>
      </div>
      <div className='code'>
        <SyntaxHighlighter language='javascript' style={tomorrowNightBlue}>{code}</SyntaxHighlighter>
      </div>
    </>
  )
}

export default MaterialCheckbox
