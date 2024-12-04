import Styled from './styles'
import Register from "../../Components/Register";
import Login from "../../Components/Login";

const Auth = () => {
  return (
    <Styled.Body>
      <Register />
      <Login />
    </Styled.Body>
  );
};

export default Auth;
