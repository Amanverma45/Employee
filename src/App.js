import { AuthProvider } from "./Component/AuthContaxt";
import AppContaint from "./AppContaint";

function App() {
  return (
    <AuthProvider>
      <AppContaint />
    </AuthProvider>
  );
}

export default App;
