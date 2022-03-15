import React from 'react'
import { NaverMap, Marker} from 'react-naver-maps';
import { useSelector } from 'react-redux';

function NaverMapAPI() {

    const navermaps = window.naver.maps;
    // const searchsX = useSelector((state) => state.search.list.map((l, i) => l[i].storeId))
    // const searchsY = useSelector((state) => state.search.list.map((l, i) => l[i].y))
    // console.log(searchsX)
    const list = useSelector((state) => state.search.list)
    console.log(list.map(a=>a.x),list.map(a=>a.y))
    const firstY = list[0].y
    const firstX = list[0].x
    
    return (
      <NaverMap
        mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
        style={{
          width: '100%', // 네이버지도 가로 길이
          height: '545px', // 네이버지도 세로 길이
          borderTop: '1px solid lightgray',
          borderBottom: '1px solid lightgray'
        }}
        defaultCenter={{ lat: firstY, lng: firstX }} // 지도 초기 위치
        defaultZoom={12} // 지도 초기 확대 배율
      >
    {list.map((a) => {
    return(

    <Marker
      key={a.storeId}    
      position={new navermaps.LatLng(a.y, a.x)}
      animation={0}
      onClick={() => {alert('여기는 두두케이크입니다.');}}
    />)
    })}

    </NaverMap>
    );
}

export default NaverMapAPI
