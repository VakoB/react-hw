import styled from "styled-components";
import type UserProps from "../types/UserProps";
import location from "../assets/ic_location.svg"

const Container = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  border: 1px solid #ff4b33;
  width: 100%;
  max-width: 1000px;
  margin-block: 10px;
  padding: 10px 20px;
  border-radius: 25px;
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  padding-right: 10px;
  border-right: #ff4b33 solid 1px;
`;

const Name = styled.p`
  font-size: 12px;
  color: #727272;

`;

const Username = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

const Email = styled.p`
  color: #3e3e3e;
  font-style: italic;
  font-size: 16px;
`;

const City = styled.p`
  color: #3e3e3e;
`;

const CityContainer = styled.div`
  display: flex;
  align-items: center;
`

export default function User(props: UserProps) {
  return (
    <Container>
      <NameContainer>
        <Username>{props.username}</Username>
        <Name>{props.name}</Name>
      </NameContainer>

      <Email>{props.email}</Email>
      <CityContainer> 
        <img src={location} alt="location icon" />
        <City>{props.address.city}</City>
      </CityContainer>
      
      
    </Container>
  );
}
