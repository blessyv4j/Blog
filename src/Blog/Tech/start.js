import { Paper, Grid, Typography } from "@mui/material";
import React from "react";
import mask from "../assets/mask.png";
import reactimg from "../assets/reactimg.png";
import ss2 from "../assets/ss2.png";
import rythm from "../assets/rythm.png";
import share from "../assets/share.png";

function Start() {
  return (
    <>
      <Paper className="appbar">
        <Grid container>
          <Grid item xs={6} md={9}>
            <Typography className="siren">
              <span className="title2">The</span>
              <span className="titleOne2">Siren</span>
            </Typography>
          </Grid>
          <Grid item xs={6} md={3} className="siren2">
            <Typography className="get">GET STARTED</Typography>
          </Grid>
        </Grid>
      </Paper>
      <div style={{ backgroundColor: "#FAFAFA" }}>
        <Grid container>
          <Grid item xs={12} md={3}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "432px",
                marginLeft: "109px",
              }}
            >
              <img src={rythm} alt="rythm"></img>
              <span className="clap" style={{ marginLeft: "12px" }}>
                9.3K
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "32px",
                marginLeft: "109px",
              }}
            >
              <img src={share} alt="share"></img>
              <span className="clap" style={{ marginLeft: "18px" }}>
                Share this article
              </span>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <p className="ways">5 Ways to animate a React app.</p>
            <div style={{ display: "flex" }}>
              <img src={mask} alt="mask" height="103px" width="103px"></img>
              <p className="dmitry">
                Dmitry Nozhenko
                <br /> <span className="jan">Jan 28, 2019 · 10 min read</span>
              </p>
            </div>
            <img src={reactimg} alt="screenshot" className="ss"></img>
            <p className="anime">
              Animation in ReactJs app is a popular topic and there are many
              ways to create different types of animations.Many developers
              create animation exclusively using css and adding classes to HTML
              tags. This is a great way and you should use it. If you want to
              create complex animations you can pay attention to GreenSock.
              GreenSock is the most powerful animation platform. There are also
              a lot of libraries, components for creating animation in React.
              <br />
              <br />
              <br />
              Let’s talk about them
            </p>
            <img src={ss2} alt="screenshot2" className="ss"></img>
            <div style={{ display: "flex", marginTop: "32px" }}>
              <div className="js">React</div>
              <div className="js">Javascript</div>
              <div className="js">Animation</div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "32px",
              }}
            >
              <img src={rythm} alt="rythm"></img>
              <span className="clap">9.3K claps</span>
            </div>
            <hr
              style={{
                background: "#F0F0F0 0% 0% no-repeat padding-box",
                opacity: "0.5",
                margin: "16px 0px",
              }}
            />
            <div style={{ display: "flex" }}>
              <img src={mask} alt="mask" height="103px" width="103px"></img>
              <p
                className="dmitry"
                style={{ marginTop: "12px", marginLeft: "32px" }}
              >
                <span className="clap">
                  WRITTEN BY <br />
                </span>
                Dmitry Nozhenko
                <br /> <span className="jan">Jan 28, 2019 · 10 min read</span>
              </p>
            </div>
            <hr
              style={{
                background: "#F0F0F0 0% 0% no-repeat padding-box",
                opacity: "0.5",
                margin: "16px 0px",
              }}
            />
          </Grid>
        </Grid>
        <div className="downdiv">
          <p className="more">More From The Siren</p>
          <hr
            style={{
              background: "#F0F0F0 0% 0% no-repeat padding-box",
              opacity: "0.5",
              margin: "16px 0px",
            }}
          />
          <br />
          <Grid container spacing={3}>
            <Grid item xs={12} md={4} lg={4}>
              <div>
                <p className="jan"> Also tagged Reactjs</p>
                <img
                  alt="landscape"
                  src="https://th.bing.com/th/id/OIP.pAcu7875Nl6e_M0tBXBzGQHaE5?pid=ImgDet&rs=1"
                  width="333"
                ></img>
                <p className="latest-title" style={{ paddingLeft: "0px" }}>
                  Joshua Tree
                  <br /> Overnight Adventure
                </p>
                <div style={{ display: "flex" }}>
                  <img src={mask} alt="mask" height="75px" width="75px"></img>
                  <p className="dmitry" style={{ marginTop: "10px" }}>
                    Dmitry Nozhenko
                    <br /> <span className="jan">Aug 10 · 4 min read</span>
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <div>
                <p className="jan">Related reads</p>
                <img
                  alt="landscape"
                  src="https://th.bing.com/th/id/OIP.pAcu7875Nl6e_M0tBXBzGQHaE5?pid=ImgDet&rs=1"
                  width="333"
                ></img>
                <p className="latest-title" style={{ paddingLeft: "0px" }}>
                  Joshua Tree
                  <br /> Overnight Adventure
                </p>
                <div style={{ display: "flex" }}>
                  <img src={mask} alt="mask" height="75px" width="75px"></img>
                  <p className="dmitry" style={{ marginTop: "10px" }}>
                    Dmitry Nozhenko
                    <br /> <span className="jan">Aug 10 · 4 min read</span>
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <div>
                <p className="jan"> Related reads</p>
                <img
                  alt="landscape"
                  src="https://th.bing.com/th/id/OIP.pAcu7875Nl6e_M0tBXBzGQHaE5?pid=ImgDet&rs=1"
                  width="333"
                ></img>
                <p className="latest-title" style={{ paddingLeft: "0px" }}>
                  Joshua Tree
                  <br /> Overnight Adventure
                </p>
                <div style={{ display: "flex" }}>
                  <img src={mask} alt="mask" height="75px" width="75px"></img>
                  <p className="dmitry" style={{ marginTop: "10px" }}>
                    Dmitry Nozhenko
                    <br /> <span className="jan">Aug 10 · 4 min read</span>
                  </p>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
export default Start;
