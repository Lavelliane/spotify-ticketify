import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #f9d923;
  background-size: cover;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;

  position: relative;

  a,
  a:visited,
  a:hover,
  a:active {
    color: black;
    text-decoration: none;
  }
  .login-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 300px;
    height: auto;
  }
  .attend {
    color: black;
    font-family: "Frijole", cursive;
    border: 3px solid black;
    padding: 10px 30px;
  }
  .footer {
    position: absolute;
    width: 100%;
    bottom: 0;
    margin-bottom: 20px;
    text-align: center;
    font-family: "Oswald", sans-serif;
  }
  .jhury-link {
    text-decoration: underline;
  }
  @media only screen and (max-width: 600px) {
    .login-content {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    span {
      display: none;
    }
  }
`;

export default Wrapper;
