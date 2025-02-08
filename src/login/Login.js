import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <>
      <h1>로그인 선택</h1>
      <button onClick={() => navigate("/fran")}>가맹점</button>
      <button onClick={() => navigate("/hq")}>본사</button>
    </>
  );
}

export default Login;
