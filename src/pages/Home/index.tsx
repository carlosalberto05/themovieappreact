import { useState } from "react";
import { Grid, Paper } from "@mui/material";
import Layout from "../../components/Layout";
import CustomButton from "../../components/Button";
import "./home.css";
import { Typography } from "@mui/material";

const Home = () => {
  const [selectedButton, setSelectedButton] = useState(0); // Por defecto, el primer botón está seleccionado

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
        {/* <Grid container spacing={2} mt={2} paddingBottom={4}>
          <Grid item xs={12}>
            <Grid container justifyContent="space-around" spacing={2}>
              {paperData.map((item) => (
                <Grid item key={item}>
                  <Paper sx={{ height: 367, width: 253, borderRadius: 10 }} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid> */}
        <Grid container spacing={2} mt={2} paddingBottom={4}>
          <Grid item xs={12}>
            <Grid container justifyContent="space-around" spacing={2}>
              {paperData.map((item) => (
                <Grid item key={item} xs={2}>
                  <Paper
                    sx={{
                      height: 367,
                      width: "90%",
                      borderRadius: 10,
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </>
    </Layout>
  );
};

export default Home;
