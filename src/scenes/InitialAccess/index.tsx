import AnimateIcon from "@assets/animations/splashScreen.json";
import Background from "@assets/images/splash-background.png";
import { Lottie } from "@components/Animations/Lottie";
import Button from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import * as S from "./styles";

const InitialAccess: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar translucent style="light" />
      <S.Container>
        <Lottie
          source={AnimateIcon}
          width={400}
          height={400}
          useNativeLooping
        />

        <S.Text>
          Organize sua vida com facilidade! Crie, gerencie e conclua suas
          tarefas de forma eficiente. Simplifique seu dia a dia e alcance seus
          objetivos com nosso aplicativo intuitivo. Comece agora
        </S.Text>

        <S.Submit animation={"bounceInLeft"} useNativeDriver duration={2500}>
          <Button
            title="Acessar"
            type="accept"
            size="medium"
            onPress={() => navigation.navigate("Home")}
          />
        </S.Submit>

        <S.Background
          source={Background}
          resizeMode="cover"
          style={[
            StyleSheet.absoluteFillObject,
            { overflow: "hidden", zIndex: -1 },
          ]}
        />
      </S.Container>
    </>
  );
};

export default InitialAccess;
