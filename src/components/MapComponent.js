import React, { useEffect, useState } from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import { Icon } from 'leaflet'
import icon from '../images/icon-location.svg'

export const MapComponent = ({ data }) => {
  const [position, setPosition] = useState([51.505, -0.09])

  const locationIcon = new Icon({
    iconUrl: icon,
    iconSize: [30, 40],
  })

  useEffect(() => {
    if (data) {
      setMapPosition(data.lat, data.long)
    }
  }, [data])

  const setMapPosition = (lat, long) => {
    setPosition([lat, long])
  }

  return (
    <div id='map'>
      <Map center={position} zoom={13}>
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={locationIcon}>
          <Popup>
            A pretty CSS3 popup.
            <br />
            Easily customizable.
          </Popup>
        </Marker>
      </Map>
    </div>
  )
}

export default MapComponent
