import * as React from 'react';

const ExternalLink: React.FC<React.SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.513 2.5L7.3987 7.51425C7.09848 7.81447 7.09805 8.30244 7.39875 8.60315C7.69884 8.90324 8.18697 8.90388 8.48765 8.6032L13.5 3.49085V5.20055C13.5 5.58603 13.8634 5.9 14.25 5.9C14.6358 5.9 15 5.58685 15 5.20055V1.69945C15 1.5068 14.9217 1.33201 14.7952 1.20535C14.6684 1.07847 14.4936 1 14.3006 1H10.7994C10.414 1 10.1 1.3134 10.1 1.7C10.1 2.08581 10.4132 2.5 10.7994 2.5H12.513ZM15 9.4V6.0724V13.2552C15 14.2188 14.3057 15 13.4483 15H2.55174C1.69474 15 1 14.2173 1 13.2552V2.7448C1 1.78117 1.69426 1 2.55174 1H10.0241H6.6C6.9866 1 7.3 1.3134 7.3 1.7C7.3 2.0866 6.9866 2.4 6.6 2.4H2.89861C2.67593 2.4 2.5 2.60908 2.5 2.86699V13.033C2.5 13.2863 2.67847 13.5 2.89861 13.5H13.1014C13.3241 13.5 13.5 13.2909 13.5 13.033V9.4C13.5 9.0134 13.8634 8.7 14.25 8.7C14.6366 8.7 15 9.0134 15 9.4Z"
      fill="param(fill) #00E394"
    />
  </svg>
);

export default ExternalLink;