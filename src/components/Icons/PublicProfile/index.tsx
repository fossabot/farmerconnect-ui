import * as React from 'react';

const PublicProfile: React.FC<React.SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path 
      d="M12.3327 12.3333C14.6347 12.3333 16.4993 10.4687 16.4993 8.16666C16.4993 5.86458 14.6347 4 12.3327 4C10.0306 4 8.16602 5.86458 8.16602 8.16666C8.16602 10.4687 10.0306 12.3333 12.3327 12.3333Z" 
      stroke={'param(fill) #000'} 
      strokeWidth="1.5"
    />
    <path 
      d="M4.75 18.5836C4.75 18.1664 4.95306 17.7454 5.41964 17.3148C5.89131 16.8795 6.58053 16.4868 7.40259 16.1575C9.04793 15.4984 11.0364 15.167 12.3333 15.167C13.6302 15.167 15.6187 15.4984 17.264 16.1575C18.0861 16.4868 18.7753 16.8795 19.247 17.3148C19.7136 17.7454 19.9166 18.1664 19.9166 18.5836V19.6253C19.9166 19.784 19.7837 19.917 19.625 19.917H5.04166C4.88296 19.917 4.75 19.784 4.75 19.6253V18.5836Z" 
      stroke={'param(fill) #000'} 
      strokeWidth="1.5"
    />
  </svg>
);

export default PublicProfile;
