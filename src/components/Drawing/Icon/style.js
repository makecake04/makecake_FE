import styled from "styled-components";

//image
import {
  balloon,
  carrot,
  cherry,
  cloud,
  flower_icon,
  heart_icon,
  pearl,
  sprinkle,
} from "../../../assets/images/image";

export const IconWrap = styled.div`
  .icons-wrap {
    margin-top: 1.7rem;
    padding: 0 2.8rem 0;
    .icons-wrap-first,
    .icons-wrap-second {
      display: flex;
      justify-content: space-between;
    }
    input {
      border: none;
    }
    div + div {
      margin-top: 1.5rem;
    }
  }
`;
