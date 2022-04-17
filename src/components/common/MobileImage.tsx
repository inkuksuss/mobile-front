import React from 'react';

interface MobileImageProps {
  src: string;
  alt?: string;
}

const MobileImage: React.FunctionComponent<MobileImageProps> = (props) => {
  return <img src={props.src} alt={props.alt} />;
};

export default MobileImage;
