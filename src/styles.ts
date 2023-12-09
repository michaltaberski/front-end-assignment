import styled, { css } from "styled-components";

/**
 * If you like we could consider to use here CSS variables instead
 */
export const primaryColor = "#2d3848";
export const secondaryColor = "#3a4557";

export const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px;
`;

export const Header = styled.h1`
  margin: 0;
  background-color: ${secondaryColor};
  text-align: center;
  font-size: 24px;
  padding: 10px 0;
`;

export const inputStyle = css`
  padding: 10px;
  font-size: 16px;
  border: 2px solid ${secondaryColor};
  border-radius: 40px;
  background-color: transparent;
  color: #fff;
`;

export const SearchInput = styled.input`
  ${inputStyle};
  padding: 10px;
  font-size: 16px;
  border: 2px solid ${secondaryColor};
  border-radius: 40px;
  background-color: transparent;
  color: #fff;
`;

export const SelectInput = styled.select`
  ${inputStyle};
`;

export const StatusText = styled.p`
  margin: 0 2rem;
  font-size: 2rem;
  text-align: center;
  color: #fff;
`;
