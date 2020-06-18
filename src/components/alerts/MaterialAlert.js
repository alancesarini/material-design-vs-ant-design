import React from 'react'
import { Alert } from '@material-ui/lab'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { tomorrowNightBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const MaterialAlert = () => {
  const code = `import { Alert } from "@material-ui/lab"

<Alert severity="error">This is an error alert</Alert>
<Alert severity="warning">This is a warning alert</Alert>
<Alert severity="info">This is an info alert</Alert>
<Alert severity="success">This is a success alert</Alert>`

  return (
    <>
      <h2>Material Design</h2>
      <div className='component'>
        <Alert severity='error'>This is an error alert</Alert>
        <Alert severity='warning'>This is a warning alert</Alert>
        <Alert severity='info'>This is an info alert</Alert>
        <Alert severity='success'>This is a success alert</Alert>
      </div>
      <div className='code'>
        <SyntaxHighlighter language='javascript' style={tomorrowNightBlue}>{code}</SyntaxHighlighter>
      </div>
    </>
  )
}

export default MaterialAlert
