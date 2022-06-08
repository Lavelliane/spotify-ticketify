import Login from "./Login";
import Main from "./Main";

const code = new URLSearchParams(window.location.search).get("code");

function App() {
  return code ? (
    <>
      <Main code={code} />
    </>
  ) : (
    <>
      <Login />
    </>
  );
}
export default App;
