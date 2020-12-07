import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { observer } from "mobx-react";

const ItemNote = ({ note }) => {
  const Title = styled.h1`
    text-align: left;
    color: #8a2be2;
  `;

  return (
    <div>
      <li>
        <Link to={`/notes/${note.slug}`}>
          <Title>{note.title}</Title>
        </Link>
      </li>
    </div>
  );
};

export default observer(ItemNote);
