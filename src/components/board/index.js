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

const Board = () => {
  const [isAddSectionInputActive, setAddSectionInputActive] = useState(false);

  const [addSectionInpuText, setAddSectionInputText] = useState('');
  const [boards, setBoards] = useState([]);
  const [data, setData] = useState([]);
  const [posChanged, setPosChanged] = useState([]);
  const [sectionAdded, setSectionAdded] = useState([]);

  const onColumnDrop = ({ removedIndex, addedIndex, payload }) => {
    if (data) {
      const updatePOS = PosCalculation(
        removedIndex,
        addedIndex,
        data.fetchSections,
      );
      const newBoards = boards.map((board) => {
        if (board.id === payload.id) {
          return { ...board, pos: updatePOS };
        }
        return board;
      });

      const sortedBoards = sortBy(newBoards, [
        (board) => board.pos,
      ]);

      // Chamar back para atualizar aqui
      setBoards([...sortedBoards]);
    }
  };

  const onAddSectionSubmit = () => {
    const currentList = boards || [];
    if (addSectionInpuText) {
      setBoards([...currentList, {name: addSectionInpuText}]);
      
      // Chamar back para add card
      setAddSectionInputText('');
    }
  };

  return (
    <BoardContainer>
      <Container
        orientation="horizontal"
        onDrop={onColumnDrop}
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
