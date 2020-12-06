import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const ItemNote = ({ note }) => {
  const Title = styled.h1`
    text-align: center;
    color: #cc0000;
  `;

  return (
    <div>
      <Link to={`/notes/${note.slug}`}>
        <Title>{note.title}</Title>
      </Link>
    </div>
  );
};

export default ItemNote;
