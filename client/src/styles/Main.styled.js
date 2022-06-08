import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  p,
  h1 {
    margin: 0;
    padding: 0;
  }
  .header {
    font-family: "Syncopate", sans-serif;
    position: absolute;
    width: 100%;
    top: 0;
    text-align: center;
    margin-top: 20px;
    z-index: 99;
  }
  .container {
    background-color: #fce043;
    position: relative;
    width: 100%;
    height: 100vh;
  }
  .container .ticket {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .container .basic {
    display: none;
  }
  .airline {
    display: block;
    height: 575px;
    width: 270px;
    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.3);
    border-radius: 25px;
    z-index: 3;
  }
  .airline .top {
    height: 220px;
    background-image: url(${({ url }) => url});
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
    color: #fff;
  }
  .airline .top h1 {
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 2;
    text-align: center;
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
  }
  .airline .bottom {
    height: 440px;
    background: #fff;
    border-bottom-right-radius: 25px;
    border-bottom-left-radius: 25px;
  }
  .airline .bottom .row-4 {
    margin-top: 10px;
  }
  .top .big {
    position: absolute;
    top: 100px;
    font-size: 65px;
    font-weight: 700;
    line-height: 0.8;
  }
  .top .big .from {
    /* text-shadow: -1px 0 #fff, 0 1px #fff, 1px 0 #fff, 0 -1px #fff; */
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 1px;
  }
  .top .big .to {
    position: absolute;
    left: 32px;
    font-size: 35px;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #fff;
  }
  .top .big .to i {
    margin-top: 5px;
    margin-right: 10px;
    font-size: 15px;
  }
  .top--side {
    position: absolute;
    right: 35px;
    top: 110px;
    text-align: right;
  }
  .top--side i {
    font-size: 25px;
    margin-bottom: 18px;
  }
  .top--side p {
    font-size: 10px;
    font-weight: 700;
  }
  .top--side p + p {
    margin-bottom: 8px;
  }
  .bottom p {
    display: flex;
    flex-direction: column;
    font-size: 13px;
    font-weight: 700;
  }
  .bottom p span {
    font-weight: 400;
    font-size: 11px;
    color: #6c6c6c;
  }
  .bottom .column {
    margin: 0 auto;
    width: 80%;
    padding: 2rem 0;
  }
  .bottom .row {
    display: flex;
    justify-content: space-between;
  }
  .bottom .row--right {
    text-align: right;
  }
  .bottom .row--center {
    text-align: center;
  }
  .bottom .row-2 {
    margin: 20px 0 60px 0;
    position: relative;
  }
  .bottom .row-2::after {
    content: "";
    position: absolute;
    width: 100%;
    bottom: -30px;
    left: 0;
    background: #000;
    height: 1px;
  }
  .bottom .bar--code {
    height: 50px;
    width: 80%;
    margin: 35px auto;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .bottom .bar--code::after {
    content: "";
    position: absolute;
    width: 6px;
    height: 100%;
    background: #000;
    top: 0;
    left: 0;
  }
  .bottom .bar--code::before {
    content: "";
    position: absolute;
    width: 3px;
    height: 100%;
    background: #000;
    top: 0;
    left: 11px;
  }
  .bottom .bar--code .plane-icon {
    font-size: 2rem;
  }
`;
export default Wrapper;
