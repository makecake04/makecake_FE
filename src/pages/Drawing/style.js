import styled from "styled-components";

//image
import {
  bring_front,
  redo_icon,
  send_back,
  undo_icon,
  zoom_in,
  zoom_out,
  circle,
  heart,
  square,
  remove_item,
  logo,
} from "../../assets/images/image";

export const Wrap = styled.div`
  max-height: 844px;
  text-align: center;

  button {
    border: none;
  }
  .canvas-wrap {
    display: flex;
    flex-direction: column;
    min-height: 844px;
    .lower-canvas,
    .upper-canvas {
      height: 41rem !important;
      padding-bottom: 1.2rem;
    }
    .header {
      padding: 0.5rem 0.5rem 1.2rem 0;
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
      .header-btns {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .header-btns-left {
          display: flex;

          button {
            margin-top: 0.25rem;
            width: 4.5rem;
          }
        }
        .header-btns-right {
          margin-top: 4px;
        }
      }
    }
  }

  .options-wrap {
    position: relative;
    border-radius: 0.8rem 0.8rem 0 0;
    flex: 2;
    background-color: #fee9ee;
    .default-buttons {
      height: 6.2rem;
      padding: 1rem 1.5rem 0.8rem;
      display: flex;
      justify-content: space-between;
      button {
        color: #777777;
        font-weight: 600;
      }
    }
    .drawing-buttons {
      padding: 1rem 1.5rem 0.8rem;
      display: flex;
      justify-content: space-between;
      button {
        color: #777777;
        font-weight: 600;
      }
    }

    .select-cake-shape {
      padding: 0 1rem;
      h3 {
        margin-bottom: 0.5rem;
      }
      .select-cake-shape-caution {
        font-size: 1.2rem;
        margin-bottom: 3rem;
        color: #ff679e;
      }
      button + button {
        padding-left: 2rem;
      }
      img {
        width: 10rem;
      }
      .heart {
        height: 10rem;
      }
    }
    .options {
      /* .options-default {
        padding: 0rem 4rem 1rem;
        margin-bottom: 0.3rem;
        display: flex;
        justify-content: space-between;
        button {
          color: #777777;
          font-weight: 600;
        }
      } */
      .icons-header {
        display: flex;
        justify-content: space-between;
        padding: 0 5rem 0;
        button {
          color: #777777;
        }
      }
      .drawing-options {
        display: flex;
        align-items: center;
        padding-top: 2rem;
        flex-direction: column;
        color: #777777;
        .drawing-options-brush {
          display: flex;
          align-items: center;
        }
        .drawing-buttons-zoom {
          display: flex;
          align-items: center;
          button {
            margin-left: 0.3rem;
            padding-top: 0.5rem;
          }
        }
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

        /* input[type="range"] {
          -webkit-appearance: none;
          width: 12rem;
          height: 1.1rem; */
        /* background: rgba(255, 255, 255, 0.6); */
        /* border-radius: 0.5rem;
          background-image: linear-gradient(#ff679e, #ff679e);
          background-size: 100%;
          background-repeat: no-repeat;

          &::-webkit-slider-thumb {
            -webkit-appearance: none;
            height: 1.5rem;
            width: 1.5rem;
            border-radius: 50%;
            background: #ff679e;
            &:hover {
              background: #ff679e;
            }
          } */

        /* &::-moz-range-thumb {
          -webkit-appearance: none;
          height: 1.5rem;
          width: 1.5rem;
          border-radius: 50%;
          background: #ff679e;
          &:hover{
            background: #ff679e;
          }
        }

        &::-ms-thumb {
          -webkit-appearance: none;
          height: 1.5rem;
          width: 1.5rem;
          border-radius: 50%;
          background: #ff679e;
          &:hover{
            background: #ff679e;
          }
        } */
        /* &::-webkit-slider-runnable-track {
            -webkit-appearance: none;
            box-shadow: none;
            border: none;
            background: transparent;
          } 
        } */
      }
      .background-change-text {
        margin-top: 2rem;
        p + p {
          margin-top: 1rem;
        }
      }
    }

    input[type="file"] {
      width: 0;
    }
  }
`;

export const ModalWrap = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  .title {
    color: #292929;
    font-weight: 700;
    margin: 20px 0px 10px 0px;
  }

  .description {
    color: #292929;
    font-size: 15px;
    margin: 0px 0px 20px 0px;
  }

  .modal_hr {
    border: 0.7px solid #e5e5e5;
    width: 100%;
    margin: 1.4rem 0 1rem;
  }

  .footer_wrap {
    display: flex;
    padding-top: 0.3rem;
  }

  .footer_one {
    color: #ff679e;
    font-weight: 700;
    border: none;
    width: 140px;
  }

  .vl {
    border-left: 2px solid #e5e5e5;
    height: 4.5rem;
    position: absolute;
    left: 50%;
    bottom: 0;
  }

  .footer_two {
    color: #c6c6c8;
    font-weight: 700;
    width: 140px;
    border: none;
  }
`;
