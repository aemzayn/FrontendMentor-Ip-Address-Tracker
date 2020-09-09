import React, { useState } from 'react'
import Info from './Info'

const Header = ({ data, setQuery }) => {
  const [value, setValue] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = e => {
    setValue(e.target.value)
  }

  const handleClick = () => {
    if (
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
        value
      )
    ) {
      setErrorMsg('')
      setQuery(value)
      return true
    }
    setErrorMsg(`${value} is not a correct ip address`)
    setValue('')
    return false
  }

  return (
    <header className='header'>
      <h1>IP Address Tracker</h1>

      <div className='search' id='search'>
        <input
          type='text'
          placeholder='Search for any IP address'
          aria-labelledby='search'
          name='text'
          aria-label='Search for any IP address or domain'
          title='Search for any IP address or domain'
          value={value}
          onChange={handleChange}
        />

        <button className='search-btn' onClick={handleClick}>
          <img src={require('../images/icon-arrow.svg')} alt='icon arrow' />
        </button>
      </div>

      {errorMsg && (
        <span className='error'>
          {errorMsg}
          <button onClick={() => setErrorMsg('')}>
            <img src={require('../images/icon-remove.svg')} alt='icon-remove' />
          </button>
        </span>
      )}

      <Info data={data} />
    </header>
  )
}

export default Header
