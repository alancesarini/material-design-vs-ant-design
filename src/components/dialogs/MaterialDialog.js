import React, { useState } from 'react'
import { Dialog, DialogTitle, DialogActions, Button } from '@material-ui/core'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { tomorrowNightBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const MaterialDialog = () => {
  const [open, setOpen] = useState(false)

  const code = `import { Dialog, DialogTitle, DialogActions } from "@material-ui/core"

<Dialog onClose={handleClose} open={open}>
  <DialogTitle>Dialog title</DialogTitle>
  <p>I am Dialog</p>
  <DialogActions>
    <Button onClick={handleClose}>Accept</Button>
    <Button onClick={handleClose}>Cancel</Button>
  </DialogActions>
</Dialog>`

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <h2>Material Design</h2>
      <div className='component'>
        <Dialog onClose={handleClose} open={open}>
          <DialogTitle>Dialog title</DialogTitle>
          <p style={{ padding: '20px' }}>I am Dialog</p>
          <DialogActions>
            <Button onClick={handleClose}>Accept</Button>
            <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </Dialog>
        <Button variant='contained' onClick={() => setOpen(true)}>Open dialog</Button>
      </div>
      <div className='code'>
        <SyntaxHighlighter language='javascript' style={tomorrowNightBlue}>{code}</SyntaxHighlighter>
      </div>
    </>
  )
}

export default MaterialDialog
