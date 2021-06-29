import React, { useEffect, useState } from 'react';
import { Container, Draggable } from 'react-smooth-dnd';
import sortBy from 'lodash/sortBy';
import PosCalculation from '../../tools/pos_calculation';
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

const CardContainer = ({ item, boards, deleteTask, index }) => {
  const [cards, setCards] = useState(null);
  const [isTempCardActive, setTempCardActive] = useState(false);
  const [cardText, setCardText] = useState('');

  useEffect(() => {
    if (item && item?.cards) {
      setCards(item?.cards);
    }
  }, [item]);

  const onCardDrop = (columnId, addedIndex, removedIndex, payload) => {
    let updatedPOS;
    if (addedIndex !== null && removedIndex !== null) {
      const boardCards = boards.filter((p) => p.id === columnId)[0];

      updatedPOS = PosCalculation(removedIndex, addedIndex, boardCards?.cards);

      let newCards = cards?.map((item) => {
        if (item?.id === payload.id) {
          return {
            ...item,
            pos: updatedPOS,
          };
        }
        return item;
      });
      newCards = sortBy(newCards, (item) => item?.pos);

      console.log('newCards', newCards);
      setCards(newCards);

      // Chamar back para atualziar card
    } else if (addedIndex !== null) {
      const newColumn = boards.filter((p) => p.id === columnId)[0];

      if (addedIndex === 0) {
        updatedPOS = newColumn.cards[0].pos / 2;
      } else if (addedIndex === newColumn.cards?.length) {
        updatedPOS = newColumn.cards[newColumn.cards?.length - 1].pos + 16384;
      } else {
        const afterCardPOS = newColumn.cards[addedIndex].pos;
        const beforeCardPOS = newColumn.cards[addedIndex - 1].pos;

        updatedPOS = (afterCardPOS + beforeCardPOS) / 2;
      }

      let newCards = cards?.map((item) => {
        if (item?.id === payload.id) {
          return {
            ...item,
            pos: updatedPOS,
          };
        }
        return item;
      });

      newCards = sortBy(newCards, (item) => item?.pos);

      setCards(newCards);

      // Chamar back para atualziar card
    }
  };

  const onAddButtonClick = () => {
    setTempCardActive(true);
  };

  const onAddCardSubmit = (e) => {
    e.preventDefault();
    const currentCards = cards || [];
    if (cardText) {
      setCards([...currentCards, {description: cardText}]);
      
      // Chamar back para add card
      setCardText('');
    }
  };

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
                console.log('card', e);
                onCardDrop(item?.id, e.addedIndex, e.removedIndex, e.payload);
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
              {cards?.map((card) => (
                <Card key={card.id} card={card} />
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
                    value="Cancelar"
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
