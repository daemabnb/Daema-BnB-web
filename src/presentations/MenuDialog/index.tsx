import React, { FC } from 'react';
import * as S from './styles';
import { Divider } from '../Divider';

interface MenuDialogProps {
  showMenu: boolean;
  isLogined: boolean;
}

export const MenuDialog: FC<MenuDialogProps> = ({ showMenu, isLogined }) => {
  const menuLinkList = isLogined ? (
    <>
      <S.MenuLink to="/">구매내역</S.MenuLink>
      <S.MenuLink to="/">판매내역</S.MenuLink>
      <S.MenuLink to="/">대여내역</S.MenuLink>
      <S.MenuLink to="/">공유내역</S.MenuLink>
      <Divider />
      <S.MenuLink to="/">물건 등록하기</S.MenuLink>
      <Divider />
      <S.MenuLink to="/">로그아웃</S.MenuLink>{' '}
    </>
  ) : (
    <>
      <S.MenuLink to="/">회원가입</S.MenuLink>
      <S.MenuLink to="/">로그인</S.MenuLink>
    </>
  );

  return (
    <S.MenuDialog showMenu={showMenu}>
      <S.MenuLink to="/">홈</S.MenuLink>
      <Divider />
      {menuLinkList}
    </S.MenuDialog>
  );
};
