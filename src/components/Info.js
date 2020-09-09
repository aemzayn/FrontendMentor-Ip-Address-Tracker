import React from 'react'

const Info = ({ data }) => {
  return (
    <div className='info'>
      <div>
        <div>
          <h2>IP ADDRESS</h2>
          <h1>{data ? data.ip : 'Loading...'}</h1>
        </div>
      </div>
      <div>
        <div>
          <h2>LOCATION</h2>
          <h1>{data ? data.location : 'Loading...'}</h1>
        </div>
      </div>
      <div>
        <div>
          <h2>TIMEZONE</h2>
          <h1>{data ? `UTC ${data.timezone}` : 'Loading...'}</h1>
        </div>
      </div>
      <div>
        <div>
          <h2>ISP</h2>
          <h1>{data ? data.isp : 'Loading...'}</h1>
        </div>
      </div>
    </div>
  )
}

export default Info
