import { useState } from "react";
import { Grid } from "@mui/material";
import Layout from "../../components/Layout";
import CustomButton from "../../components/Button";
import "./home.css";
import { Typography } from "@mui/material";
import imgPeli from "../../assets/peli.jpg";
import Rating from "@mui/material/Rating";
import Pagination from "@mui/material/Pagination";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Home = () => {
  const paperData = Array.from({ length: 15 }, (_, index) => index);
  const [selectedButton, setSelectedButton] = useState(0);
  const [page, setPage] = useState(1);
  const theme = createTheme({
    palette: {
      primary: {
        main: "#5141EA",
        contrastText: "#fff",
      },
    },
  });

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const value = 2;

  const [isHovered, setIsHovered] = useState(
    Array(paperData.length).fill(false)
  );

  const handleMouseEnter = (index: any) => {
    const updatedHovered = [...isHovered];
    updatedHovered[index] = true;
    setIsHovered(updatedHovered);
  };

  const handleMouseLeave = (index: any) => {
    const updatedHovered = [...isHovered];
    updatedHovered[index] = false;
    setIsHovered(updatedHovered);
  };

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
          {paperData.map((item, index) => (
            <Grid item key={item} xs={6} sm={6} md={4} lg={2.4}>
              <div className="subContainerImg">
                <div
                  className="imageOverlay"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                >
                  <img src={imgPeli} className="images" alt="" />
                  {isHovered[index] && (
                    <div className="hovered">
                      <label className="movieTitle">
                        Spider-Man: lejos de casa
                      </label>
                      <label className="movieData">
                        2019 . Acción/Aventura . 2h 10m{" "}
                      </label>
                      <p className="sinopsis">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Ab blanditiis quod iusto. Fugit laborum, adipisci
                        nam dolores esse aut magnam similique consequatur
                        assumenda porro eum nobis maiores. Expedita, accusantium
                        doloremque.
                      </p>
                      <Rating
                        className="rating"
                        name="read-only"
                        value={value}
                        readOnly
                      />
                    </div>
                  )}
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
        <div className="containerPagination">
          <ThemeProvider theme={theme}>
            <Pagination
              count={2}
              page={page}
              onChange={handleChange}
              color="primary"
            />
          </ThemeProvider>
        </div>
      </>
    </Layout>
  );
};

export default Home;
