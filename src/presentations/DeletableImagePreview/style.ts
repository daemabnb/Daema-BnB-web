import styled, { css } from 'styled-components';
import trashPng from '../assets/trash.png';

export const DeleteImageButton = styled.button`
  display: none;
  cursor: pointer;
  border-radius: 25px;
  background-color: rgba(0, 0, 0, 0.58);
  border: 2px solid rgb(211, 211, 211);
  position: absolute;
  top: 10px;
  left: 10px;
  background-image: url(${trashPng});
  width: 43px;
  height: 43px;
  box-sizing: border-box;
  background-size: 23px;
  background-position: center center;
  background-repeat: no-repeat;
  outline: none;
`;

interface ImagePreviewProps {
  backgroundImageUrl: string;
}

export const ImagePreview = styled.div`
  width: 100%;
  height: 275px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  box-sizing: border-box;
  border-radius: 6px;

  ${({ backgroundImageUrl }: ImagePreviewProps) =>
    backgroundImageUrl &&
    css`
      background-image: url(${backgroundImageUrl});

      ${DeleteImageButton} {
        display: block;
      }
    `}
`;
