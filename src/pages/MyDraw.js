import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as WritingSvg } from "../svg/writing.svg";

const MyDraw = (props) => {
  const navigate = useNavigate();
  const [toggleState, setToggleState] = React.useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <MyDrawWrap>
      <div>
        <div className="title">
          <FontAwesomeIcon
            icon={faAngleLeft}
            className="left"
            onClick={() => {
              navigate(`/mypage`);
            }}
          />
          <h3>내가 그린 도안</h3>
        </div>
        <hr />
        <div className="container">
          <div className="bloc-tabs">
            <button
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}
            >
              작성된 도안
            </button>
            <button
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}
            >
              작성되지 않은 도안
            </button>
          </div>
          <div className="content-tabs">
            <div className={toggleState === 1 ? "active-content" : "content"}>
              <div className="img_wrap">
                <img src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20210119_285%2F1611062747978xN03M_JPEG%2Fupload_f69f8a2c9ea06efa16fea9da41387abb.jpeg"></img>
              </div>
              <div className="img_wrap">
                <img src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20201224_220%2F1608771619144XHuGr_JPEG%2Fupload_5f61471841235b3cde5fb8871ed33df8.jpeg"></img>
              </div>
              <div className="img_wrap">
                <img src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAzMTdfMTkx%2FMDAxNjE1OTkxOTcyOTYz.KEB7mwrM5zNiSIXgwGjp_3c2wq44D6bKj1jhQwLhmHIg.4BdlsCSBCOmn5YIOKbBNYicOu9XnKvv9dWUFQQ8PlCcg.JPEG.yejin9302%2F2BD3B5E1-0641-4A86-987E-E326482CB6C5.jpg"></img>
              </div>
              <div className="img_wrap">
                <img src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20201222_235%2F1608610159576EeMFS_JPEG%2Fupload_50cea665d3be1a79ae2957803b79f951.jpeg"></img>
              </div>
              <div className="img_wrap">
                <img src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20201221_35%2F1608518121134zGA2Y_JPEG%2Fupload_823e0a310acd88eb651b6e8a6ad20e45.jpg"></img>
              </div>
              <div className="img_wrap">
                <img src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20201028_13%2F1603857476340CYTN4_JPEG%2Fupload_79960a96ea4fbf68b367310b9aed5894.jpg"></img>
              </div>
              <div className="img_wrap">
                <img src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20201104_284%2F1604488357797LroI9_JPEG%2Fupload_b506db3790bcd2f21db3f82fe930cab3.jpg"></img>
              </div>
              <div className="img_wrap">
                <img src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210529_77%2F162221632169812df5_JPEG%2FbNZY5g9l-SoxxWUId04brpJg.jpg"></img>
              </div>
              <div className="img_wrap">
                <img src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210528_125%2F1622212613687XKcgw_JPEG%2FUVj0G8PL6HlsonNQZAXJfNmy.jpg"></img>
              </div>
              <div className="img_wrap">
                <img src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210528_2%2F1622212413821I5DjC_JPEG%2FVxVSgwN7KmXBg_U3b48HZn7w.jpg"></img>
              </div>
              <div className="img_wrap">
                <img src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20211026_248%2F1635186024910MlNE4_JPEG%2Fupload_a731022f4cca00aa84a67f5ee07face3.jpg"></img>
              </div>
              <div className="img_wrap">
                <img src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210528_86%2F1622213297277xvsqA_JPEG%2FUi6GUi7Wdq1DQAa7IjPalphu.jpg"></img>
              </div>
              <div className="img_wrap">
                <img src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20210815_70%2F16290307310817bC2R_JPEG%2Fupload_52d61b3cee3b2c60b9a0f62e8481d724.jpg"></img>
              </div>
              <div className="img_wrap">
                <img src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210528_176%2F16222137451111I4cD_JPEG%2FXgglzfBnxrWaS5Z72wOK3RF0.jpg"></img>
              </div>
              <div className="img_wrap">
                <img src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20210811_138%2F1628691796426GhP3X_JPEG%2Fupload_0699f35f840dc9339af8bdcaf41a6972.jpg"></img>
              </div>
            </div>

            <div className={toggleState === 2 ? "active-content" : "content"}>
              <div className="img_wrap">
                <img src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20201222_235%2F1608610159576EeMFS_JPEG%2Fupload_50cea665d3be1a79ae2957803b79f951.jpeg"></img>
              </div>
              <div className="img_wrap">
                <img src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20201221_35%2F1608518121134zGA2Y_JPEG%2Fupload_823e0a310acd88eb651b6e8a6ad20e45.jpg"></img>
              </div>
              <div className="img_wrap">
                <img src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20201028_13%2F1603857476340CYTN4_JPEG%2Fupload_79960a96ea4fbf68b367310b9aed5894.jpg"></img>
              </div>
              <div className="img_wrap">
                <img src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20201104_284%2F1604488357797LroI9_JPEG%2Fupload_b506db3790bcd2f21db3f82fe930cab3.jpg"></img>
              </div>
              <div className="img_wrap">
                <img src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210529_77%2F162221632169812df5_JPEG%2FbNZY5g9l-SoxxWUId04brpJg.jpg"></img>
              </div>
              <div className="img_wrap">
                <img src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210528_125%2F1622212613687XKcgw_JPEG%2FUVj0G8PL6HlsonNQZAXJfNmy.jpg"></img>
              </div>
              <div className="img_wrap">
                <img src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210528_2%2F1622212413821I5DjC_JPEG%2FVxVSgwN7KmXBg_U3b48HZn7w.jpg"></img>
              </div>
              <div className="img_wrap">
                <img src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20211026_248%2F1635186024910MlNE4_JPEG%2Fupload_a731022f4cca00aa84a67f5ee07face3.jpg"></img>
              </div>
              <div className="img_wrap">
                <img src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210528_86%2F1622213297277xvsqA_JPEG%2FUi6GUi7Wdq1DQAa7IjPalphu.jpg"></img>
              </div>
              <div className="img_wrap">
                <img src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20210815_70%2F16290307310817bC2R_JPEG%2Fupload_52d61b3cee3b2c60b9a0f62e8481d724.jpg"></img>
              </div>
              <div className="img_wrap">
                <img src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210528_176%2F16222137451111I4cD_JPEG%2FXgglzfBnxrWaS5Z72wOK3RF0.jpg"></img>
              </div>
              <div className="img_wrap">
                <img src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20210811_138%2F1628691796426GhP3X_JPEG%2Fupload_0699f35f840dc9339af8bdcaf41a6972.jpg"></img>
              </div>
              <div className="img_wrap">
                <img src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20211026_248%2F1635186024910MlNE4_JPEG%2Fupload_a731022f4cca00aa84a67f5ee07face3.jpg"></img>
              </div>
              <div className="img_wrap">
                <img src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210528_86%2F1622213297277xvsqA_JPEG%2FUi6GUi7Wdq1DQAa7IjPalphu.jpg"></img>
              </div>
              <div className="img_wrap">
                <img src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20210815_70%2F16290307310817bC2R_JPEG%2Fupload_52d61b3cee3b2c60b9a0f62e8481d724.jpg"></img>
              </div>
              <WritingSvg className="write" />
            </div>
          </div>
        </div>
      </div>
    </MyDrawWrap>
  );
};

