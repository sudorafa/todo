import React, { useState, useEffect } from 'react';
import { Container } from 'react-smooth-dnd';
import sortBy from 'lodash/sortBy';
import CardContainer from '../cards-container';
import PosCalculation from '../../tools/pos_calculation';
import {
  BoardContainer,
  AddSectionDiv,
  AddSectionForm,
  AddSectionLink,
  AddSectionLinkSpan,
  AddSectionInput,
  ActiveAddSectionInput,
  SubmitCardButtonDiv,
  SubmitCardButton,
  CancelCardButton,
} from './styles';

const Board = ({ todoSelected }) => {
  const [isAddSectionInputActive, setAddSectionInputActive] = useState(false);

  const [addSectionInpuText, setAddSectionInputText] = useState('');
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    if(todoSelected.tasks) setBoards(todoSelected.tasks);
  }, [todoSelected.tasks])
  
  const onAddSectionSubmit = () => {
    const currentList = boards || [];
    if (addSectionInpuText) {
      
      // Chamar back para add card
      setAddSectionInputText('');
      const task = { description: addSectionInpuText };

      setBoards([...currentList, task]);
    }
  };

  return (
    <BoardContainer>
      <Container
        orientation="horizontal"
        onDragStart={() => {
          console.log('on drag start');
        }}
        getChildPayload={(index) => boards[index]}
        dragHandleSelector=".column-drag-handle"
        dropPlaceholder={{
          animationDuration: 150,
          showOnTop: true,
          className: 'cards-drop-preview',
        }}
      >
        {boards.length > 0
          && boards.map((item, index) => (
            <CardContainer item={item} key={index} boards={boards} />
          ))}
      </Container>
      <AddSectionDiv>
        <AddSectionForm>
          {isAddSectionInputActive ? (
            <>
              <ActiveAddSectionInput
                value={addSectionInpuText}
                onChange={(e) => setAddSectionInputText(e.target.value)}
              />
              <SubmitCardButtonDiv>
                <SubmitCardButton
                  type="button"
                  value="Add Tarefa"
                  onClick={onAddSectionSubmit}
                />
                <CancelCardButton
                    type="button"
                    value="Cancelar"
                    onClick={() => setAddSectionInputActive(false) }
                  />
              </SubmitCardButtonDiv>
            </>
          ) : (
            <>
              <AddSectionLink onClick={() => setAddSectionInputActive(true)}>
                <AddSectionLinkSpan>
                  Criar Tarefa
                </AddSectionLinkSpan>
              </AddSectionLink>
              <AddSectionInput />
            </>
          )}
        </AddSectionForm>
      </AddSectionDiv>
    </BoardContainer>
  );
};

export default Board;
