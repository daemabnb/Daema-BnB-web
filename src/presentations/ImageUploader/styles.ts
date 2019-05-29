import styled, { css } from 'styled-components';
import plusPng from '../assets/plus.png';

export const ImageUploader = styled.div`
  margin-bottom: 30px;
`;

export const HiddenFileInput = styled.input`
  display: none;
`;

interface ImageUploadableProps {
  isCoverImage: boolean;
  isActive: boolean;
}

export const ImageUploadable = styled.label`
  width: 100%;
  cursor: pointer;
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  border: 2px dashed rgb(187, 187, 187);
  border-radius: 6px;

  ${({ isCoverImage }: ImageUploadableProps) => css`
    height: ${isCoverImage ? '400' : '290'}px;
  `}

  ${({ isActive }: ImageUploadableProps) =>
    isActive &&
    css`
      border-color: #008489;
    `}
`;

export const PlusIcon = styled.div`
  width: 28px;
  height: 28px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  display: inline-block;
  background-image: url(${plusPng});
`;

export const UploadExplain = styled.div`
  font-size: 19px;
  margin-top: 12px;
  color: #484848;
`;
