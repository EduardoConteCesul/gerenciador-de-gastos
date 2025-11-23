import { BackButton } from "@components/BackButton";
import { Form } from "@components/Form";
import { useNavigation } from "@react-navigation/native";
import { Container, ContentBackButton, ContentForm } from "./styles";

export function Home() {

  const navigation = useNavigation();

  function handleNavigateToListPage() {
    navigation.navigate('listPage')
  }

  return (
    <Container>

      <ContentBackButton>
        <BackButton
          onPress={handleNavigateToListPage}
          icon="PRIMARY"
        />
      </ContentBackButton>

      <ContentForm>
        <Form />
      </ContentForm>

    </Container>
  )
}