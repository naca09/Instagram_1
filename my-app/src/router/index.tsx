import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";
  import CreatesPage from "../pages/creates";
  import ExplorePage from "../pages/explore";
  import HomePage from "../pages/home";
  import MessagesPage from "../pages/messages";
  import NotificationsPage from "../pages/notifications";
  import ProfilePage from "../pages/profile";
  import RootPage from "../pages/root";
  import SearchPage from "../pages/search";
  
  export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootPage />}>
        <Route element={<HomePage />} index path="" />
        <Route element={<ExplorePage />} path="explore" />
        <Route element={<SearchPage />} path="search" />
        <Route element={<ProfilePage />} path="profile" />
        <Route element={<MessagesPage />} path="messages" />
        <Route element={<NotificationsPage />} path="notifications" />
        <Route element={<CreatesPage />} path="creates" />
      </Route>
    )
  );