import React, {
  FC,
  useState,
  useCallback,
  FormEvent,
  ChangeEvent,
  KeyboardEvent,
} from 'react';
import { Moment } from 'moment';
import { Key } from 'ts-keycode-enum';
import { DateRangeFilterDropdownButton } from '../DateRangeFilterDropdownButton';
import { TypeFilterDropdownButton } from '../TypeFilterDropdownButton';
import * as S from './styles';
import { Divider } from '../Divider';
import { MenuDialog } from '../MenuDialog';

interface SearchHeaderProps {
  onSearch: (arg: {
    searchKeyword: string;
    dates: {
      startDate: Moment | null;
      endDate: Moment | null;
    };
    type: null | '공용' | '개인';
  }) => void;
  savedSearchKeywords: string[];
  isLogined: boolean;
}

export const SearchHeader: FC<SearchHeaderProps> = ({
  onSearch,
  savedSearchKeywords,
  isLogined,
}) => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [dates, setDates] = useState<{
    startDate: Moment | null;
    endDate: Moment | null;
  }>({ startDate: null, endDate: null });
  const [type, setType] = useState<null | '공용' | '개인'>(null);
  const [isFocusedOnSearchInput, setIsFocusOnSearchInput] = useState(false);
  const [active, setActive] = useState(false);

  const handleClickShowMenuButton = useCallback(() => {
    setActive(!active);
  },                                            [active]);

  const handleChangeSearchInput = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
      setSearchKeyword(value);
    },
    [],
  );

  const handleKeyDownSearchInput = useCallback(
    ({ keyCode }: KeyboardEvent<HTMLInputElement>) => {
      if (keyCode === Key.Escape) {
        setIsFocusOnSearchInput(false);
      }
    },
    [],
  );

  const handleSearchFormSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setIsFocusOnSearchInput(false);
      onSearch({ searchKeyword, dates, type });
    },
    [onSearch, searchKeyword, dates, type],
  );

  const handleChangeDates = useCallback(
    dates => {
      setDates(dates);
      onSearch({ searchKeyword, dates, type });
    },
    [onSearch, searchKeyword, type],
  );

  const handleChangeType = useCallback(
    type => {
      setType(type);
      onSearch({ searchKeyword, dates, type });
    },
    [onSearch, searchKeyword, dates],
  );

  const focusSearchInput = useCallback(() => {
    setIsFocusOnSearchInput(true);
  },                                   []);

  const focusOutSearchInput = useCallback(() => {
    setIsFocusOnSearchInput(false);
  },                                      []);

  const searchWithSavedSearchKeyword = useCallback(
    (searchKeyword: string) => {
      setSearchKeyword(searchKeyword);
      setIsFocusOnSearchInput(false);
      onSearch({ searchKeyword, dates, type });
    },
    [onSearch, dates, type],
  );

  const wrappedSavedSearchKeywords = savedSearchKeywords.map(
    savedSearchKeyword => {
      const handleClick = searchWithSavedSearchKeyword.bind(
        undefined,
        savedSearchKeyword,
      );
      return (
        <S.SavedSearchKeyword key={savedSearchKeyword} onClick={handleClick}>
          {savedSearchKeyword}
        </S.SavedSearchKeyword>
      );
    },
  );

  return (
    <S.SearchHeader>
      <S.SearchForm
        onSubmit={handleSearchFormSubmit}
        isFocused={isFocusedOnSearchInput}
      >
        <S.LogoArea active={active}>
          <S.ShowMenuButton onClick={handleClickShowMenuButton}>
            <S.Logo />
            <S.BreakPointArrow />
          </S.ShowMenuButton>
        </S.LogoArea>
        <MenuDialog isLogined={isLogined} showMenu={active} />
        <S.SearchInput
          value={searchKeyword}
          onChange={handleChangeSearchInput}
          onFocus={focusSearchInput}
          onClick={focusSearchInput}
          onKeyDown={handleKeyDownSearchInput}
        />
        <S.CancelButton onClick={focusOutSearchInput}>취소</S.CancelButton>
        <S.SearchListBox>
          <S.SavedSearchKeywordsTitle>
            최근 검색 기록
          </S.SavedSearchKeywordsTitle>
          {wrappedSavedSearchKeywords}
        </S.SearchListBox>
      </S.SearchForm>
      <S.FilterButtonArea>
        <DateRangeFilterDropdownButton onApply={handleChangeDates} />
        <TypeFilterDropdownButton onApply={handleChangeType} />
      </S.FilterButtonArea>
      <Divider />
    </S.SearchHeader>
  );
};
