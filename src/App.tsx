import "./App.css";
import { Application } from "./components/application/Application";
import { Skills } from "./components/skills/skills";
import { Counter } from "./components/counter/Counter";
import { MuiMode } from "./components/mui/MuiMode";
import { AppProviders } from "./providers/AppProviders";
import { CounterTwo } from "./components/counter-two/CounterTwo";

function App() {
  return (
    <AppProviders>
      <div className="App">
        {/* <Skills skills={["HTML", "CSS"]}/> */}
        {/* <Application /> */}
        {/* <Counter /> */}
        {/* <MuiMode /> */}
      </div>
    </AppProviders>
  );
}

export default App;
