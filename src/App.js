import { AppContainer, WelcomeTextContainer } from "./styles/styles";
import TimePickersList from "./components/TimePickersList";

const App = () => {
  return (
    <AppContainer>
      <WelcomeTextContainer>
      <h1>Welcome User</h1>
      <h3>Please Select Opening and Closing times below</h3>
      </WelcomeTextContainer>
      <TimePickersList />
    </AppContainer>
  );
};

export default App;
