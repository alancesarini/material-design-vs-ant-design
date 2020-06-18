import React from 'react'
import { Alert } from 'antd'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { tomorrowNightBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const AntAlert = () => {
  const code = `import { Alert } from "antd"
  
<Alert message="This is an error alert" type="error" showIcon />
<Alert message="This is an warning alert" type="warning" showIcon />
<Alert message="This is an info alert" type="info" showIcon />
<Alert message="This is an success alert" type="success" showIcon />`

  return (
    <>
      <h2>Ant Design</h2>
      <div className='component'>
        <Alert message='This is an error alert' type='error' showIcon />
        <Alert message='This is a warning alert' type='warning' showIcon />
        <Alert message='This is an info alert' type='info' showIcon />
        <Alert message='This is a success alert' type='success' showIcon />
      </div>
      <div className='code'>
        <SyntaxHighlighter language='javascript' style={tomorrowNightBlue}>{code}</SyntaxHighlighter>
      </div>
    </>
  )
}

export default AntAlert
