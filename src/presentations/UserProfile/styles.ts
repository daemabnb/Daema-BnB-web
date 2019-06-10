import styled from 'styled-components';

export const UserProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const UserProfileThumb = styled.a`
  position: relative;
`;

export const UserProfileImgCover = styled.div`
  border-radius: 44px;
`;

export const UserProfileImg = styled.img`
  height: 88px;
  width: 88px;
`;

export const FacebookIcon = styled.img`
  position: absolute;
  height: 23px;
  width: 23px;
  right: 0;
  bottom: 0;
`;

export const UserNameWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const UserName = styled.p`
  margin-left: 24px;
  font-size: 14px;
  font-weight: 800;
  vertical-align: middle;
`;
