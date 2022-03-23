import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  overflow: scroll;
  height: calc(100% - 6rem);
  box-sizing: border-box;
  padding-bottom: 2rem;
`;

export const Header = styled.header`
  padding: 2rem 0;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e5e5e5;
  img {
    margin-left: 3%;
  }
  h3 {
    margin-left: 22%;
    vertical-align: middle;
  }

  span {
    color: #ff8fa5;
    font-size: 1.8rem;
    padding-left: 6.8rem;
  }
`;

export const Title = styled.title`
  display: flex;
  padding: 0.8rem 0.5rem 1rem 1.5rem;
  input {
    display: flex;
    width: 100%;
    height: 3.5rem;
    border: none;
    font-size: 1.8rem;
    outline: none;
    &::placeholder {
      color: #e5e5e5;
      font-weight: 700;
    }
  }
`;

export const Content = styled.div`
  textarea {
    width: 32.2rem;
    height: 6rem;
    overflow: scroll;
    font-size: 1.4rem;
    border: none;
    outline: none;
    margin: 0 3rem;
    &::placeholder {
      color: #777777;
    }
  }
`;

export const DesignImage = styled.div`
  margin: 3rem 3rem;
`;

export const Options = styled.section`
  padding: 0 3rem;
`;

export const Size = styled.div`
  margin-bottom: 1.5rem;
  h3 {
    font-size: 1.9rem;
    font-weight: 700;
    color: #282828;
  }
  h3 + button {
    margin-top: 1rem;
  }

  button {
    border-radius: 9rem;
    border: none;
    font-size: 1.5rem;
    padding: 0.5rem 1.2rem;
    font-weight: 700;
    margin-left: 1rem;
  }
`;

export const Shape = styled(Size)``;
export const Purpose = styled(Size)``;
export const Made = styled(Size)``;

export const MiniSize = styled.button`
  ${(props) =>
    (props.size || props.postSize) === "도시락"
      ? css`
          background-color: rgba(255, 103, 158, 0.1);
          color: #ff679e;
        `
      : css`
          background-color: rgba(196, 196, 196, 0.16);
          color: #777777;
        `}
`;
export const OneSize = styled.button`
  ${(props) =>
    (props.size || props.postSize) === "1호"
      ? css`
          background-color: rgba(255, 103, 158, 0.1);
          color: #ff679e;
        `
      : css`
          background-color: rgba(196, 196, 196, 0.16);
          color: #777777;
        `}
`;
export const TwoSize = styled.button`
  ${(props) =>
    (props.size || props.postSize) === "2호"
      ? css`
          background-color: rgba(255, 103, 158, 0.1);
          color: #ff679e;
        `
      : css`
          background-color: rgba(196, 196, 196, 0.16);
          color: #777777;
        `}
`;
export const ThreeSize = styled.button`
  ${(props) =>
    (props.size || props.postSize) === "3호"
      ? css`
          background-color: rgba(255, 103, 158, 0.1);
          color: #ff679e;
        `
      : css`
          background-color: rgba(196, 196, 196, 0.16);
          color: #777777;
        `}
`;
export const OtherSize = styled.button`
  ${(props) =>
    (props.size || props.postSize) === "기타"
      ? css`
          background-color: rgba(255, 103, 158, 0.1);
          color: #ff679e;
        `
      : css`
          background-color: rgba(196, 196, 196, 0.16);
          color: #777777;
        `}
`;

export const Square = styled.button`
  ${(props) =>
    (props.shape || props.postShape) === "네모"
      ? css`
          background-color: rgba(255, 103, 158, 0.1);
          color: #ff679e;
        `
      : css`
          background-color: rgba(196, 196, 196, 0.16);
          color: #777777;
        `}
`;
export const Heart = styled.button`
  ${(props) =>
    (props.shape || props.postShape) === "하트"
      ? css`
          background-color: rgba(255, 103, 158, 0.1);
          color: #ff679e;
        `
      : css`
          background-color: rgba(196, 196, 196, 0.16);
          color: #777777;
        `}
`;
export const Circle = styled.button`
  ${(props) =>
    (props.shape || props.postShape) === "원형"
      ? css`
          background-color: rgba(255, 103, 158, 0.1);
          color: #ff679e;
        `
      : css`
          background-color: rgba(196, 196, 196, 0.16);
          color: #777777;
        `}
`;
export const Birthday = styled.button`
  ${(props) =>
    (props.purpose || props.postPurpose) === "생일"
      ? css`
          background-color: rgba(255, 103, 158, 0.1);
          color: #ff679e;
        `
      : css`
          background-color: rgba(196, 196, 196, 0.16);
          color: #777777;
        `}
`;
export const Parents = styled.button`
  ${(props) =>
    (props.purpose || props.postPurpose) === "부모님"
      ? css`
          background-color: rgba(255, 103, 158, 0.1);
          color: #ff679e;
        `
      : css`
          background-color: rgba(196, 196, 196, 0.16);
          color: #777777;
        `}
`;
export const Friends = styled.button`
  ${(props) =>
    (props.purpose || props.postPurpose) === "친구"
      ? css`
          background-color: rgba(255, 103, 158, 0.1);
          color: #ff679e;
        `
      : css`
          background-color: rgba(196, 196, 196, 0.16);
          color: #777777;
        `}
`;
export const Lovers = styled.button`
  ${(props) =>
    (props.purpose || props.postPurpose) === "연인"
      ? css`
          background-color: rgba(255, 103, 158, 0.1);
          color: #ff679e;
        `
      : css`
          background-color: rgba(196, 196, 196, 0.16);
          color: #777777;
        `}
`;
export const Celebration = styled.button`
  ${(props) =>
    (props.purpose || props.postPurpose) === "축하"
      ? css`
          background-color: rgba(255, 103, 158, 0.1);
          color: #ff679e;
        `
      : css`
          background-color: rgba(196, 196, 196, 0.16);
          color: #777777;
        `}
`;

export const NewPostMadeTrue = styled.button`
  ${(props) =>
    props.made
      ? css`
          background-color: rgba(255, 103, 158, 0.1);
          color: #ff679e;
        `
      : css`
          background-color: rgba(196, 196, 196, 0.16);
          color: #777777;
        `}
`;

export const NewPostMadeFalse = styled.button`
  ${(props) =>
    props.made
      ? css`
          background-color: rgba(196, 196, 196, 0.16);
          color: #777777;
        `
      : css`
          background-color: rgba(255, 103, 158, 0.1);
          color: #ff679e;
        `}
`;

export const EditPostMadeTrue = styled.button`
  ${(props) =>
    props.made
      ? css`
          background-color: rgba(255, 103, 158, 0.1);
          color: #ff679e;
        `
      : css`
          background-color: rgba(196, 196, 196, 0.16);
          color: #777777;
        `}
`;

export const EditPostMadeFalse = styled.button`
  ${(props) =>
    props.made
      ? css`
          background-color: rgba(196, 196, 196, 0.16);
          color: #777777;
        `
      : css`
          background-color: rgba(255, 103, 158, 0.1);
          color: #ff679e;
        `}
`;
