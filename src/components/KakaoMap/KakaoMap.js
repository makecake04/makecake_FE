/*global kakao*/
import { ArrowDropDownSharp, AssignmentInd, ZoomIn } from "@material-ui/icons";
import React, { useEffect } from "react";
import { Marker } from "react-naver-maps";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

//image
import { pink, grey } from "../../assets/images/image";

//css
import { Container, MapWrap } from "./style";

const KakaoMap = (props) => {
  const storeId = useParams().storeId;
  console.log(storeId);

  const list = useSelector((state) => state.search.list);
  // console.log(
  //   list.map((a) => a.x),
  //   list.map((a) => a.y)
  // );
  console.log(list);

  const storeData = list?.filter((a) => a.storeId === +storeId);
  console.log(storeData);

  const firstY = storeData?.map((a) => a.y);
  const firstX = storeData?.map((a) => a.x);
  console.log(firstY, firstX);

  // const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    var container = document.getElementById("map");
    container.style.width = "100%";
    container.style.height = "59rem";

    var options = {
      center: new kakao.maps.LatLng(firstY, firstX),
      level: 3,
    };

    var imageSrc = pink, // 마커이미지의 주소입니다
      imageSize = new kakao.maps.Size(40, 40), // 마커이미지의 크기입니다
      imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

    var markerImage = new kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imageOption
      ),
      center = new kakao.maps.LatLng(firstY, firstX); // 마커가 표시될 위치입니다

    var imgSrc = grey,
      imgSize = new kakao.maps.Size(30, 30),
      imgOption = { offset: new kakao.maps.Point(27, 69) };
    var markerImg = new kakao.maps.MarkerImage(imgSrc, imgSize, imgOption);

    var map = new kakao.maps.Map(container, options);
    list.forEach((a) => {
      // 마커를 생성합니다
      new kakao.maps.Marker({
        //마커가 표시 될 지도
        map: map,
        //마커가 표시 될 위치
        position: new kakao.maps.LatLng(firstY, firstX),
        //마커에 hover시 나타날 title
        image: a.storeId === +storeId ? markerImage : markerImage,

        // image: markerImage,
        //   image: markerImage,
        title: a.title,
        zIndex: a.storeId === +storeId ? 1 : 0,
        clickable: true,
      });
    });
  }, [firstY, firstX]);

  return (
    <Container>
      <MapWrap id="map" />
    </Container>
  );
};

export default KakaoMap;
