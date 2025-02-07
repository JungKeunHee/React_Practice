import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./fran/components/Layout";
import Main from "./fran/pages/main/Main";
import Inventory from "./fran/pages/inventory/Inventory";
import Menus from "./fran/pages/menus/Menus";
import Slip from "./fran/pages/slip/Slip";
import Complain from "./fran/pages/complain/Complain";
import Employee from "./fran/pages/employee/Employee";
import Notice from "./fran/pages/notice/Notice";
import Chat from "./fran/pages/chat/Chat";
import BaristaNote from "./fran/pages/barista-note/BaristaNote";
import Stats from "./fran/pages/stats/Stats";
import FranInventory from "./fran/pages/inventory/FranInventory";
import Orders from "./fran/pages/inventory/Orders";
import Duty from "./fran/pages/slip/Duty";
import Income from "./fran/pages/slip/Income";
import Schedule from "./fran/pages/employee/Schedule";
import DayOff from "./fran/pages/employee/DayOff";

function App() {
  return (
    <Router>
      <Routes>
        {/* Layout을 부모 라우트로 설정하고 Outlet을 통해 자식 페이지가 변경되도록 설정 */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/fran" element={<Main />} />
          <Route path="fran/inventory" element={<Inventory />} />
          <Route path="fran/fran-inventory" element={<FranInventory />} />
          <Route path="fran/orders" element={<Orders />} />
          <Route path="fran/menus" element={<Menus />} />
          <Route path="fran/slip" element={<Slip />} />
          <Route path="fran/duty" element={<Duty />} />
          <Route path="fran/income" element={<Income />} />
          <Route path="fran/complain" element={<Complain />} />
          <Route path="fran/employee" element={<Employee />} />
          <Route path="fran/schedule" element={<Schedule />} />
          <Route path="fran/dayoff" element={<DayOff />} />
          <Route path="fran/notice" element={<Notice />} />
          <Route path="fran/chat" element={<Chat />} />
          <Route path="fran/barista-note" element={<BaristaNote />} />
          <Route path="fran/stats" element={<Stats />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
