import styled, { css } from 'styled-components';
import plusPng from '../assets/plus.png';

export const ImageUploader = styled.div`
  margin-bottom: 30px;
`;

export const HiddenFileInput = styled.input`
  display: none;
`;

export const ImageUploadable = styled.label`
  width: 100%;
  cursor: pointer;
  box-sizing: border-box;
  display: table;
  position: relative;
`;

interface TableCellProps {
  isCoverImage: boolean;
  isActive: boolean;
}

export const TableCell = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  border: 2px dashed rgb(187, 187, 187);
  border-radius: 6px;

  ${({ isCoverImage }: TableCellProps) => css`
    height: ${isCoverImage ? '400' : '290'}px;
  `}

  ${({ isActive }: TableCellProps) =>
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
