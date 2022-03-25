import styled from "styled-components";

export const ReviewWrap = styled.div``;

export const SubWrap = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const Title = styled.h3`
  margin: 20px 0px 0px 0px;
  text-align: start;
  font-weight: 700;
  font-size: 19px;
  color: #282828;
`;

export const CommentWrap = styled.div`
  height: 200px;

  p {
    width: 220px;
    margin-left: 10px;
    margin-bottom: 10px;
    word-break: break-all;
    display: -webkit-box;
    word-wrap: break-word;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const ReviewsWrap = styled.div`
  display: flex;
  padding: 10px 0px;
`;

export const ImageWrap = styled.div`
  width: 55px;
  flex: none;
`;

export const Image = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
`;

export const ImgBox = styled.img`
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
  background: no-repeat;
`;

export const Reviews = styled.div`
  position: relative;
  margin: 0 10px;
  text-align: start;
`;

export const InfoWrap = styled.div`
  display: flex;
  margin: 0px 10px;
`;

export const Name = styled.div`
  margin-right: 10px;
`;

export const CreatedDate = styled.div``;
