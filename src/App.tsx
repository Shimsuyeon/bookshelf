import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";

import BookStoryBurnout from "./pages/bookBurnout/BookStoryBurnout";
import BookStoryEducation from "./pages/bookEducation/BookStoryRoll";
import BookInfoPage from "./pages/bookInfo/BookInfoPage";
import BookListPage from "./pages/bookList/BookList";
import BookPage from "./pages/books/BookPage";
import BookStoryRoll from "./pages/bookStory/BookStoryRoll";
import BookTotalPage from "./pages/bookTotal/BookTotalPage";
import MainPage from "./pages/main/MainPage";
import PostBoard from "./pages/postBoard/PostBoard";
import ProjectInfoPage from "./pages/projectInfo/ProjectInfo";
import Layout from "./template/layout/Layout";
import Paths from "./types/paths";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="*" element={<Navigate to={Paths.main} replace />} />,
      <Route path={Paths.main} element={<MainPage />} />,
      <Route path={Paths.books} element={<BookPage />} />,
      <Route path={Paths.post} element={<PostBoard />} />,
      <Route path={Paths.booklist} element={<BookListPage />} />,
      <Route path={Paths.bookinfo} element={<BookInfoPage />} />,
      <Route path={Paths.bookRoll} element={<BookStoryRoll />} />,
      <Route path={Paths.projectInfo} element={<ProjectInfoPage />} />,
      <Route path={Paths.bookEdu} element={<BookStoryEducation />} />,
      <Route path={Paths.bookBurnout} element={<BookStoryBurnout />} />,
      <Route path={Paths.bookTotal} element={<BookTotalPage />} />,
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
