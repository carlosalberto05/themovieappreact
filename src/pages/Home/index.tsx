import React, { useState } from "react";
import { Grid, Paper } from "@mui/material";
import Layout from "../../components/Layout";
import CustomButton from "../../components/Button";
import "./home.css";
import { Typography } from "@mui/material";
import imgPeli from "../../assets/peli.jpg";

const Home = () => {
  const [selectedButton, setSelectedButton] = useState(0);
  const [hoveredItem, setHoveredItem] = useState(null);

  // Datos simulados para los Paper
  const paperData = Array.from({ length: 15 }, (_, index) => index);

  return (
    <Layout>
      <>
        <div className="groupButtons">
          <CustomButton
            label="Latest"
            styles={{ width: "10%" }}
            isSelected={selectedButton === 0}
            onClick={() => setSelectedButton(0)}
          />
          <CustomButton
            label="Now Playing"
            styles={{ width: "10%" }}
            isSelected={selectedButton === 1}
            onClick={() => setSelectedButton(1)}
          />
          <CustomButton
            label="Popular"
            styles={{ width: "10%" }}
            isSelected={selectedButton === 2}
            onClick={() => setSelectedButton(2)}
          />
          <CustomButton
            label="Top rated"
            styles={{ width: "10%" }}
            isSelected={selectedButton === 3}
            onClick={() => setSelectedButton(3)}
          />
          <CustomButton
            label="Upcoming"
            styles={{ width: "10%" }}
            isSelected={selectedButton === 4}
            onClick={() => setSelectedButton(4)}
          />
        </div>
        <div className="textHome">
          <Typography variant="h4" color={"white"}>
            Latest
          </Typography>
          <Typography variant="subtitle1" color={"white"}>
            Texto introductorio
          </Typography>
        </div>

        <Grid
          container
          spacing={2}
          mt={2}
          paddingBottom={4}
          className="containerImages"
        >
          {paperData.map((item) => (
            <Grid item key={item} xs={6} sm={6} md={4} lg={2.4}>
              <div
                className={`subContainerImg ${
                  hoveredItem === item ? "hovered" : ""
                }`}
                onMouseEnter={() => setHoveredItem(item)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <img src={imgPeli} style={{ borderRadius: "50px" }} />
                {hoveredItem === item && (
                  <div className="imageOverlay">
                    <p className="imageText">Descripción de la imagen</p>
                  </div>
                )}
              </div>
            </Grid>
          ))}
        </Grid>
      </>
    </Layout>
  );
};

export default Home;
