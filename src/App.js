//router-dom imports
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

//layout imports
import RootLayout, { rootLoader, setUserPreference } from "./layouts/root-layout";

//pages imports
import DisplayCards, { displayCardsLoader } from "./pages/display-cards";

//layout styles
import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>} loader={rootLoader} action={setUserPreference} error={<h1>Error in Root</h1>}>
      <Route index element={<DisplayCards/>} loader={displayCardsLoader}/>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
