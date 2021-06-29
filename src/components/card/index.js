import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-smooth-dnd';
import { CardContainer } from './styles';

const CardContent = styled.div``;

const Card = ({ card }) => (
  
  <Draggable key={card.id}>
    <CardContainer className="card">
      <CardContent>{card.description}</CardContent>
    </CardContainer>
  </Draggable>
);

export default Card;
