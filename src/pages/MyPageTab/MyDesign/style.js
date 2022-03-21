import styled from "styled-components";

//image
import { remove_design, write_design } from "../../../assets/images/image";

export const MyDrawWrap = styled.div`
  overflow-y: auto;
  height: 784px;
  .title {
    margin: 0px 0px 20px 30px;
    padding-top: 4rem;
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

export const ModalWrap = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  .modal-img {
    width: 30rem;
    height: 30rem;
    /* background: url(${(props) => props.src}) no-repeat center / cover; */
    object-fit: cover;
  }
  .write-icon {
    position: absolute;
    top: 1rem;
    right: 5rem;
  }
  .delete-icon {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
`;

export const DeleteIcon = styled.img.attrs({
  src: `${remove_design}`,
})``;

export const WriteIcon = styled.img.attrs({
  src: `${write_design}`,
})``;
