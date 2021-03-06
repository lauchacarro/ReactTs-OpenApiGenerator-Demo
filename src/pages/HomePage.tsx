import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { User } from "../models/User";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  const [users, setUsers] = useState<User[]>();

  useEffect(() => {
    fetch("https://localhost:44358/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  if (!users) {
    return (
      <>
        <p>Loading ...</p>
      </>
    );
  }
  if (users.length < 1) {
    return (
      <>
        <p className="white">No existe ningun usuario.</p>
        <Button href="/create">Crear Usuario</Button>
      </>
    );
  }

  return (
    <div className="container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Activo</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.lastName}</td>
              <td>{u.email}</td>
              <td>{u.isActive.toString()}</td>
              <td>
                <Button variant="outline-primary" href={"/update/" + u.id}>Editar</Button>
              </td>
              <td>
                <Button variant="outline-danger" href={"/delete/" + u.id}>Eliminar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default HomePage;
