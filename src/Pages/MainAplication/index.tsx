import React from "react";

import LayoutCellApp from "../../components/LayoutCellApp";
import LayoutDesktopApp from "../../components/LayoutDesktopApp";

const MainAplication: React.FC = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <LayoutCellApp />
      <LayoutDesktopApp />
    </div>
  );
};

export default MainAplication;
