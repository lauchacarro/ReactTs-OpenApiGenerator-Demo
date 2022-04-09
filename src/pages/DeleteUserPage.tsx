import React, { FormEvent, FormEventHandler, useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";

interface DeleteUserPageProps {}

const DeleteUserPage: React.FC<DeleteUserPageProps> = () => {
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

  const handleSaveOnClick = () => {
    fetch("https://localhost:44358/api/users/" + id, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => (window.location.href = "/"));
  };

  return (
    <div className="container">
      <h3>
        ¿Desea eliminar el usuario Nro {id} de {name} {lastname}{" "}
      </h3>
      <Button variant="secundary" href="/">
        Cancelar
      </Button>
      <Button variant="danger" onClick={handleSaveOnClick}>
        Eliminar
      </Button>
    </div>
  );
};

export default DeleteUserPage;
