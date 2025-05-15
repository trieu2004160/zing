import React from "react";
import { Routes, Route } from "react-router-dom";

import LibraryContent from "../components/Libraryzing/LibraryContent";
import ChartContent from "../components/Chart/index";
import RadioContent from "../components/item/Radio";
import NewMusicContent from "../components/BXH_New/Index";
import CategoryContent from "../components/Unit&category/index";
import Top100Content from "../components/Top100/Top100";
import DiscoverContent from "../components/item/Discover";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/library" element={<LibraryContent />} />
      <Route path="/discover" element={<DiscoverContent />} />
      <Route path="/chart" element={<ChartContent />} />
      <Route path="/radio" element={<RadioContent />} />
      <Route path="/new-music" element={<NewMusicContent />} />
      <Route path="/category" element={<CategoryContent />} />
      <Route path="/top-100" element={<Top100Content />} />
    </Routes>
  );
};

export default AppRouter;
