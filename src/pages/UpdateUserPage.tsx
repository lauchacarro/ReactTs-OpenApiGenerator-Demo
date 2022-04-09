import React, { FormEvent, FormEventHandler, useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";

interface UpdateUserPageProps {}

const UpdateUserPage: React.FC<UpdateUserPageProps> = () => {
  const [name, setName] = useState<string>();
  const [lastname, setLastname] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [isActive, setActive] = useState<boolean>(true);

  const { id } = useParams();

  useEffect(() => {
    fetch("https://localhost:44358/api/users/" + id)
      .then((response) => response.json())
      .then((data) => {
        setName(data.name);
        setLastname(data.lastName);
        setEmail(data.email);
        setActive(data.isActive);
      });
  }, [id]);

  const handleSaveOnClick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch("https://localhost:44358/api/users", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: parseInt(id!),
        name: name,
        lastname: lastname,
        email: email,
        isActive: isActive,
      }),
    })
      .then((response) => response.json())
      .then((data) => (window.location.href = "/"));
  };

  return (
    <div className="container">
      <Form className="form" onSubmit={handleSaveOnClick}>
        <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombre del usuario"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3 form-group" controlId="formBasicPassword">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type="text"
            placeholder="Apellido"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3 form-group" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3 form-group" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Activo"
            checked={isActive}
            onChange={(e) => setActive(e.target.checked)}
          />
        </Form.Group>

        <Button variant="secundary" href="/">
          Cancelar
        </Button>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </div>
  );
};

export default UpdateUserPage;
