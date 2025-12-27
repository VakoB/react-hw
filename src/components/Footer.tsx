import styled from "styled-components";

const FooterWrapper = styled.footer`
  width: 100%;
  margin-top: auto;
  padding: 20px 16px;
  background-color: #ff4b33;
  border-top: 1px solid #eaeaea;
  margin-top: 40px;
`;

const FooterContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;


  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Text = styled.p`
  margin: 0;
  font-size: 14px;
  color: white;
`;

const Links = styled.div`
  display: flex;
  gap: 16px;
`;

const Link = styled.a`
  font-size: 14px;
  color: white;
  text-decoration: none;
  transition: color 0.2s ease;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterContent>
        <Text>© 2025 City View. All rights reserved.</Text>

        <Links>
          <Link href="/">Home</Link>
          <Link href="users">Users</Link>
        </Links>
      </FooterContent>
    </FooterWrapper>
  );
}