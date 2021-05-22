import * as React from "react";

const Network: React.FC<React.SVGProps<SVGSVGElement>> = ({
  fill = "black",
  ...props
}) => (
  <svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 500 500"
    fill={fill}
    {...props}
  >
    <path
      d="M371.76,336.53l-15.93-15.94a23.09,23.09,0,0,0-32.59,0l-1.87,1.88-39.53-39.53.48-.48a23,23,0,0,0,0-32.58L266.38,234a22.86,22.86,0,0,0-7.68-5.08v-44.6a22.86,22.86,0,0,0,7.68-5.08l15.94-15.93a23,23,0,0,0,0-32.59l-15.94-15.93c-8.71-8.72-23.89-8.71-32.58,0l-15.94,15.93a23,23,0,0,0,0,32.59L233.8,179.2a22.86,22.86,0,0,0,7.67,5.06v44.61A22.92,22.92,0,0,0,233.8,234l-15.94,15.93a23,23,0,0,0,0,32.58l.38.39-39.62,39.62-1.88-1.88c-8.7-8.7-23.88-8.7-32.59,0l-15.93,15.93a23.08,23.08,0,0,0,0,32.59L144.15,385a23.06,23.06,0,0,0,32.59,0l15.94-15.94a23.07,23.07,0,0,0,0-32.58l-1.88-1.88L230.42,295l3.38,3.38a23,23,0,0,0,32.58,0l3.28-3.28,39.53,39.53-1.88,1.88a23,23,0,0,0,0,32.58l15.93,15.94a23.07,23.07,0,0,0,32.59,0l15.93-15.94a23,23,0,0,0,0-32.58ZM180.5,356.93l-15.94,15.94a5.93,5.93,0,0,1-8.22,0L140.4,356.94a5.82,5.82,0,0,1,0-8.23l15.94-15.93h0a5.82,5.82,0,0,1,8.22,0l8,8s0,0,0,0h0l8,8A5.81,5.81,0,0,1,180.5,356.93ZM230,151.08a5.83,5.83,0,0,1,0-8.23L246,126.92a5.82,5.82,0,0,1,8.22,0l15.94,15.94a5.82,5.82,0,0,1,0,8.22L254.2,167a5.8,5.8,0,0,1-8.22,0ZM246,286.22,230,270.29a5.83,5.83,0,0,1,0-8.23L246,246.12a5.82,5.82,0,0,1,8.22,0l15.94,15.94a5.83,5.83,0,0,1,0,8.23l-6.56,6.55h0v0l-9.36,9.35A5.82,5.82,0,0,1,246,286.22Zm113.6,70.71-15.93,15.94a5.84,5.84,0,0,1-8.23,0l-15.93-15.94a5.79,5.79,0,0,1,0-8.22l15.93-15.94a5.83,5.83,0,0,1,8.23,0l15.93,15.94a5.79,5.79,0,0,1,0,8.22Z"
      fill={fill}
    />
  </svg>
);

export default Network;