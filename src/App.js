import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import NotFound from "./pages/not-found/notFound";
import PostProvider from "./context/postContext";
import Single from "./pages/single/single";
import "./assets/scss/main.scss"

function App() {

  return (
    <PostProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single/:id" element={<Single />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PostProvider>
  );
}

export default App;
