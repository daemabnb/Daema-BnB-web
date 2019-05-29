import styled from 'styled-components';

import ic_left_arrowPng from '../../assets/icon/ic_left_arrow.png';
import ic_right_arrowPng from '../../assets/icon/ic_right_arrow.png';

export const ImagePagination = styled.div`
  background: #f0f0f0;
  width: 100%;
  height: 50vw;
  max-height: 350px;
  position: relative;
`;

interface ImagePresenterProps {
  src: string;
}

export const ImagePresenter = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props: ImagePresenterProps) => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 56px;
  width: 56px;
  background-repeat: no-repeat;
  background-size: contain;
  &:hover {
    cursor: pointer;
  }
  &:active {
    opacity: 0.4;
  }
`;

export const LeftArrow = styled(Arrow)`
  left: 0;
  background-image: url(${ic_left_arrowPng});
`;

export const RightArrow = styled(Arrow)`
  right: 0;
  background-image: url(${ic_right_arrowPng});
`;

export const Pagination = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 0;
`;

interface PaginationItemProps {
  isSelected: boolean;
}

export const PaginationItem = styled.div`
  background: ${(props: PaginationItemProps) =>
    props.isSelected ? '#fff' : 'rgba(255, 255,255, 0.8)'};
  width: ${(props: PaginationItemProps) => (props.isSelected ? '8px' : '6px')};
  height: ${(props: PaginationItemProps) => (props.isSelected ? '8px' : '6px')};
  border-radius: 3px;
  margin: 0 5px;
`;
