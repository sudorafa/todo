import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-smooth-dnd';
import { CardContainer } from './styles';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';

const CardContent = styled.div``;

const Card = ({ card, deleteSubTask, index }) => (
  
  <Draggable key={card.id}>
    <CardContainer className="card">
      <CardContent>
        

        <Grid container>
              <Grid item xs={12} md={8} lg={9}>
              {card.description}
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
              {/* <AddCardButtonDiv onClick={() => deleteSubTask(card.id, index)}><DeleteIcon /></AddCardButtonDiv> */}
              <DeleteIcon onClick={() => deleteSubTask(card, index)}/>
              </Grid>
            </Grid>

      </CardContent>
    </CardContainer>
  </Draggable>
);

export default Card;
