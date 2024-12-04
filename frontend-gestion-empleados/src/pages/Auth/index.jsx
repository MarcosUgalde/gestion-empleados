import Styled from './styles'
import Register from "../../Components/Register";
import Login from "../../Components/Login";
import { useState } from 'react';

const Auth = () => {
  const [isComponentOneVisible, setComponentOneVisible] = useState(true);

  const toggleComponents = () => setComponentOneVisible((prev) => !prev);
  return (
    <Styled.Body>
      <Register isVisible={!isComponentOneVisible} toggle={toggleComponents} />
      <Login isVisible={isComponentOneVisible} toggle={toggleComponents} />
    </Styled.Body>
  );
};

export default Auth;
