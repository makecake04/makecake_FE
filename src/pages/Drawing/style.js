import styled from "styled-components";
import Slider from "react-slick";

//image
import { logo, help_icon } from "../../assets/images/image";

export const Wrapper = styled.section`
  overflow-x: hidden;
  @media (min-width: 500px) {
    margin-top: calc((100vh - 844px) / 2.5);
    @media (max-height: 844px) {
      margin-top: 0;
    }
  }

  text-align: center;
  button {
    border: none;
  }
`;

export const CanvasWrapper = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 844px;
  .lower-canvas,
  .upper-canvas {
    height: 41rem !important;
    padding-bottom: 1.2rem;
  }
`;

export const Header = styled.header`
  padding: 0.5rem 0.5rem 1.2rem 0;
  height: 64px;
  button {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
  }
  button + button {
    margin-left: 0.7rem;
  }
  input[type="color"] {
    padding: 0 0.25rem;
    margin-top: 0.2rem;
    width: 4.5rem;
    height: 4.5rem;
    background-color: transparent;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    cursor: pointer;
    &::-webkit-color-swatch {
      border-radius: 50%;
      border: 0.1rem solid #e2e2e2;
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const LeftButtons = styled.div`
  display: flex;

  button {
    margin-top: 0.25rem;
    width: 4.5rem;
  }
`;
export const RightButton = styled.button`
  color: #ff679e;

  margin-top: 0.4rem;
`;

export const Logo = styled.img.attrs({
  src: `${logo}`,
  alt: "logo",
})`
  width: 40%;
  margin-right: 0.5rem;
  /* margin-top: ${(props) => (props.cakeShape === "" ? "13%;" : "1%;")}; */
  /* margin-top: ${(props) =>
    props.cakeShape === "" ? "5rem;" : "0.3rem;"}; */

  cursor: pointer;
`;

export const Tutorial = styled.img.attrs({
  src: `${help_icon}`,
  alt: "tutorial",
})`
  width: 9.5%;
  padding-bottom: 0.3rem;
  /* margin-top: ${(props) =>
    props.cakeShape === "" ? "5.7rem;" : "1rem;"}; */
  cursor: pointer;
`;

export const LogoBtn = styled.div`
  position: absolute;
  left: 26%;
  margin-top: 1rem;
`;

export const DefaultButtons = styled.div`
  height: 6.2rem;
  padding: 1rem 1.5rem 0.8rem;
  display: flex;
  justify-content: space-between;
  button {
    font-weight: 600;
  }
  span {
    color: #777777;
    font-weight: 600;
    margin-top: 1rem;
  }
`;

export const CreamButton = styled.button`
  color: ${(props) => (props.option === "cream" ? "#ff679e;" : "#777777;")};
`;

export const DecoButton = styled.button`
  color: ${(props) => (props.option === "icons" ? "#ff679e;" : "#777777;")};
`;

export const DecoPenButton = styled.button`
  color: ${(props) => (props.option === "drawing" ? "#ff679e;" : "#777777;")};
`;

export const DrawingButtons = styled.div`
  padding: 1rem 1.5rem 0.8rem;
  display: flex;
  justify-content: space-between;
  button {
    font-weight: 600;
  }
`;

export const CakeShapeWrapper = styled.div`
  padding: 0 1rem;
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 1.2rem;
    margin-bottom: 3rem;
    color: #ff679e;
  }
`;

export const CakeShape = styled.div`
  button + button {
    padding-left: 2rem;
  }

  img {
    width: 10rem;
  }

  button:nth-of-type(3) {
    img {
      height: 10rem;
    }
  }
`;

export const DecoHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0 5rem 0;
  button {
    color: #777777;
    font-size: 1.5rem;
  }
`;

export const DecoActivate = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  hr {
    border: 1px solid #ff679e;
    width: 2rem;
    border-radius: 0.5rem;
  }
  button {
    color: #ff679e;
    margin-top: 0.4rem;
  }
`;

export const DrawingBrush = styled.div`
  display: flex;
  align-items: center;
`;

export const ZoomButtons = styled.div`
  display: flex;
  align-items: center;
  button {
    margin-left: 0.3rem;
    padding-top: 0.5rem;
  }
`;

export const DrawingOptions = styled.div`
  display: flex;
  align-items: center;
  padding-top: 2rem;
  flex-direction: column;
  color: #777777;
  //mui
  .MuiBox-root {
    margin-left: 1.5rem;
    padding-top: 0.4rem;
  }
  .MuiSlider-thumb {
    width: 1.5rem;
    height: 1.5rem;
  }
  .MuiSlider-rail {
    background-color: #ffffff;
    opacity: 1;
  }

  .MuiSlider-valueLabel {
    display: none;
    .MuiSlider-valueLabelOpen {
      display: none;
    }
  }
`;

export const BodyWrapper = styled.div`
  position: relative;
  border-radius: 0.8rem 0.8rem 0 0;
  flex: 2;
  /* height: 100vh; */
  overflow: hidden;
  background-color: #fee9ee;
`;

export const ModalWrap = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  p {
    color: #292929;
    &:first-child {
      font-weight: 700;
      margin: 20px 0px 10px 0px;
    }
    &:nth-of-type(2) {
      font-size: 15px;
      margin: 0px 0px 25px 0px;
    }
  }

  hr {
    border: 1px solid #e5e5e5;
    width: 100%;
  }
`;

export const ModalChoice = styled.div`
  display: flex;
  padding-top: 0.3rem;
  button {
    &:first-child {
      color: #ff679e;
    }
    &:nth-of-type(2) {
      color: #c6c6c8;
    }
    font-weight: 700;
    border: none;
    width: 15rem;
    padding-top: 0.6rem;
  }
`;
export const VerticalLine = styled.div`
  border-left: 2px solid #e5e5e5;
  height: 4.7rem;
  position: absolute;
  left: 50%;
  bottom: 0;
`;

export const ModalWrap2 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding: 3rem 1rem;
  height: 75vh;
  overflow-y: auto;
  img:first-child {
    position: absolute;
    right: 4%;
    top: 1%;
  }
`;
