import React, { useState } from 'react'
import { Tabs, Tab } from '@material-ui/core'

import MaterialButton from './components/buttons/MaterialButton'
import AntButton from './components/buttons/AntButton'
import MaterialTextField from './components/textfields/MaterialTextField'
import AntTextField from './components/textfields/AntTextField'
import MaterialCheckbox from './components/checkboxes/MaterialCheckbox'
import AntCheckbox from './components/checkboxes/AntCheckbox'
import MaterialRadioButton from './components/radiobuttons/MaterialRadioButton'
import AntRadioButton from './components/radiobuttons/AntRadioButton'
import MaterialSelectBox from './components/selectboxes/MaterialSelectBox'
import AntSelectBox from './components/selectboxes/AntSelectBox'
import MaterialAlert from './components/alerts/MaterialAlert'
import AntAlert from './components/alerts/AntAlert'

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
        <Tab label='Radio buttons' />
        <Tab label='Select boxes' />
        <Tab label='Alerts' />
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

      <TabPanel value={value} index={3}>
        <div className='section'>
          <MaterialRadioButton />
        </div>
        <div className='section'>
          <AntRadioButton />
        </div>
      </TabPanel>

      <TabPanel value={value} index={4}>
        <div className='section'>
          <MaterialSelectBox />
        </div>
        <div className='section'>
          <AntSelectBox />
        </div>
      </TabPanel>

      <TabPanel value={value} index={5}>
        <div className='section'>
          <MaterialAlert />
        </div>
        <div className='section'>
          <AntAlert />
        </div>
      </TabPanel>
    </div>
  )
}

export default App
