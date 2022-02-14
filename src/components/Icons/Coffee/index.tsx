import * as React from 'react';

const Coffee: React.FC<React.SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M29.1053 48.8837C29.0824 48.9054 29.0593 48.927 29.0361 48.9485C29.0593 48.927 29.0824 48.9054 29.1053 48.8837ZM43.5052 11.267L43.5425 11.2916L43.5643 11.3045C52.6786 16.6796 55.1807 30.0825 48.6309 41.4271C42.0489 52.8276 29.096 57.3587 19.8742 52.0345C10.6513 46.7096 8.09999 33.2272 14.6821 21.8267C21.2594 10.4345 34.1965 5.90222 43.4182 11.209C43.426 11.2145 43.4405 11.2247 43.456 11.2352C43.4692 11.2441 43.4858 11.255 43.5052 11.267ZM38.1217 14.2413L39.5248 12.9023L37.6203 12.5358C30.3652 11.1399 22.114 15.5254 17.5275 23.4695C12.57 32.0562 13.3469 42.3109 19.3946 47.6361L19.6443 47.8559L19.9759 47.8824C21.0833 47.9709 22.1972 47.834 23.2503 47.4801C24.3035 47.1262 25.274 46.5626 26.1033 45.8233L26.111 45.8164L26.1186 45.8094C27.7258 44.3156 28.8885 42.0233 29.6341 39.2392C30.3833 36.4416 30.7334 33.0672 30.6536 29.314C30.5155 22.8213 34.7562 17.4529 38.1217 14.2413ZM27.1346 49.1216L24.1754 51.0208L27.6911 50.9631C31.442 50.9015 35.1063 49.8261 38.2956 47.8511C41.4785 45.8801 44.07 43.0864 45.7967 39.7649C50.8962 30.9141 49.9202 20.2615 43.3279 15.11L42.6958 14.616L42.0765 15.126C40.7458 16.2217 38.6974 18.0993 36.9911 20.5044C35.2898 22.9025 33.8681 25.9108 33.9391 29.2433C34.0053 32.38 33.8116 36.0282 32.9866 39.4551C32.1618 42.8816 30.7256 46.0059 28.3694 48.2029C27.9795 48.5372 27.5669 48.8442 27.1346 49.1216Z"
      fill="param(fill) #141414"
    />
  </svg>
);

export default Coffee;