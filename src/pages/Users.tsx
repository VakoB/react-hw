import axios from "axios";
import { useEffect, useState } from "react";
import type UserProps from "../types/UserProps";
import User from "../components/User";
import styled from "styled-components";
import backButton from "../assets/ic_back.svg"
import { useNavigate } from "react-router";

const UsersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  text-align: center;
  margin-top: 40px;
`

const Image = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  &:hover {
    cursor: pointer;
  }
`

export default function Users() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <Image onClick={() => {navigate(-1)}} src={backButton} alt="back button"/>
      <Title>Users</Title>
      <UsersContainer>
        {data.map((user: UserProps) => (
          <User key={user.id} {...user} />
        ))}
      </UsersContainer>
    </>
  );
}
