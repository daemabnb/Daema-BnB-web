import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardList = styled.div`
  margin-top: 145px;
  display: flex;
  flex-wrap: wrap;
`;

export const CardLink = styled(Link)`
  display: block;
  width: 50%;
  text-decoration: none;
  color: unset;
`;
