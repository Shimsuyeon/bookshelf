import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";

import Area from "./atoms/containers/area/Area";
import Content from "./atoms/containers/content/Content";
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
    </Route>,
  ),
);

function App() {
  return (
    <>
      <Area>
        <Content>
          <RouterProvider router={router} />
        </Content>
      </Area>
    </>
  );
}

export default App;
