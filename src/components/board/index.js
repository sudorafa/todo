import React, { useState, useEffect } from 'react';
import { Container } from 'react-smooth-dnd';
import CardContainer from '../cards-container';
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
import { post } from "../../services/api";

const Board = ({ todoSelected, updateTodos }) => {
  const [isAddSectionInputActive, setAddSectionInputActive] = useState(false);

  const [addSectionInpuText, setAddSectionInputText] = useState('');
  const [boards, setBoards] = useState([]);

  const createTask = () => {
    setAddSectionInputActive(true)
  }

  useEffect(() => {
    if(todoSelected.tasks) setBoards(todoSelected.tasks);
  }, [todoSelected.tasks])
  
  const onAddSectionSubmit = async () => {
    const currentList = boards || [];
    if(addSectionInpuText) {
      setAddSectionInputText('');
      const { task } = await post('task', { description: addSectionInpuText, todoId: todoSelected._id });
      const newBoard = [...currentList, task];
      setBoards(newBoard);
      updateTodos(todoSelected._id);
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
              <AddSectionLink onClick={createTask}>
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
