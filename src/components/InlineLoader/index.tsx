import React from 'react';
import { IInlineLoaderProps } from './interfaces';
import * as S from './styles';

const InlineLoader = ({ children, ...props }: IInlineLoaderProps) => {
  return (
    <S.Container {...props}>
      {props.error ? (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10" r="9.5" stroke="#FB2E4C" />
          <rect
            x="5.93408"
            y="13.0052"
            width="10"
            height="1.5"
            rx="0.75"
            transform="rotate(-45 5.93408 13.0052)"
            fill="#FB2E4C"
          />
          <rect
            x="6.99487"
            y="5.93408"
            width="10"
            height="1.5"
            rx="0.75"
            transform="rotate(45 6.99487 5.93408)"
            fill="#FB2E4C"
          />
        </svg>
      ) : (
        <svg width="32" height="13" viewBox="0 -5 32 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2.64636 0.558426L0.557717 2.64972C0.380926 2.82634 0.240663 3.03615 0.144962 3.26712C0.0492609 3.49809 0 3.74569 0 3.99575C0 4.24581 0.0492609 4.49341 0.144962 4.72438C0.240663 4.95535 0.380926 5.16515 0.557717 5.34177L2.65485 7.44157C2.83125 7.61859 3.04079 7.75903 3.27146 7.85485C3.50214 7.95068 3.74943 8 3.99917 8C4.24891 8 4.4962 7.95068 4.72688 7.85485C4.95756 7.75903 5.16709 7.61859 5.34349 7.44157L7.44346 5.34177C7.79982 4.98469 8 4.50055 8 3.99575C8 3.49095 7.79982 3.0068 7.44346 2.64972L5.335 0.558426C5.1586 0.381409 4.94907 0.240969 4.71839 0.145146C4.48771 0.0493235 4.24042 0 3.99068 0C3.74094 0 3.49365 0.0493235 3.26297 0.145146C3.03229 0.240969 2.82276 0.381409 2.64636 0.558426Z"
            fill="#00E394"
            className="animate-dot1"
          />
          <path
            d="M14.6464 0.558426L12.5577 2.64972C12.3809 2.82634 12.2407 3.03615 12.145 3.26712C12.0493 3.49809 12 3.74569 12 3.99575C12 4.24581 12.0493 4.49341 12.145 4.72438C12.2407 4.95535 12.3809 5.16515 12.5577 5.34177L14.6549 7.44157C14.8312 7.61859 15.0408 7.75903 15.2715 7.85485C15.5021 7.95068 15.7494 8 15.9992 8C16.2489 8 16.4962 7.95068 16.7269 7.85485C16.9576 7.75903 17.1671 7.61859 17.3435 7.44157L19.4435 5.34177C19.7998 4.98469 20 4.50055 20 3.99575C20 3.49095 19.7998 3.0068 19.4435 2.64972L17.335 0.558426C17.1586 0.381409 16.9491 0.240969 16.7184 0.145146C16.4877 0.0493235 16.2404 0 15.9907 0C15.7409 0 15.4937 0.0493235 15.263 0.145146C15.0323 0.240969 14.8228 0.381409 14.6464 0.558426Z"
            fill="#00E394"
            className="animate-dot2"
          />
          <path
            d="M26.6464 0.558426L24.5577 2.64972C24.3809 2.82634 24.2407 3.03615 24.145 3.26712C24.0493 3.49809 24 3.74569 24 3.99575C24 4.24581 24.0493 4.49341 24.145 4.72438C24.2407 4.95535 24.3809 5.16515 24.5577 5.34177L26.6549 7.44157C26.8312 7.61859 27.0408 7.75903 27.2715 7.85485C27.5021 7.95068 27.7494 8 27.9992 8C28.2489 8 28.4962 7.95068 28.7269 7.85485C28.9576 7.75903 29.1671 7.61859 29.3435 7.44157L31.4435 5.34177C31.7998 4.98469 32 4.50055 32 3.99575C32 3.49095 31.7998 3.0068 31.4435 2.64972L29.335 0.558426C29.1586 0.381409 28.9491 0.240969 28.7184 0.145146C28.4877 0.0493235 28.2404 0 27.9907 0C27.7409 0 27.4937 0.0493235 27.263 0.145146C27.0323 0.240969 26.8228 0.381409 26.6464 0.558426Z"
            fill="#00E394"
            className="animate-dot3"
          />
        </svg>
      )}
      {children}
    </S.Container>
  );
};

export default InlineLoader;