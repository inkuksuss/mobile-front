import React from 'react';

interface MobileButtonProps {
  isDisabled?: boolean;
  color?: string;
  text?: string;
  onClick: () => void;
}

const MobileButton: React.FunctionComponent<MobileButtonProps> = (props) => {
  return (
    <button
      onClick={props.onClick}
      disabled={props.isDisabled}
      style={{
        backgroundColor: props.color,
      }}>
      {props.text}
    </button>
  );
};

export default MobileButton;
