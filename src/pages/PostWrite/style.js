import styled from "styled-components";

export const WriteWrap = styled.div`
  width: 100%;
  margin: 0 auto;
  overflow-y: auto;
  height: 784px;
  padding-bottom: 3rem;
  .header {
    margin: 0px 0px 20px 30px;
    padding: 4rem 3rem 0 0;
    display: flex;
    align-items: center;
    .back-icon {
      color: #646464;
      margin-right: 7.7rem;
      font-size: 2.3rem;
    }
    h3 {
      margin-left: 2.2rem;
      font-weight: 700;
      font-size: 19px;
      color: #282828;
    }
    p {
      color: #ff8fa5;
      font-size: 1.8rem;
      padding-left: 6.5rem;
    }
  }

  hr {
    border: 0.7px solid #e5e5e5;
    width: 100%;
  }

  .title {
    display: flex;
    padding: 0.8rem 0.5rem 1rem 1.5rem;
    .title-input {
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
  }

  .comment {
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
  }

  .design-img {
    margin: 3rem 3rem;
  }
  .options {
    padding: 0 3rem;
    h3 {
      font-size: 1.9rem;
      font-weight: 700;
      color: #282828;
      /* padding-left: 1rem; */
    }
    h3 + button {
      margin-top: 1rem;
    }
    div + div {
      margin-top: 1.5rem;
    }
    button {
      color: #777777;
      /* background-color: rgba(196, 196, 196, 0.16); */
      background-color: rgba(196, 196, 196, 0.16);
      border-radius: 9rem;
      border: none;
      font-size: 1.5rem;
      padding: 0.5rem 1.2rem;
      margin-left: 1rem;
    }
  }
`;
