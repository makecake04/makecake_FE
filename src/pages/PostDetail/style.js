import styled from "styled-components";

export const Container = styled.div`
  height: 784px;
  position: relative;
  overflow-y: auto;
  .header {
    padding: 2rem 0;
    display: flex;

    align-items: center;
    border-bottom: 1px solid #e5e5e5;
  }

  .backButton {
  }

  .headerText {
    margin-left: 135px;
    vertical-align: middle;
  }

  .body {
    /* width: 390px;
    height: 626px; */
    /* background: orange; */
  }

  .headerInBody {
    display: flex;
  }

  .profileImage {
    width: 40px;
    height: 40px;
    margin-top: 15px;
    margin-left: 24px;
    img {
      border-radius: 50%;
    }
  }

  .edit-delete-buttons {
    .edit-button {
      color: #777777;
      border: 1px solid #777777;
      border-radius: 5rem;
      width: 6.4rem;
      font-size: 1.2rem;
      padding: 1rem 1rem;
      margin: 1.8rem 0 0 8rem;
    }
    .delete-button {
      color: #e10000;
      border: 1px solid #e10000;
      border-radius: 5rem;
      width: 6.4rem;
      font-size: 1.2rem;
      padding: 1rem 1rem;
    }
    button + button {
      margin-left: 1.2rem;
    }
  }

  .date {
    /* height: 17px; */
    color: #777777;
    font-size: 12px;
    margin-top: 16px;
    margin-left: 5px;
  }

  .nickname {
    width: 80px;
    height: 20px;
    color: #282828;
    font-size: 14px;
    margin-top: 32px;
    margin-left: -60px;
  }

  .imgContainer {
    padding: 1.7rem;
    .img {
      border-radius: 0.4rem;
    }
  }
  .img-bottom-line {
    display: flex;
    justify-content: space-between;
    .likeAndEyeContainer {
      /* display: flex; */
      p + svg {
        margin-left: 1rem;
      }
    }
    .options {
      button {
        color: #ff679e;
        background-color: rgba(255, 103, 158, 0.1);
        border-radius: 9rem;
        border: none;
        font-size: 1.2rem;
        padding: 0.3rem 1.1rem;
        margin-top: 0.2rem;
      }
    }
  }
  .likeAndEyeContainer {
    display: flex;
    p + svg {
      margin-left: 1rem;
    }
  }
  .options {
    padding-right: 1.6rem;
    display: flex;
    justify-content: flex-end;
    button {
      color: #ff679e;
      background-color: rgba(255, 103, 158, 0.1);
      border-radius: 9rem;
      border: none;
      font-size: 1.2rem;
      padding: 0.3rem 1.1rem;
      margin-left: 1rem;
    }
  }
  .heart {
    margin-left: 24px;
  }

  .likeCnt {
    margin-left: 5px;
    margin-top: 5px;
  }

  .eye {
    margin-top: 4px;
    margin-left: 5px;
  }

  .seeCnt {
    margin-top: 5px;
    margin-left: 5px;
  }

  .titleText {
    color: #000000;
    font-size: 18px;
    padding: 1.5rem 2.5rem 0.5rem;
  }

  .content {
    padding: 1rem 3rem;
    color: #777777;
    font-size: 14px;
    /* height: 100%; */
    line-height: 2rem;
    /* /* overflow-y: hidden; */
    overflow: auto;
  }

  .commentContainer {
    padding: 0.7rem 3rem;
  }

  .commentText {
    font-size: 18px;
    color: #000000;
    padding-bottom: 1rem;
  }

  .commentCnt {
    color: #ff679e;
  }

  .inputComment {
    width: 100%;
    height: 39px;
    background: rgba(249, 201, 201, 0.2);
    outline: none;
    font-size: 12px;
    padding: 1rem;
    border: none;
  }

  .inputComment::placeholder {
    color: rgba(255, 103, 158, 0.44);
  }

  .submit {
    border: none;
    position: absolute;
    right: 4rem;
    padding-top: 1rem;
  }
`;
