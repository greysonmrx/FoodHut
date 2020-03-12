import React from "react";
import PropTypes from "prop-types";

import { Container } from "./styles";

export default function ProgressBar({ progress, color }) {
  return (
    <Container progress={progress} color={color}>
      <div>
        <div>
          <span>{progress}%</span>
        </div>
      </div>
    </Container>
  );
}

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
  color: PropTypes.string
};

ProgressBar.defaultProps = {
  color: "#f6540d"
};
