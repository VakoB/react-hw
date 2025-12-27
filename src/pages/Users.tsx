import axios from "axios";
import { useEffect, useState } from "react";
import type UserProps from "../types/UserProps";
import User from "../components/User";
import styled from "styled-components";

const UsersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  text-align: center;
  margin-top: 40px;
`



export default function Users() {
  const [data, setData] = useState([]);

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
      <Title>Users</Title>
      <UsersContainer>
        {data.map((user: UserProps) => (
          <User key={user.id} {...user} />
        ))}
      </UsersContainer>
    </>
  );
}
