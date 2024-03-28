import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserPage from "./page/UserPage";
import AdminPage from "./page/AdminPage";

function App() {
  return (
    <Router>
      <div className="bg-gray-100 flex justify-center items-center">
        <div className="text-center py-10">
          <h1 className="text-4xl font-bold ">BookOrderFlow</h1>
          <h3 className="my-8 text-gray-500">
            A Demo System for React | Asp .net core web api | Kafka | PowerBI
            implementation
          </h3>
          <div className="flex items-center justify-center gap-5">
            <Link
              to="/user"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              As User
            </Link>
            <Link
              to="/admin"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              As Admin
            </Link>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/user" element={<UserPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}

export default App;
