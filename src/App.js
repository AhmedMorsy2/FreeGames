import React from "react";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Mainlayout from "./Components/Layouts/Mainlayout";
import Freegames from "./Components/Freegames/Freegames";
import SpecificCategory from "./Components/SpecificCategory/SpecificCategory";
import { QueryClient, QueryClientProvider } from "react-query";
import BrowserGames from "./Components/BrowerGames/BrowserGames";
import GameDetails from "./Components/GameDetails/GameDetails";

export default function App() {
  let router = createHashRouter([
    {
      path: "/",
      element: <Mainlayout />,
      children: [
        { index: true, element: <Freegames /> },
        { path: "/freegames", element: <Freegames /> },
        { path: "/games/:id", element: <SpecificCategory /> },
        { path: "/browser/:id", element: <BrowserGames /> },
        { path: "/game/:id", element: <GameDetails /> },
      ],
    },
  ]);
  let query = new QueryClient();

  return (
    <>
      <QueryClientProvider client={query}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}
