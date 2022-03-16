import React from "react";
import { Grid, Link } from "@mui/material";
import arrow from "./assets/arrow.svg";
import down from "./assets/downArrow.svg";

function Articles() {
  return (
    <>
      <Link href="/bwd" underline="none">
        <Grid container className="container" spacing={2}>
          <Grid item xs={12} md={8} lg={8} className="grid-one">
            <p class="grid-title">Title of vertical gallery</p>
            <p class="grid-desc">Travel / August 21 2017</p>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Grid item>
              <div className="grid-two align">
                <p class="grid-title-one">
                  The Sound cloud <br />
                  You loved is doomed
                </p>
                <p class="grid-desc-two">Travel / August 21 2017</p>
              </div>
            </Grid>
            <Grid item className="grid-two">
              <p class="grid-title-one">
                The Sound cloud <br />
                You loved is doomed
              </p>
              <p class="grid-desc-two">Travel / August 21 2017</p>
            </Grid>
          </Grid>
        </Grid>
        <div className="container">
          <p className="latest">The Latest</p>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4} lg={4} className="latest-grid">
              <div>
                <img
                  alt="landscape"
                  src="https://th.bing.com/th/id/OIP.pAcu7875Nl6e_M0tBXBzGQHaE5?pid=ImgDet&rs=1"
                  width="333"
                ></img>
                <p className="latest-title">
                  Joshua Tree
                  <br /> Overnight Adventure
                </p>
                <p className="latest-desc">
                  Gujarat is vastly underrated and it’s a mystery to us why the
                  region isn’t more well-known as a tourist destination. It has
                  a plethora of temples and palaces
                </p>
                <p className="travel" style={{ marginTop: "32px" }}>
                  Travel<span className="aug">/ August 21 2017</span>
                </p>
              </div>
            </Grid>
            <Grid item xs={12} md={4} lg={4} className="latest-grid">
              <div>
                <img
                  alt="landscape"
                  src="https://th.bing.com/th/id/OIP.pAcu7875Nl6e_M0tBXBzGQHaE5?pid=ImgDet&rs=1"
                  width="333"
                ></img>
                <p className="latest-title">
                  Joshua Tree
                  <br /> Overnight Adventure
                </p>
                <p className="latest-desc">
                  Gujarat is vastly underrated and it’s a mystery to us why the
                  region isn’t more well-known as a tourist destination. It has
                  a plethora of temples and palaces
                </p>
                <p className="travel" style={{ marginTop: "32px" }}>
                  Travel<span className="aug">/ August 21 2017</span>
                </p>
              </div>
            </Grid>
            <Grid item xs={12} md={4} lg={4} className="latest-grid">
              <div>
                <img
                  alt="landscape"
                  src="https://th.bing.com/th/id/OIP.pAcu7875Nl6e_M0tBXBzGQHaE5?pid=ImgDet&rs=1"
                  width="333"
                ></img>
                <p className="latest-title">
                  Joshua Tree
                  <br /> Overnight Adventure
                </p>
                <p className="latest-desc">
                  Gujarat is vastly underrated and it’s a mystery to us why the
                  region isn’t more well-known as a tourist destination. It has
                  a plethora of temples and palaces
                </p>
                <p className="travel" style={{ marginTop: "32px" }}>
                  Travel<span className="aug">/ August 21 2017</span>
                </p>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className="container">
          <p className="latest">Latest Articles</p>
          <Grid container spacing={2}>
            <Grid item xs={12} md={9} lg={9}>
              <hr
                style={{
                  background: "#F0F0F0 0% 0% no-repeat padding-box",
                  opacity: "0.5",
                  marginBottom: "32px",
                  marginTop: "0px",
                }}
              />
              <Grid container className="flex">
                <Grid item xs={12} md={5} lg={5}>
                  <img
                    src="https://www.bing.com/th?id=OIP.Sczccq5XMKE75KT_9aQr2gHaEI&w=334&h=186&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                    alt="tree"
                    height="283px"
                    width="320px"
                  ></img>
                </Grid>
                <Grid item xs={12} md={7} lg={7}>
                  <p className="catch">
                    Catch waves with <br />
                    an adventure guide
                  </p>
                  <p
                    className="latest-desc"
                    style={{ paddingBottom: "64px", paddingRight: "112px" }}
                  >
                    Gujarat is vastly underrated and it’s a mystery to us why
                    the region isn’t more well-
                  </p>
                  <p className="travel">
                    TECH<span className="aug">/ TODAY AT 11:54</span>
                  </p>
                </Grid>
              </Grid>
              <hr
                style={{
                  background: "#F0F0F0 0% 0% no-repeat padding-box",
                  opacity: "0.5",
                  margin: "32px 0px",
                }}
              />
              <Grid container className="flex">
                <Grid item xs={12} md={5} lg={5}>
                  <img
                    src="https://www.bing.com/th?id=OIP.Sczccq5XMKE75KT_9aQr2gHaEI&w=334&h=186&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                    alt="tree"
                    width="320px"
                    height="210px"
                  ></img>
                </Grid>
                <Grid item xs={12} md={7} lg={7}>
                  <p className="catch-two">
                    Catch waves with <br />
                    an adventure guide
                  </p>
                  <p
                    className="latest-desc"
                    style={{ paddingBottom: "32px", paddingRight: "112px" }}
                  >
                    Gujarat is vastly underrated and it’s a mystery to us why
                    the region isn’t more well-
                  </p>
                  <p className="travel">
                    TECH<span className="aug">/ TODAY AT 11:54</span>
                  </p>
                </Grid>
              </Grid>
              <hr
                style={{
                  background: "#F0F0F0 0% 0% no-repeat padding-box",
                  opacity: "0.5",
                  margin: "32px 0px",
                }}
              />
              <Grid container className="flex">
                <Grid item xs={12} md={5} lg={5}>
                  <img
                    src="https://www.bing.com/th?id=OIP.Sczccq5XMKE75KT_9aQr2gHaEI&w=334&h=186&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                    alt="tree"
                    width="320px"
                    height="210px"
                  ></img>
                </Grid>
                <Grid item xs={12} md={7} lg={7}>
                  <p className="catch-two">
                    Catch waves with <br />
                    an adventure guide
                  </p>
                  <p
                    className="latest-desc"
                    style={{ paddingBottom: "32px", paddingRight: "112px" }}
                  >
                    Gujarat is vastly underrated and it’s a mystery to us why
                    the region isn’t more well-
                  </p>
                  <p className="travel">
                    TECH<span className="aug">/ TODAY AT 11:54</span>
                  </p>
                </Grid>
              </Grid>
              <hr
                style={{
                  background: "#F0F0F0 0% 0% no-repeat padding-box",
                  opacity: "0.5",
                  margin: "32px 0px",
                }}
              />
              <Grid container className="flex">
                <Grid item xs={12} md={5} lg={5}>
                  <img
                    src="https://www.bing.com/th?id=OIP.Sczccq5XMKE75KT_9aQr2gHaEI&w=334&h=186&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                    alt="tree"
                    width="320px"
                    height="210px"
                  ></img>
                </Grid>
                <Grid item xs={12} md={7} lg={7}>
                  <p className="catch-two">
                    Catch waves with <br />
                    an adventure guide
                  </p>
                  <p
                    className="latest-desc"
                    style={{ paddingBottom: "32px", paddingRight: "112px" }}
                  >
                    Gujarat is vastly underrated and it’s a mystery to us why
                    the region isn’t more well-
                  </p>
                  <p className="travel">
                    TECH<span className="aug">/ TODAY AT 11:54</span>
                  </p>
                </Grid>
              </Grid>
              <div style={{ display: "flex", margin: "32px 0px" }}>
                <img src={down} alt="down"></img>
                <span className="view">&nbsp;&nbsp;LOAD MORE</span>
              </div>
              <div style={{ marginTop: "96px" }} className="gallery">
                <p className="gal-text1">Title of vertical gallery</p>
                <p className="gal-text2">Travel / August 21 2017</p>
              </div>
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <div className="add">Advertisement</div>
              <p className="latest" style={{ marginTop: "40px" }}>
                Top Posts
              </p>
              <img
                src="https://www.bing.com/th?id=OIP.Sczccq5XMKE75KT_9aQr2gHaEI&w=334&h=186&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                alt="tree"
                width="282"
              ></img>
              <div style={{ display: "flex", width: "282px" }}>
                <div>
                  <p className="catch-two no-margin-left">
                    Catch waves with <br />
                    an adventure guide
                  </p>
                  <p className="travel no-padding-left">
                    TECH<span className="aug">/ TODAY AT 11:54</span>
                  </p>
                </div>
                <p className="number">1</p>
              </div>
              <hr
                style={{
                  background: "#F0F0F0 0% 0% no-repeat padding-box",
                  opacity: "0.5",
                }}
              />
              <div style={{ display: "flex", width: "282px" }}>
                <img
                  src="https://www.bing.com/th?id=OIP.Sczccq5XMKE75KT_9aQr2gHaEI&w=334&h=186&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                  alt="tree"
                  width="84px"
                  height="108px"
                ></img>
                <div>
                  <p
                    className="catch-two"
                    style={{ fontSize: "16px", marginLeft: "8px" }}
                  >
                    Catch waves with <br />
                    an adventure guide
                  </p>
                  <p
                    className="travel"
                    style={{ fontSize: "10px", paddingLeft: "8px" }}
                  >
                    TECH
                    <span className="aug" style={{ fontSize: "10px" }}>
                      / TODAY AT 11:54
                    </span>
                  </p>
                </div>
                <p className="number">2</p>
              </div>
              <hr
                style={{
                  background: "#F0F0F0 0% 0% no-repeat padding-box",
                  opacity: "0.5",
                }}
              />
              <div style={{ display: "flex", width: "282px" }}>
                <img
                  src="https://www.bing.com/th?id=OIP.Sczccq5XMKE75KT_9aQr2gHaEI&w=334&h=186&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                  alt="tree"
                  width="84px"
                  height="108px"
                ></img>
                <div>
                  <p
                    className="catch-two"
                    style={{ fontSize: "16px", marginLeft: "8px" }}
                  >
                    Catch waves with <br />
                    an adventure guide
                  </p>
                  <p
                    className="travel"
                    style={{ fontSize: "10px", paddingLeft: "8px" }}
                  >
                    TECH
                    <span className="aug" style={{ fontSize: "10px" }}>
                      / TODAY AT 11:54
                    </span>
                  </p>
                </div>
                <p className="number">3</p>
              </div>
              <hr
                style={{
                  background: "#F0F0F0 0% 0% no-repeat padding-box",
                  opacity: "0.5",
                }}
              />
              <div style={{ display: "flex", width: "282px" }}>
                <img
                  src="https://www.bing.com/th?id=OIP.Sczccq5XMKE75KT_9aQr2gHaEI&w=334&h=186&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                  alt="tree"
                  width="84px"
                  height="108px"
                ></img>
                <div>
                  <p
                    className="catch-two"
                    style={{ fontSize: "16px", marginLeft: "8px" }}
                  >
                    Catch waves with <br />
                    an adventure guide
                  </p>
                  <p
                    className="travel"
                    style={{ fontSize: "10px", paddingLeft: "8px" }}
                  >
                    TECH
                    <span className="aug" style={{ fontSize: "10px" }}>
                      / TODAY AT 11:54
                    </span>
                  </p>
                </div>
                <p className="number">4</p>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className="container">
          <p className="latest add-border">Latest Stories</p>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4} lg={4}>
              <div style={{ paddingTop: "0px" }}>
                <p className="latest-title no-margin  border-right">
                  Catch waves with <br /> an adventure guide
                </p>
                <p className="latest-desc add-margin  border-right">
                  Gujarat is vastly underrated and it’s a mystery to us why the
                  region isn’t more well-known as a tourist destination. It has
                  a plethora of temples and palaces Gujarat is vastly underrated
                  and it’s a mystery to us why the region isn’t more well-known
                  as a tourist destination. It has a plethora of temples and
                  palaces
                </p>
                <p className="travel  border-right">
                  TECH<span className="aug">/ TODAY AT 11:54</span>
                </p>
              </div>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <div style={{ paddingTop: "0px" }}>
                <p className="latest-title no-margin  border-right">
                  Catch waves with <br /> an adventure guide
                </p>
                <p className="latest-desc add-margin  border-right">
                  Gujarat is vastly underrated and it’s a mystery to us why the
                  region isn’t more well-known as a tourist destination. It has
                  a plethora of temples and palaces Gujarat is vastly underrated
                  and it’s a mystery to us why the region isn’t more well-known
                  as a tourist destination. It has a plethora of temples and
                  palaces
                </p>
                <p className="travel  border-right">
                  STYLE<span className="aug">/ TODAY AT 11:54</span>
                </p>
              </div>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <div>
                <p className="latest-title">
                  Catch waves with <br /> an adventure guide
                </p>
                <p className="latest-desc add-margin">
                  Gujarat is vastly underrated and it’s a mystery to us why the
                  region isn’t more well-known as a tourist destination. It has
                  a plethora of temples and palaces Gujarat is vastly underrated
                  and it’s a mystery to us why the region isn’t more well-known
                  as a tourist destination. It has a plethora of temples and
                  palaces
                </p>
                <p className="travel">
                  TECH<span className="aug">/ TODAY AT 11:54</span>
                </p>
              </div>
            </Grid>
          </Grid>
          <hr
            style={{
              background: "#F0F0F0 0% 0% no-repeat padding-box",
              marginTop: "32px",
              opacity: "0.5",
            }}
          />
        </div>
        <p className=" container view">
          VIEW MORE &nbsp;
          <img src={arrow} alt="arrow"></img>
        </p>
      </Link>
    </>
  );
}
export default Articles;
