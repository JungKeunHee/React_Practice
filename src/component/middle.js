import Background from "./background";
import SideBar from "./side-bar";
import "./common.css";

function Middle() {
  return (
    <div className="middle">
      <SideBar />
      <Background />
    </div>
  );
}

export default Middle;
