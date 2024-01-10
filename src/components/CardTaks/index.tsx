import { TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import theme from "../../theme";
import * as S from "./styles";

interface ICardTaksProps {
  id: number;
  file: string;
  task: string;
  completed: boolean;
  image: string;
  markTodoComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const NotFoundImage =
  "https://firebasestorage.googleapis.com/v0/b/tasks-6cb2d.appspot.com/o/notFoundImage.png?alt=media&token=efac920c-f3b9-4924-8cc3-17e08b48830c";

const CardTaks: React.FC<ICardTaksProps> = ({
  id,
  file,
  task,
  completed,
  image,
  markTodoComplete,
  deleteTodo,
}) => {
  const getFileName = (uri: string, maxLength = 12) => {
    const pathArray = uri.split("/");
    const fileName = pathArray[pathArray.length - 1];

    if (fileName.length > maxLength) {
      const truncatedName = fileName.substring(0, maxLength - 3) + "...";
      return truncatedName;
    }

    return fileName;
  };

  return (
    <S.Container testID="component-CardTaks">
      <S.Card>
        <S.Content>
          <View style={{ flex: 1 }}>
            <S.TextTask completed={completed}>{task}</S.TextTask>
          </View>
          {!completed && (
            <TouchableOpacity onPress={() => markTodoComplete(id)}>
              <View style={{ backgroundColor: "green" }}>
                <Icon name="done" size={20} color="white" />
              </View>
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={() => deleteTodo(id)}>
            <View>
              <Icon name="delete" size={30} color="red" />
            </View>
          </TouchableOpacity>
        </S.Content>
      </S.Card>
      <S.Wrapper>
        <S.CardImage
          source={{
            uri: image ? image : NotFoundImage,
          }}
          alt={task}
        />
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon
            name="cloud-upload"
            size={40}
            color={theme.colors.gray}
            style={{
              marginTop: 10,
            }}
          />
          {file && <S.Text>{`${getFileName(file)}`}</S.Text>}
        </View>
      </S.Wrapper>
    </S.Container>
  );
};

export default CardTaks;
