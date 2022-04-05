import React from "react";

//image
import { SpinnerWrap, SpinnerSvg } from "./style";

const Spinner = (props) => {
  const { type, size, is_dim } = props;

  return (
    <React.Fragment>
      <SpinnerWrap type={type} is_dim={is_dim}>
        <SpinnerSvg size={size} />
      </SpinnerWrap>
    </React.Fragment>
  );
};

Spinner.defaultProps = {
  type: "inline",
  is_dim: false,
  size: 60,
};

export default Spinner;
