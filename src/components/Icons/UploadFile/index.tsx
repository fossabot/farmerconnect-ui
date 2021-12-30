import * as React from 'react';

export interface UploadFileProps extends React.SVGProps<SVGSVGElement> {
  slim?: boolean;
}; 

const UploadFile: React.FC<UploadFileProps> = ({ slim, ...props }) => {
  if (slim) {
    return (
      <svg width="41" height="26" viewBox="0 0 41 26" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <mask id="path-1-inside-1_9473_224957" fill="white">
          <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M16.4401 0C12.6869 0 9.44782 2.20103 7.94315 5.38272C4.81484 5.60964 2.34737 8.21952 2.34737 11.4057C2.34737 11.4918 2.34917 11.5774 2.35274 11.6626C0.932686 12.6285 0 14.2575 0 16.1044C0 19.0691 2.40333 21.4724 5.368 21.4724H34.892C37.8567 21.4724 40.26 19.0691 40.26 16.1044C40.26 13.4342 38.3104 11.2194 35.757 10.8057C34.7019 8.01896 32.0082 6.03766 28.8518 6.03766H28.5163C27.6473 6.03766 26.8134 6.18784 26.0391 6.46367C24.8079 2.71045 21.276 0 17.1111 0H16.4401Z"
          />
        </mask>
        <path 
          d="M7.94315 5.38272L8.0155 6.3801L8.59763 6.33787L8.84715 5.81024L7.94315 5.38272ZM2.35274 11.6626L2.91514 12.4895L3.37513 12.1766L3.35186 11.6208L2.35274 11.6626ZM35.757 10.8057L34.8218 11.1598L35.0264 11.7004L35.5971 11.7929L35.757 10.8057ZM26.0391 6.46367L25.0889 6.77535L25.4085 7.74982L26.3746 7.40569L26.0391 6.46367ZM8.84715 5.81024C10.1927 2.96493 13.088 1 16.4401 1V-1C12.2859 -1 8.70289 1.43713 7.03914 4.9552L8.84715 5.81024ZM3.34737 11.4057C3.34737 8.74755 5.40621 6.56937 8.0155 6.3801L7.8708 4.38534C4.22348 4.64991 1.34737 7.69148 1.34737 11.4057H3.34737ZM3.35186 11.6208C3.34888 11.5495 3.34737 11.4778 3.34737 11.4057H1.34737C1.34737 11.5057 1.34946 11.6053 1.35361 11.7045L3.35186 11.6208ZM1 16.1044C1 14.6025 1.75714 13.2771 2.91514 12.4895L1.79033 10.8358C0.108236 11.9799 -1 13.9126 -1 16.1044H1ZM5.368 20.4724C2.95562 20.4724 1 18.5168 1 16.1044H-1C-1 19.6214 1.85105 22.4724 5.368 22.4724V20.4724ZM34.892 20.4724H5.368V22.4724H34.892V20.4724ZM39.26 16.1044C39.26 18.5168 37.3044 20.4724 34.892 20.4724V22.4724C38.4089 22.4724 41.26 19.6214 41.26 16.1044H39.26ZM35.5971 11.7929C37.674 12.1293 39.26 13.9326 39.26 16.1044H41.26C41.26 12.9358 38.9468 10.3094 35.9169 9.8186L35.5971 11.7929ZM28.8518 7.03766C31.579 7.03766 33.909 8.74899 34.8218 11.1598L36.6922 10.4517C35.4948 7.28893 32.4375 5.03766 28.8518 5.03766V7.03766ZM28.5163 7.03766H28.8518V5.03766H28.5163V7.03766ZM26.3746 7.40569C27.0427 7.16769 27.7633 7.03766 28.5163 7.03766V5.03766C27.5314 5.03766 26.584 5.208 25.7035 5.52165L26.3746 7.40569ZM17.1111 1C20.8312 1 23.9884 3.4206 25.0889 6.77535L26.9892 6.15198C25.6274 2.0003 21.7209 -1 17.1111 -1V1ZM16.4401 1H17.1111V-1H16.4401V1Z" 
          fill="#CEE9DD" 
          mask="url(#path-1-inside-1_9473_224957)"
        />
        <rect x="12.8204" y="19.1875" width="13.7055" height="4.56851" fill="white"/>
        <path 
          fillRule="evenodd" 
          clipRule="evenodd" 
          d="M16.4734 19.7578C16.6626 19.7578 16.8161 19.9112 16.8161 20.1005V22.9558H23.4404V20.1005C23.4404 19.9112 23.5938 19.7578 23.783 19.7578C23.9723 19.7578 24.1257 19.9112 24.1257 20.1005V23.2984C24.1257 23.4876 23.9723 23.641 23.783 23.641H16.4734C16.2842 23.641 16.1308 23.4876 16.1308 23.2984V20.1005C16.1308 19.9112 16.2842 19.7578 16.4734 19.7578Z" 
          fill="currentColor"
        />
        <path 
          fillRule="evenodd" 
          clipRule="evenodd" 
          d="M19.7954 21.13C19.7954 21.3193 19.9488 21.4727 20.138 21.4727C20.3273 21.4727 20.4807 21.3193 20.4807 21.13L20.4807 16.832L21.4793 17.8306C21.6146 17.9659 21.8331 17.9659 21.9684 17.8306C22.1037 17.6953 22.1037 17.4768 21.9684 17.3415L20.3762 15.7493C20.2409 15.614 20.0224 15.614 19.8871 15.7493L18.2949 17.3415C18.163 17.4733 18.163 17.6953 18.2983 17.8306C18.4336 17.9659 18.6521 17.9659 18.7874 17.8306L19.7954 16.8226L19.7954 21.13Z" 
          fill="currentColor"
        />
      </svg>
    );
  }
  else {
    return (
      <svg width="89" height="55" viewBox="0 0 89 55" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <mask id="path-1-inside-1_9179_220517" fill="white">
          <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M35.9844 0C27.7678 0 20.6768 4.81931 17.3839 11.7854C10.5389 12.2847 5.14062 17.9963 5.14062 24.9688C5.14062 25.1554 5.1445 25.3411 5.15216 25.5259C2.04254 27.6399 0 31.2064 0 35.25C0 41.7393 5.26065 47 11.75 47H76.375C82.8643 47 88.125 41.7393 88.125 35.25C88.125 29.4056 83.8581 24.5579 78.2696 23.6519C75.9591 17.5539 70.064 13.2188 63.1562 13.2188H62.4219C60.5187 13.2188 58.6924 13.5478 56.9967 14.1522C54.3031 5.93475 46.5712 0 37.4531 0H35.9844Z"
          />
        </mask>
        <path 
          d="M17.3839 11.7854L17.4566 12.7828L18.0386 12.7403L18.288 12.2128L17.3839 11.7854ZM5.15216 25.5259L5.71437 26.3529L6.17434 26.0402L6.1513 25.4845L5.15216 25.5259ZM78.2696 23.6519L77.3344 24.0062L77.5392 24.5466L78.1096 24.6391L78.2696 23.6519ZM56.9967 14.1522L56.0465 14.4637L56.3661 15.4386L57.3325 15.0941L56.9967 14.1522ZM18.288 12.2128C21.4218 5.58314 28.1689 1 35.9844 1V-1C27.3667 -1 19.9317 4.05548 16.4798 11.3581L18.288 12.2128ZM6.14062 24.9688C6.14062 18.5242 11.1304 13.2442 17.4566 12.7828L17.3111 10.7881C9.94729 11.3252 4.14062 17.4684 4.14062 24.9688H6.14062ZM6.1513 25.4845C6.14421 25.3135 6.14062 25.1416 6.14062 24.9688H4.14062C4.14062 25.1692 4.14478 25.3688 4.15301 25.5673L6.1513 25.4845ZM1 35.25C1 31.5515 2.86691 28.2887 5.71437 26.3529L4.58995 24.6989C1.21818 26.9911 -1 30.8614 -1 35.25H1ZM11.75 46C5.81294 46 1 41.1871 1 35.25H-1C-1 42.2916 4.70837 48 11.75 48V46ZM76.375 46H11.75V48H76.375V46ZM87.125 35.25C87.125 41.1871 82.3121 46 76.375 46V48C83.4166 48 89.125 42.2916 89.125 35.25H87.125ZM78.1096 24.6391C83.2217 25.4677 87.125 29.904 87.125 35.25H89.125C89.125 28.9073 84.4945 23.648 78.4296 22.6648L78.1096 24.6391ZM63.1562 14.2188C69.6348 14.2188 75.1664 18.284 77.3344 24.0062L79.2047 23.2976C76.7519 16.8238 70.4931 12.2188 63.1562 12.2188V14.2188ZM62.4219 14.2188H63.1562V12.2188H62.4219V14.2188ZM57.3325 15.0941C58.9219 14.5276 60.6347 14.2188 62.4219 14.2188V12.2188C60.4027 12.2188 58.4629 12.568 56.661 13.2102L57.3325 15.0941ZM37.4531 1C46.1262 1 53.4835 6.64481 56.0465 14.4637L57.947 13.8407C55.1227 5.2247 47.0161 -1 37.4531 -1V1ZM35.9844 1H37.4531V-1H35.9844V1Z" 
          fill="#CEE9DD" 
          mask="url(#path-1-inside-1_9179_220517)"
        />
        <rect x="28.0625" y="42" width="30" height="10" fill="white"/>
        <path 
          fillRule="evenodd" 
          clipRule="evenodd" 
          d="M36.0625 43.25C36.4767 43.25 36.8125 43.5858 36.8125 44V50.25H51.3125V44C51.3125 43.5858 51.6483 43.25 52.0625 43.25C52.4767 43.25 52.8125 43.5858 52.8125 44V51C52.8125 51.4142 52.4767 51.75 52.0625 51.75H36.0625C35.6483 51.75 35.3125 51.4142 35.3125 51V44C35.3125 43.5858 35.6483 43.25 36.0625 43.25Z" 
          fill="currentColor"
        />
        <path 
          fillRule="evenodd" 
          clipRule="evenodd" 
          d="M43.334 46.25C43.334 46.6642 43.6698 47 44.084 47C44.4982 47 44.834 46.6642 44.834 46.25L44.834 36.8421L47.0198 39.0279C47.316 39.324 47.7943 39.324 48.0905 39.0279C48.3866 38.7318 48.3866 38.2534 48.0905 37.9573L44.6053 34.4721C44.3091 34.176 43.8308 34.176 43.5346 34.4721L40.0494 37.9573C39.7609 38.2458 39.7609 38.7318 40.057 39.0279C40.3532 39.324 40.8315 39.324 41.1277 39.0279L43.334 36.8216L43.334 46.25Z" 
          fill="currentColor"
        />
      </svg>
    );
  }
};

export default UploadFile;
