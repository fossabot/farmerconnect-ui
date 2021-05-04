import * as React from "react";

const CommunityBuilder: React.FC<React.SVGProps<SVGSVGElement>> = ({
  fill = "black",
  ...props
}) => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 36 36"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill={fill}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.5 4.5H31.5C33.15 4.5 34.5 5.85 34.5 7.5V25.5C34.5 27.15 33.15 28.5 31.5 28.5H24V30C24 30.825 23.325 31.5 22.5 31.5H13.5C12.675 31.5 12 30.825 12 30V28.5H4.5C2.85 28.5 1.5 27.15 1.5 25.5V7.5C1.5 5.85 2.85 4.5 4.5 4.5ZM6 25.5H30C30.825 25.5 31.5 24.825 31.5 24V9C31.5 8.175 30.825 7.5 30 7.5H6C5.175 7.5 4.5 8.175 4.5 9V24C4.5 24.825 5.175 25.5 6 25.5ZM27 12H13.5C12.675 12 12 12.675 12 13.5C12 14.325 12.675 15 13.5 15H27C27.825 15 28.5 14.325 28.5 13.5C28.5 12.675 27.825 12 27 12ZM13.5 18H27C27.825 18 28.5 18.675 28.5 19.5C28.5 20.325 27.825 21 27 21H13.5C12.675 21 12 20.325 12 19.5C12 18.675 12.675 18 13.5 18ZM10.5 12H7.5V15H10.5V12ZM7.5 18H10.5V21H7.5V18Z"
      fill={fill}
    />
  </svg>
);

export default CommunityBuilder;
