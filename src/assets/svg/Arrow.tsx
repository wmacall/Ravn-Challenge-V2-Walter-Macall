import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const ArrowIcon = (props: SvgProps) => {
  return (
    <Svg
      width={8}
      height={12}
      viewBox="0 0 8 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path d="M.59 10.59L5.17 6 .59 1.41 2 0l6 6-6 6-1.41-1.41z" fill="#000" />
    </Svg>
  );
};

export default ArrowIcon;
