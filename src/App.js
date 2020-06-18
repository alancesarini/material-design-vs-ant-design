import React, { useState } from 'react'
import { Tabs, Tab } from '@material-ui/core'

import MaterialButton from './components/buttons/MaterialButton'
import AntButton from './components/buttons/AntButton'
import MaterialTextField from './components/textfields/MaterialTextField'
import AntTextField from './components/textfields/AntTextField'
import MaterialCheckbox from './components/checkboxes/MaterialCheckbox'
import AntCheckbox from './components/checkboxes/AntCheckbox'

import 'antd/dist/antd.css'
import './App.css'

const TabPanel = (props) => {
  const { children, value, index, ...other } = props

  return (
    <div
      className='panel'
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <>{children}</>
      )}
    </div>
  )
}

function App () {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className='App'>
      <Tabs
        orientation='vertical'
        variant='scrollable'
        value={value}
        onChange={handleChange}
        className='tabs'
      >
        <Tab label='Buttons' />
        <Tab label='Text fields' />
        <Tab label='Checkboxes' />
      </Tabs>

      <TabPanel value={value} index={0}>
        <div className='section'>
          <MaterialButton />
        </div>
        <div className='section'>
          <AntButton />
        </div>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <div className='section'>
          <MaterialTextField />
        </div>
        <div className='section'>
          <AntTextField />
        </div>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <div className='section'>
          <MaterialCheckbox />
        </div>
        <div className='section'>
          <AntCheckbox />
        </div>
      </TabPanel>
    </div>
  )
}

export default App
