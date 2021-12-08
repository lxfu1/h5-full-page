import { Routes, Route } from "react-router-dom";
import Percent from "../pages/percent";
import Rem from "../pages/rem";
import Media from "../pages/media";
import Flex from "../pages/flex";

export default () => {
  return (
    <Routes>
      <Route path="/" element={<Percent />} />
      <Route path="percent" element={<Percent />} />
      <Route path="media" element={<Media />} />
      <Route path="rem" element={<Rem />} />
      <Route path="flex" element={<Flex />} />
    </Routes>
  );
};
