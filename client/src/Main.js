import useAuth from "./useAuth";
import { useState, useEffect, useRef } from "react";
import ReactAudioPlayer from "react-audio-player";
import axios from "axios";
import Wrapper from "./styles/Main.styled";
import { QRCodeSVG } from "qrcode.react";

function Main({ code }) {
  const exportRef = useRef();
  const accessToken = useAuth(code);
  const [userData, setUserData] = useState({});
  const [data, setData] = useState({});
  const [name, setName] = useState([]);
  const [artist, setArtist] = useState([]);
  const [externalURL, setExternalURL] = useState([]);
  const [albumName, setAlbumName] = useState([]);
  const [albumUrl, setAlbumUrl] = useState([]);
  const [country, setCountry] = useState([]);
  const [currentUser, setCurrentUser] = useState("");

  function makeid(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  useEffect(() => {
    if (!accessToken || !data) return;
    axios
      .get(
        "https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=8",
        {
          headers: { Authorization: "Bearer " + accessToken },
        }
      )
      .then((res) => {
        const data = res.data.items;
        // console.log(data.album.album_type);
        setData(data);
      })
      .catch((err) => console.log(err));

    axios
      .get("https://api.spotify.com/v1/me", {
        headers: { Authorization: "Bearer " + accessToken },
      })
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => console.log(err));
  }, [accessToken]);

  useEffect(() => {
    if (Object.keys(data).length === 0 || Object.keys(userData).length === 0)
      return;
    data.map((track) => {
      setName((prev) => [...prev, track.name]);
      setAlbumUrl((prev) => [...prev, track.album.images[1].url]);
      setAlbumName((prev) => [...prev, track.album.name]);
      setExternalURL((prev) => [...prev, track.external_urls.spotify]);
      setArtist((prev) => [...prev, track.album.artists[0].name]);
      setCountry((prev) => [...prev, ...track.album.available_markets]);
    });
    setCurrentUser(userData.display_name);
  }, [data]);

  return (
    <div>
      <Wrapper>
        <div className="header">
          <h1>{`Your Music Travel Tickets for 2022`.toUpperCase()}</h1>
        </div>
      </Wrapper>

      {albumUrl.map((url, i) => (
        <>
          <Wrapper url={url}>
            <div className="container" ref={exportRef}>
              <div className="ticket basic">
                <p>Admit One</p>
              </div>

              <div className="ticket airline">
                <div className="top">
                  <h1>boarding pass</h1>
                  <div className="big">
                    <p className="from">
                      {country[Math.floor(Math.random() * country.length)]}
                    </p>
                    <p className="to">
                      <i className="fas fa-arrow-right"></i>{" "}
                      {country[Math.floor(Math.random() * country.length)]}
                    </p>
                  </div>
                </div>
                <div className="bottom">
                  <div className="column">
                    <div className="row row-1">
                      <p>
                        <span>Flight</span>
                        {makeid(6).toUpperCase()}
                      </p>
                      <p className="row--right">
                        <span>Gate</span>B3
                      </p>
                    </div>
                    <div className="row row-1-5">
                      <p>
                        <span>Departs</span>11:00 AM
                      </p>
                      <p className="row--right">
                        <span>Arrives</span>1:05 PM
                      </p>
                    </div>
                    <div className="row row-2">
                      <p>
                        <span>Flight Music</span>
                        {name[i].length > 35
                          ? name[i].replace(/\(([^\)]+)\)/, "").substring(0, 30)
                          : name[i].replace(/\(([^\)]+)\)/, "")}
                      </p>
                    </div>
                    <div className="row row-3">
                      <p>
                        <span>Passenger</span>
                        {currentUser}
                      </p>
                      <p className="row--center">
                        <span>Seat</span>
                        {Math.floor(Math.random() * 99)}E
                      </p>
                      <p className="row--right">
                        <span>Top Album</span>
                        {albumName[i]}
                      </p>
                    </div>
                    <div className="row row-4">
                      <p>
                        <span>Artist Name</span>
                        {artist[i]}
                      </p>
                    </div>
                  </div>

                  <div className="bar--code">
                    <QRCodeSVG value={externalURL[i]} />
                    <i class="fa-solid fa-plane-circle-check plane-icon"></i>
                  </div>
                </div>
              </div>
            </div>
          </Wrapper>
        </>
      ))}
    </div>
  );
}
export default Main;
