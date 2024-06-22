import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../Context/UserContext';
import { ItemContext } from '../Context/ItemContext';
import { LocationContext } from '../Context/LocationContext';
import { ImLocation } from 'react-icons/im';
import GoogleMapReact from 'google-map-react';
import { GOOGLE_MAP_API_KEY } from '../../env';

const Mapbox = ({ width, height }) => {
  const { user } = useContext(UserContext);
  const { location } = useContext(LocationContext);
  const { items } = useContext(ItemContext);
  console.log(items);
  const [viewport, setViewport] = useState({
    center: {
      lat: 20.275845,
      lng: 85.776639,
    },
    zoom: 11,
  });

  const showInMapClicked = (address) => {
    !!address && address?.house
      ? window.open(
          `https://www.google.com/maps/dir/?api=1&destination=${address?.house}, ${address?.area}, ${address?.city}, ${address?.state}, ${address?.pincode}`
        )
      : window.open(
          `https://www.google.com/maps/dir/?api=1&destination=${address?.area}, ${address?.city}, ${address?.state}, ${address?.pincode}`
        );
  };

  return (
    <div style={{ height: '65vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: 'AIzaSyDyfP6ISLisAkBON9Faek0xDaoVPd2Eiu0',
        }}
        defaultCenter={viewport.center}
        defaultZoom={viewport.zoom}
      >
        {items &&
          !!items.length &&
          items.map((item) => (
            <ImLocation
              key={item?._id}
              onClick={() => showInMapClicked(item?.address)}
              style={{ color: '#1e90ff', fontSize: '3.9rem' }}
              lat={item?.location?.lat}
              lng={item?.location?.lon}
            />
          ))}
        {
          <ImLocation
            style={{ color: '#8c0', fontSize: '3.3rem' }}
            lat={viewport.center.lat}
            lng={viewport.center.lng}
          />
        }
      </GoogleMapReact>
    </div>
  );
};

export default Mapbox;
