import Wrapper from "./styles/Login.styled";
import imgTicketify from "./images/ticketify.png";
import Button from "./Button";

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=c20f69ebabb74fb88d50a4961e79394c&response_type=code&redirect_uri=https://spotify-ticketify.herokuapp.com/&scope=user-read-recently-played%20user-top-read%20user-read-playback-position";

export default function Login() {
  return (
    <Wrapper>
      <div className="login-content">
        <h1>
          <Button loginUrl={AUTH_URL} />
        </h1>
        <h1>
          <span data-alttext="\2193">&#10230;</span>
        </h1>
        <img src={imgTicketify} alt="" />
        <h1>
          <span>&#10230;</span>
        </h1>
        <h1 className="attend">TRAVEL</h1>
      </div>
      <div className="footer">
        <p>
          &copy; 2022. Made By{" "}
          <a
            href="https://www.linkedin.com/in/jhury-lastre-3bb6541aa/"
            className="jhury-link"
          >
            Jhury Kevin Lastre
          </a>
        </p>
        <p>Major Tools Used : React.js | Node + Express | Spotify Web API</p>
      </div>
    </Wrapper>
  );
}
