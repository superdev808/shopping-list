import ShoppingPage from "./containers/shopping-page";
import AppStateProvider from "./hooks/AppStateProvider";

function App() {
  return (
    <AppStateProvider>
      <ShoppingPage />
    </AppStateProvider>
  );
}

export default App;
