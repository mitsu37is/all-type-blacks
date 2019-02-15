import * as React from "react";
import "./Panel.css";

interface IProps {
  isBlack: boolean;
  handleClick: () => void;
}

const Panel: React.SFC<IProps> = props => {
  return (
    <button
      className={`animation panel shadow-md m-2 rounded-full h-12 w-12 lg:h-32 lg:w-32 ${
        props.isBlack
          ? "bg-grey-darkest flip-vertical-right"
          : "bg-white flip-vertical-left"
      }`}
      onClick={props.handleClick}
    />
  );
};

export default Panel;
