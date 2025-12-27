import styled from "styled-components";
import lofi from "../assets/lo-fi.jpg";
import { Link } from "react-router";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  margin-top: 40px;
`;

const Image = styled.img`
  width: 100%;
  max-width: 600px;
  border-radius: 25px;
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;
`;

const Text = styled.p`
  max-width: 500px;
  text-align: center;
`;

const Button = styled.button`
  all: unset;
  background-color: white;
  border: 1px solid #ff4b33;
  color: #ff4b33;
  transition: all 0.3s;
  padding: 5px 20px;
  border-radius: 15px;
  &:hover {
    cursor: pointer;
    background-color: #ff4b33;
    color: white;
  }
`;

const CustomLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export default function Home() {
  return (
    <Container>
      <Image src={lofi} alt="background image" />
      <Title>City view</Title>
      <Text>
        A calm look at the city’s skyline and everyday rhythm. Where modern
        architecture meets the open sky.
      </Text>
      <CustomLink to="users">
        <Button>See users</Button>
      </CustomLink>
    </Container>
  );
}
