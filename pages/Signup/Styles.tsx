import styled from "styled-components";
import { Colors } from  '../../styles/Colors';
import { SignupProps } from "./Types";

export const PageSignupStyles = styled.div<SignupProps>`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100vh;
  min-height: 100vh;
  max-height: 100vh;
  width: 100vw;
  min-width: 100vw;
  max-width: 100vw;
  background: ${() => Colors["--background-grey"]};
`;
