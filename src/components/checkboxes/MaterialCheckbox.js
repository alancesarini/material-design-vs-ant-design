import React from 'react'
import { Checkbox, FormControlLabel } from '@material-ui/core'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { tomorrowNightBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const MaterialCheckbox = () => {
  const code = `import { Checkbox, FormControlLabel } from "@material-ui/core"

<FormControlLabel
  control={<Checkbox name="checkbox1" />}
  label="I am Checkbox"
/>`

  return (
    <>
      <h2>Material Design</h2>
      <div className='component'>
        <FormControlLabel
          control={<Checkbox name='checkbox1' />}
          label='I am Checkbox'
        />
      </div>
      <div className='code'>
        <SyntaxHighlighter language='javascript' style={tomorrowNightBlue}>{code}</SyntaxHighlighter>
      </div>
    </>
  )
}

export default MaterialCheckbox
