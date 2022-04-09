import React, { FormEvent, FormEventHandler, useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";

interface CreateUserPageProps {}

const CreateUserPage: React.FC<CreateUserPageProps> = () => {
  const [name, setName] = useState<string>();
  const [lastname, setLastname] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [isActive, setActive] = useState<boolean>(true);

  const handleSaveOnClick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch("https://localhost:44358/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
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
          Crear
        </Button>
      </Form>
    </div>
  );
};

export default CreateUserPage;
