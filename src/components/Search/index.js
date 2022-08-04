import React from 'react'
import styled from 'styled-components'
import { CustomButton, GeneralMdText } from '../../assets/styles/GlobalStyles';

export const SearchSection = styled.section`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin: 3rem 0;
`;

export const SearchFormContainer = styled.div`
width: min(100%, 60rem);
`;
export const SearchForm = styled.form`
display: flex;
justify-content: space-between;
flex-direction: row;
`;

export const SearchInput = styled.input`
  background-color: #FAFAFA;
  border: none;
  border: 1px solid var(--gray-3);
  height: 48px;
  padding: 0.6rem 2rem;
  width: ${({ width }) => (width ? width : "100%")};
  border-radius: 4px;
  font-weight: 600;
  box-sizing: border-box;
  color: var(--input-color);
  font-size: 14px;
  line-height: 17.05px;
  margin-right: 10px;


  &.invalid {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23dc3545' viewBox='-2 -2 7 7'%3E%3Cpath stroke='%23dc3545' d='M0 0l3 3m0-3L0 3'/%3E%3Ccircle r='.5'/%3E%3Ccircle cx='3' r='.5'/%3E%3Ccircle cy='3' r='.5'/%3E%3Ccircle cx='3' cy='3' r='.5'/%3E%3C/svg%3E") !important;
    border-color: rgba(220, 53, 69, 0.5) !important;
    color: #dc3545;
    background-repeat: no-repeat;
    background-position: right calc(0.375em + 0.1875rem) center;
    background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
  }

  &::placeholder {
    font-size: 14px;
    line-height: 17.05px;
    font-weight: 400;
    color: var(--gray-color);
    opacity: 0.6;
  }

  &:focus {
    color: var(--gray-color);
    background-color: transparent;
    border-color: var(--primary);
    outline: 0;
    box-shadow: none !important;
  }
  
`;

const Search = ({typeUrl}) => {
  return (
    <>
      <SearchSection>
        <SearchFormContainer>
          {typeUrl === "store" && (
          <GeneralMdText fontWeight="600" textTransform="unset" textAlign="center" margin="1rem 0 2rem" fontSize="40px" lineHeight="49px" color="var(--text-secondary)">Welcome to Misa Shoes and Bags</GeneralMdText>
          )}
          <SearchForm>
            <SearchInput type="text" placeholder="Search product, brands and categories" />
            <CustomButton width="20%" background="var(--primary)" border="1px solid var(--primary)" fontWeight="600" color="var(--white)" fontSize="15px" lineHeight="20px">Search</CustomButton>
          </SearchForm>
        </SearchFormContainer>
      </SearchSection>

    </>
  )
}

export default Search