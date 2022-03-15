import React, { useState } from 'react'
import styled from 'styled-components'
import { RenderAfterNavermapsLoaded } from 'react-naver-maps';
import NaverMapAPI from '../components/NaverMapAPI';
import { useDispatch, useSelector } from 'react-redux';

const SearchMap = () => {

    const dispatch = useDispatch();
    const [placeInput, setPlaceInput] = useState("");
    const [searchKeyword, setSearchKeyword] = useState("");

    const onSearchKeywordChange = (e) => {
        setPlaceInput(e.target.value);
      };
    
    const searchPlace = () => {
    setSearchKeyword(placeInput);
    };

    const searchs = useSelector((state) => state.search.list);
    console.log(searchs)
   

    return(
    <Container>
        <div className='header'>
                <svg className='direction' width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

            <div className='inputWrap'>
                <select className='select'>
                    <option>플레이스</option>
                    <option>매장</option>
                    <option>주소</option>
                </select>

                <input className='input' type="text"></input>

                <svg className='inputButton' width="24" height="29" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#777777" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M20.9999 20.9999L16.6499 16.6499" stroke="#777777" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        </div>

        <div className='sortType'>
            <div className='starIcon'>
                <svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.31937 1.63361C3.69098 0.489905 5.30902 0.489905 5.68063 1.63361C5.84682 2.14509 6.32346 2.49139 6.86126 2.49139C8.06383 2.49139 8.56383 4.03024 7.59093 4.73708C7.15584 5.0532 6.97378 5.61352 7.13997 6.125C7.51159 7.26871 6.20256 8.21976 5.22967 7.51292C4.79458 7.1968 4.20542 7.1968 3.77033 7.51292C2.79744 8.21976 1.48842 7.26871 1.86003 6.125C2.02622 5.61352 1.84416 5.0532 1.40907 4.73708C0.436172 4.03024 0.936174 2.49139 2.13874 2.49139C2.67654 2.49139 3.15318 2.14509 3.31937 1.63361Z" fill="#B3B3B3"/>
                </svg>

                <h3 className='like'>&nbsp; 인기순</h3>
            </div>

            <div className='starIcon'>
                <svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.31937 1.63361C3.69098 0.489905 5.30902 0.489905 5.68063 1.63361C5.84682 2.14509 6.32346 2.49139 6.86126 2.49139C8.06383 2.49139 8.56383 4.03024 7.59093 4.73708C7.15584 5.0532 6.97378 5.61352 7.13997 6.125C7.51159 7.26871 6.20256 8.21976 5.22967 7.51292C4.79458 7.1968 4.20542 7.1968 3.77033 7.51292C2.79744 8.21976 1.48842 7.26871 1.86003 6.125C2.02622 5.61352 1.84416 5.0532 1.40907 4.73708C0.436172 4.03024 0.936174 2.49139 2.13874 2.49139C2.67654 2.49139 3.15318 2.14509 3.31937 1.63361Z" fill="#B3B3B3"/>
                </svg>

                <h3 className='like'>&nbsp; 리뷰순</h3>
            </div>
        </div>

        <RenderAfterNavermapsLoaded
            ncpClientId={'l5adgpst5d'} // 자신의 네이버 계정에서 발급받은 Client ID
            error={<p>Maps Load Error</p>}
            loading={<p>Maps Loading...</p>}
        >
            <NaverMapAPI/>
        </RenderAfterNavermapsLoaded>

        <div className='storeInformation'>
            <div>
                <div className='img'></div>
            </div>
            <h3 className='store'>끌레르 봉봉</h3>
            <p className='addressAndOpneClose'>서울 강남구 신사동 / 영업중</p>
            <p className='likeAndReview'>좋아요 0 리뷰 0</p>
        </div>
    </Container>
    )
}

const Container = styled.div`
    
    .header {
        display: flex;
        width: 100%;
        height: 15vh;
        background-color: #F9C9C9;
    }

    .direction {
        margin-top: 70px;
        margin-left: 20px;
    }

    .inputWrap {
        display: flex;
        border: none;
        width: 75%;
        height: 15vh;
    }

    .select {
        height: 29px;
        margin-top: 77px;
        border: none;
        color: #777777;
        text-align: center;
        background-color: white;
    }

    .input {
        display: block;
        margin-top: 77px;
        width: 95%;
        height: 27px;
        border: none;
        padding-left: 10px;
    }

    .inputButton {
        margin-top: 77px;
        background-color: #FFFFFF;
        
    }

    .sortType {
        display: flex;
    }

    .starIcon {
        display: flex;
        margin-top: 20px;
        margin-left: 15px;
    }

    .like {
        color: #B3B3B3;
        margin-top: -5px;
        font-size: 14px;
    }

    .storeInformation {
        display: flex;

    }

    .img {
        width: 89px;
        height: 89px;
        background-color: #C4C4C4;
        border-radius: 10px;
        margin-top: 17px;
        margin-left: 17px;
    }

    .store {
        display: flex;
        font-size: 19px;
        margin-left: 20px;
        width: 340px;
    }

    .addressAndOpneClose {
        width: 355px;
        color: #9C9CDC;
        font-size: 13px;
        margin-top: 46px;
        margin-left: -162px;
    }

    .likeAndReview {
        color: #777777;
        width: 200px;
        font-size: 13px;
        margin-top: 80px;
    }
`;

export default SearchMap;