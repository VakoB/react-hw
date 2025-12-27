import { Link } from "react-router";
import styled from "styled-components";


const CustomLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 700;
`;
const Navigation = styled.nav`
  display: flex;
  gap: 10px;
  max-width: 1000px;
  width: 100%;
  
`;
const HeaderWrapper = styled.div`
  padding-block: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <Navigation>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="users">Users</CustomLink>
      </Navigation>
    </HeaderWrapper>
  );
}
