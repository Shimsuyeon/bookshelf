import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";

//import path from "path";
import BookDetailPage from "./pages/bookDetail/BookDetailPage";
import BookPage from "./pages/books/BookPage";
import BookshelfPage from "./pages/bookshelf/BookshelfPage";
import MainPage from "./pages/main/MainPage";
import Layout from "./template/layout/Layout";
import Paths from "./types/paths";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="*" element={<Navigate to={Paths.main} replace />} />,
      <Route path={Paths.main} element={<MainPage />} />,
      <Route path={Paths.bookshelf} element={<BookshelfPage />} />,
      <Route path={Paths.books} element={<BookPage />} />,
      <Route path={Paths.bookdetail} element={<BookDetailPage />} />,
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
