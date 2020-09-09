import { useState, useEffect } from 'react'
import Axios from 'axios'

const useMap = ipAddress => {
  const [data, setData] = useState()
  let URL =
    'https://geo.ipify.org/api/v1?apiKey=at_3YfS9ywu4d7ywcfEabtfGMJUgwUu0'

  if (ipAddress) {
    URL = `https://geo.ipify.org/api/v1?apiKey=at_3YfS9ywu4d7ywcfEabtfGMJUgwUu0&ipAddress=${ipAddress}`
  }

  const getApi = async url => {
    const { data } = await Axios.get(url)
    setData({
      ip: data.ip,
      location: data.location.city,
      timezone: data.location.timezone,
      lat: data.location.lat,
      long: data.location.lng,
      isp: data.isp,
    })
  }

  useEffect(() => {
    getApi(URL)
  }, [URL])

  return data
}

export default useMap
