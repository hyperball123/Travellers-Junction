import { BrowserRouter,Routes,Route } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
// import ProtectedRoute from "./ui/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route index element={<Navigate replace to='home' />} /> */}
        <Route path='/' element={<Home />} />
        
       {/* <Route element={<AppLayout />}>  */}
         {/* <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            > */}

        {/* </Route> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App
