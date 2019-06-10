import React from 'react';

import * as S from './styles';

import facebookPng from '../../assets/facebook.png';

interface Props {
  facebookUrl: string;
  profileSrc: string;
  name: string;
}

export const UserProfile: React.FC<Props> = ({
  facebookUrl,
  profileSrc,
  name,
}) => {
  return (
    <S.UserProfile>
      <S.UserProfileThumb href={facebookUrl} target="_blank">
        <S.UserProfileImgCover>
          <S.UserProfileImg
            src={profileSrc}
            alt="사용자 페이스북 프로필 사진"
          />
        </S.UserProfileImgCover>
        <S.FacebookIcon src={facebookPng} alt="페이스북 로고" />
      </S.UserProfileThumb>
      <S.UserNameWrapper>
        <S.UserName>{name}</S.UserName>
      </S.UserNameWrapper>
    </S.UserProfile>
  );
};
