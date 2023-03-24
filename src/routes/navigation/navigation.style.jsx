import styled from "styled-components";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled.div`
  height: 100%;
  width: 70px;
  padding-top: 10px;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ul {
    list-style-type: none;
    display: flex;
  }
  
  li>a, li>span {
    display: inline-block;
    padding: 10px 15px;
    cursor: pointer;
  }
`