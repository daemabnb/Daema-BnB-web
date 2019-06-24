import styled, { css } from 'styled-components';
import logoPng from '../assets/logo.png';
import down_arrowPng from '../assets/down_arrow.png';

export const SearchHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0%;
  width: 100%;
  background-color: #fff;
`;

export const SearchInput = styled.input`
  box-sizing: border-box;
  background-color: #fff;
  height: 48px;
  font-size: 17px;
  font-weight: 800;
  padding: 0 10px;
  border: 1px solid #ebebeb;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  color: #484848;
  outline: none;
  margin-left: 90px;
  position: relative;
  z-index: 12;
  transition: ease-out 0.3s;
`;

export const CancelButton = styled.div`
  display: none;
  font-size: 14px;
  margin-left: 4px;
  width: 56px;
  line-height: 48px;
  cursor: pointer;
  color: #484848;
  font-weight: 600;
  text-align: center;
  position: relative;
  z-index: 12;
`;

export const SearchListBox = styled.div`
  padding: 8px 0;
  box-shadow: rgba(26, 26, 29, 0.3) 0 15px 46px -10px;
  position: absolute;
  top: 100%;
  left: 0;
  height: 100px;
  width: 100%;
  z-index: 10;
  visibility: hidden;
  opacity: 0;
`;

export const SearchForm = styled.form<{ isFocused: boolean }>`
  box-sizing: border-box;
  height: 64px;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 8px;

  ${({ isFocused }) =>
    isFocused &&
    css`
      ${SearchInput} {
        margin-left: 0;
      }

      ${CancelButton} {
        display: block;
      }

      ${SearchListBox} {
        visibility: visible;
        background-color: #fff;
        opacity: 1;
        transition: opacity 0.3s;
      }
    `}
`;

export const SavedSearchKeywordsTitle = styled.div`
  margin: 0 24px 16px;
  font-size: 12px;
  font-weight: 800;
  color: #484848;
`;

export const SavedSearchKeyword = styled.div`
  cursor: pointer;
  height: 60px;
  padding: 0 24px;
  margin-bottom: 16px;
  font-size: 12px;
  line-height: 60px;
  font-weight: 800;
  color: #484848;

  &:hover {
    background-color: rgb(242, 242, 242);
  }
`;

export const FilterButtonArea = styled.div`
  height: 48px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 24px;
`;

export const LogoArea = styled.div<{ active: boolean }>`
  height: 64px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
  width: 100%;
  background-color: #fff;
  transition-delay: 0.3s;
  transition-property: z-index;

  ${({ active }) =>
    active &&
    css`
      transition-delay: unset;
      z-index: 14;

      ${BreakPointArrow} {
        transform: rotateZ(180deg);
      }
    `}
`;

export const ShowMenuButton = styled.button`
  cursor: pointer;
  height: 100%;
  display: flex;
  padding: 0 24px;
  align-items: center;
  border: none;
  background: none;
  background-color: none;
  outline: none;
`;

export const Logo = styled.div`
  width: 34px;
  height: 34px;
  background-image: url(${logoPng});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`;

export const BreakPointArrow = styled.div`
  transition: transform 0.2s;
  margin-left: 9px;
  color: #aaa;
  width: 9px;
  height: 9px;
  background-image: url(${down_arrowPng});
  background-size: contain;
  background-position: center center;
`;
