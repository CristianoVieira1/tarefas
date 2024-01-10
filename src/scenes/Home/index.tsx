import NotFound from "@assets/icons/notFound.svg";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import CreateTaskModal from "../../components/CreateTaskModal";
import ListItem from "../../components/ListItem";
import OffLineModal from "../../components/OffLineModal";
import * as S from "./styles";
import { useViewModel } from "./viewModel";

const Home: React.FC = () => {
  const {
    file,
    todos,
    image,
    addTodo,
    textInput,
    openModal,
    deleteTodo,
    setTextInput,
    pickDocument,
    showCompleted,
    clearAllTodos,
    handleModalOff,
    handleImageUser,
    setShowCompleted,
    markTodoComplete,
    openModalOffiLine,
    handleModalNewTask,
  } = useViewModel();

  const filteredTodos = showCompleted
    ? todos.filter((todo) => todo.completed)
    : todos;

  return (
    <S.Container>
      <S.Header>
        <S.Text>Tarefas</S.Text>
        <Icon name="trash" size={25} color="red" onPress={clearAllTodos} />
      </S.Header>

      <S.Filter>
        <S.FilterButton onPress={() => setShowCompleted(!showCompleted)}>
          <Icon
            name={showCompleted ? "check-square" : "square-o"}
            size={20}
            color="green"
          />
          <S.FilterButtonText>
            {showCompleted ? "Mostrar Todos" : "Mostrar Concluídos"}
          </S.FilterButtonText>
        </S.FilterButton>
      </S.Filter>

      {filteredTodos.length === 0 ? (
        <S.EmptyListImage>
          <NotFound width={200} height={200} />
          <S.Text>Lista vazia</S.Text>
        </S.EmptyListImage>
      ) : (
        <ListItem
          list={filteredTodos}
          markTodoComplete={markTodoComplete}
          deleteTodo={deleteTodo}
        />
      )}

      <S.TouchableOpacity onPress={handleModalNewTask}>
        <S.IconContainer>
          <Icon name="plus" color="white" size={30} />
        </S.IconContainer>
      </S.TouchableOpacity>

      <CreateTaskModal
        file={file || ""}
        image={image}
        isVisible={openModal}
        textInput={textInput}
        onAction={() => addTodo()}
        onClose={handleModalNewTask}
        setTextInput={(text) => setTextInput(text)}
        onActionImagePicker={() => handleImageUser()}
        onActionDocumentPicker={() => pickDocument()}
      />
      <OffLineModal
        isVisible={openModalOffiLine}
        onClose={() => handleModalOff()}
      />
    </S.Container>
  );
};

export default Home;
