import { TodoItem } from "@scenes/Home/viewModel";
import React from "react";
import { FlatList } from "react-native";
import CardTaks from "../CardTaks";
import * as S from "./styles";

export interface ListItemModel {
  list: TodoItem[];
  markTodoComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const ListItem: React.FC<ListItemModel> = ({
  list,
  markTodoComplete,
  deleteTodo,
}) => {
  return (
    <S.Container>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 20, paddingBottom: 100 }}
        data={list}
        renderItem={({ item }) => (
          <CardTaks
            {...item}
            markTodoComplete={markTodoComplete}
            deleteTodo={deleteTodo}
          />
        )}
      />
    </S.Container>
  );
};

export default ListItem;