const MyDrawWrap = styled.div`
  .title {
    margin: 40px 0px 20px 30px;
    display: flex;
    align-items: center;
  }
  .left {
    color: #646464;
    margin: 0px 80px 0px 0px;
  }

  h3 {
    font-weight: 700;
    font-size: 19px;
    color: #282828;
  }

  hr {
    border: 0.7px solid #e5e5e5;
    width: 100%;
  }

  .img_wrap {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
  }

  img {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    object-fit: cover;
  }

  .bloc-tabs {
    display: flex;
    margin: 0px 20px;
  }
  .tabs {
    padding: 15px;
    text-align: center;
    width: 50%;
    background: #fff;
    cursor: pointer;
    border-bottom: 2px solid #e5e5e5;
    box-sizing: content-box;
    outline: none;
    font-size: 15px;
    font-weight: 400;
    color: #777;
  }

  .active-tabs {
    background: #fff;
    padding: 15px;
    text-align: center;
    width: 50%;
    cursor: pointer;
    border-bottom: 2px solid #ff679e;
    box-sizing: content-box;
    outline: none;
    font-size: 15px;
    font-weight: 400;
    color: #ff679e;
  }

  .active-tabs::before {
    content: "";
    display: block;
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% + 2px);
    height: 5px;
    background: #fff;
  }

  button {
    border: none;
  }

  .content-tabs {
    flex-grow: 1;
  }

  .content {
    background: #fff;
    padding: 20px;
    width: 100%;
    height: 100%;
    border: none;
    display: none;
  }

  .active-content {
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 20px;
    gap: 20px;
    margin-top: 10px;
  }

  .write {
    display: flex;
    position: absolute;
    right: 20px;
    bottom: 0px;
    width: 60px;
    height: 60px;
    border-radius: 60px;
    justify-content: center;
    align-items: center;
  }
`;

export default MyDraw;
