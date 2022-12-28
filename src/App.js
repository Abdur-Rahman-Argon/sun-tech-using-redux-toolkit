import { RouterProvider } from "react-router";
import routes from "./routes/routes";

function App() {
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
