import styled from "styled-components";

export const StyledLayout = styled.div`
  display: flex;
  height: 100%;
  overflow-y: auto;
  flex-direction: column;
`;

export const StyledHeaderWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.previewHeaderBackground};
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  font-size: 25px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.previewHeaderContent};
  padding-top: 8px;
  width: 170px;
  display: inline-flex;
`;

export const StyledLabelThin = styled.span`
  font-family: "Heebo", sans-serif;
  margin-inline-end: 2px;
`;
export const StyledLabelThick = styled.span`
  font-family: "Roboto", sans-serif;
`;

export const BodyContainer = styled.div<{ isHome?: boolean }>`
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme, isHome }) =>
    !isHome && theme.colors.previewHeaderBackground};
`;

export const BackButton = styled.button`
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translate(-50%, -50%);
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  cursor: pointer;
  outline: inherit;
`;
export const Avatar = styled.img``;

export const StyledLogo = styled.img`
  margin-inline-start: 48px;
  margin-inline-end: 8px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
