import React from 'react';
import styled, { css } from 'styled-components';
import Checkbox from '../Checkbox';
import CustomButton from '../CustomButton'

export const Wrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  max-width: 264px;
  box-shadow: 0.125rem 0.125rem 0 0 #00e394;
  border-radius: 0.75rem;
  background-color: #fff;
`;

export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.0625rem;
  color: #141414;
  transition: all 0.05s ease-out;
  font-weight: 700;
  padding: 1rem 1rem 0rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 28.5rem;
  height: auto;
  overflow: hidden;
  transition: all 0.05s ease-out;
`;

export const ContentText = styled.p`
  font-size: 0.875rem;
  color: #141414;
  padding: 0rem 1rem;
  margin: 0rem;
`;

export const FilterInputWrapper = styled.div`
  padding: 1rem 1rem .5rem;
  display: block;
  > div {
    position: relative;
    max-width: 17rem;
    > input {
      border: 1px solid #b9b9b9;
      width: 100%;
      box-sizing: border-box;
      border-radius: 0.75rem;
      font-size: 0.6875rem;
      background: transparent;
      padding: 0.5rem 4rem 0.5rem 0.75rem;
      outline: none;
      color: #141414;
      font-weight: 700;
      &:placeholder {
        color: #5b5b5b;
      }
    }
    > svg {
      position: absolute;
      top: 50%;
      right: 0.75rem;
      transform: translateY(-50%);
    }
    > button {
      position: absolute;
      display: flex;
      align-items: center;
      top: 50%;
      right: 0.25rem;
      background: transparent;
      border: none;
      outline: none;
      padding: 0.5rem;
      cursor: pointer;
      transform: translateY(-50%);
      > svg {
        transform: scale(0.6);
      }
    }
  }
`;

export const ListWrapper = styled.div`
  padding: 0 0rem 0rem 1rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
  max-height: 314px;
  height: auto;
  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: #e7e7e7;
  }

  &::-webkit-scrollbar-thumb {
    background: #b9b9b9;
    border-radius: 6px;
  }
  > label {
    margin-left: 0;
    margin-right: 0.4rem;
    gap: 0.5rem;
    padding: 0.3125rem 0.75rem;
    align-items: flex-start;
    > svg {
      padding-top: 0.125rem;
    }
  }
  label {
    border-top: 1px solid #e7e7e7;
  }
  label:last-child {
    border-bottom: 1px solid #e7e7e7;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: space-evenly;
`;

export const EmptyMessage = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  color: #141414;
  font-size: 0.6875rem;
  margin-right: 1rem;
`;

export const CustomCheckbox = styled(Checkbox)`
  opacity: ${(props) => (props.disabled ? 0.4 : 1)};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
`;

export const CustomizedButton = styled(CustomButton)`
  color: #5B5B5B;

  &:hover:not(:disabled) {
    color: #424242;
  }
`;

export const Close = styled.div`
  cursor: pointer;
`;


export const MagnifyingGlassIcon: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.6555 12.0598H13.3138L16.8471 15.6098C17.1888 15.9514 17.1888 16.5098 16.8471 16.8514C16.5055 17.1931 15.9471 17.1931 15.6055 16.8514L12.0638 13.3098V12.6514L11.8388 12.4181C10.6721 13.4181 9.08046 13.9348 7.38879 13.6514C5.07213 13.2598 3.22213 11.3264 2.93879 8.9931C2.50546 5.4681 5.47213 2.50143 8.99713 2.93477C11.3305 3.2181 13.2638 5.0681 13.6555 7.38477C13.9388 9.07643 13.4221 10.6681 12.4221 11.8348L12.6555 12.0598ZM4.56378 8.30977C4.56378 10.3848 6.23878 12.0598 8.31378 12.0598C10.3888 12.0598 12.0638 10.3848 12.0638 8.30977C12.0638 6.23477 10.3888 4.55977 8.31378 4.55977C6.23878 4.55977 4.56378 6.23477 4.56378 8.30977Z"
        fill="#5B5B5B"
      />
    </svg>
  );
};