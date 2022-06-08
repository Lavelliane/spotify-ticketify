import Wrapper from "./styles/Button.styled";

function Button({ loginUrl }) {
  return (
    <>
      <Wrapper>
        <a href={loginUrl}>LOGIN</a>
      </Wrapper>
    </>
  );
}
export default Button;
