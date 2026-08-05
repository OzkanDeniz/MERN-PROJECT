import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import CreatePage from "./pages/CreatePage";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Box minH={"1000vh"}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="create/" element={<CreatePage />} />
      </Routes>
    </Box>
  );
};

export default App;
