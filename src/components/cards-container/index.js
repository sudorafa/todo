import React, { useEffect, useState } from 'react';
import { Container, Draggable } from 'react-smooth-dnd';
import Card from '../card';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';

import {
  Wrapper,
  WrappedSection,
  CardContainerHeader,
  ContainerContainerTitle,
  CardsContainer,
  AddCardButtonDiv,
  AddCardButtonSpan,
  CardComposerDiv,
  ListCardComponent,
  ListCardDetails,
  ListCardTextArea,
  SubmitCardButtonDiv,
  SubmitCardButton,
  CancelCardButton,
} from './styles';

import { post, deleteOne, update } from "../../services/api";

const CardContainer = ({ item, deleteTask, index, updateTodos }) => {
  const [cards, setCards] = useState(null);
  const [isTempCardActive, setTempCardActive] = useState(false);
  const [cardText, setCardText] = useState('');

  useEffect(() => {
    if (item && item?.subTasks) {
      setCards(item?.subTasks);
    }
  }, [item]);

  const onCardDrop = (columnId, addedIndex, removedIndex, payload) => {
    if (removedIndex !== null && addedIndex !== null ) {  console.log('rafa'); return;}
    else if (removedIndex !== null) deleteSubTask(payload, removedIndex, false);
    else if (addedIndex !== null) updateSubTask(payload, columnId);
  };

  const onAddButtonClick = () => {
    setTempCardActive(true);
  };

  const onAddCardSubmit = async (e) => {
    e.preventDefault();
    if (cardText) {
      createSubTask(cardText, item._id);
    }
  };

  const createSubTask = async (text, taskId) => {
    const currentCards = cards || [];
    const { subTask } = await post('subTask', { description: text, taskId });
    const newTasks = [...currentCards, subTask];
    setCards(newTasks);
    setCardText('');
    updateTodos();
  }

  const updateSubTask = (subTask, taskId) => {
    const currentCards = cards || [];
    update('subTask/'+subTask._id, { description: subTask.description, taskId });
    const newTasks = [...currentCards, subTask];
    setCards(newTasks);
    setCardText('');
    updateTodos();
  }

  const deleteSubTask = (subTask, index, update = true) => {
    if (update) deleteOne('subTask/'+subTask._id);
    var newList = cards;
    newList.splice(index, 1);
    setCards(newList);
    if (update) updateTodos();
  }

  return (
    
    <Draggable key={item?._id}>
      <Wrapper className="card-container">
        <WrappedSection>
          <CardContainerHeader className="column-drag-handle">
            <ContainerContainerTitle>
            <Grid container>
              <Grid item xs={12} md={8} lg={9}>
                {item?.description}
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
              <AddCardButtonDiv onClick={() => deleteTask(item, index)}><DeleteIcon /></AddCardButtonDiv>
              </Grid>
            </Grid>
            </ContainerContainerTitle>
          </CardContainerHeader>
          <CardsContainer>
            <Container
              orientation="vertical"
              groupName="col"
              // onDragStart={(e) => console.log("Drag Started")}
              // onDragEnd={(e) => console.log("drag end", e)}
              onDrop={(e) => {
                onCardDrop(item?._id, e.addedIndex, e.removedIndex, e.payload);
              }}
              dragClass="card-ghost"
              dropClass="card-ghost-drop"
              onDragEnter={() => {
                // console.log("drag enter:", item?.id);
              }}
              getChildPayload={(index) => cards[index]}
              onDragLeave={() => {
                // console.log("drag leave:", item?.id);
              }}
              // onDropReady={(p) => console.log("Drop ready: ", p)}
              dropPlaceholder={{
                animationDuration: 150,
                showOnTop: true,
                className: 'drop-preview',
              }}
              dropPlaceholderAnimationDuration={200}
            >
              {cards && cards?.map((card, index) => (
                <Card key={card.id} card={card} deleteSubTask={deleteSubTask} index={index}/>
              ))}
            </Container>
            {isTempCardActive ? (
              <CardComposerDiv>
                <ListCardComponent>
                  <ListCardDetails>
                    <ListCardTextArea
                      value={cardText}
                      placeholder="Criar Sub Tarefa"
                      onChange={(e) => {
                        setCardText(e.target.value);
                      }}
                    />
                  </ListCardDetails>
                </ListCardComponent>
                <SubmitCardButtonDiv>
                  <SubmitCardButton
                    type="button"
                    value="Salvar"
                    onClick={onAddCardSubmit}
                  />
                  <CancelCardButton
                    type="button"
                    value="Fechar"
                    onClick={() => setTempCardActive(false)}
                  />
                </SubmitCardButtonDiv>
              </CardComposerDiv>
            ) : (
              <AddCardButtonDiv onClick={onAddButtonClick}>
                <AddCardButtonSpan>Criar sub tarefa</AddCardButtonSpan>
              </AddCardButtonDiv>
            )}
          </CardsContainer>
        </WrappedSection>
      </Wrapper>
    </Draggable>
  );
};

export default CardContainer;
