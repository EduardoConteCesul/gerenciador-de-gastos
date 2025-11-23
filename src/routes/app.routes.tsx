import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "@screens/Home";
import { ListPage } from "@screens/ListPage";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator initialRouteName="listPage" screenOptions={{ headerShown: false }}>
      <Screen name="listPage" component={ListPage} />
      <Screen name="home" component={Home} />
    </Navigator>
  )
}