import { useState } from "react";
// import { Grid } from "@mui/material";
import Layout from "../../components/Layout";
import CustomButton from "../../components/Button";
import "./home.css";
import { ToggleButton } from "@mui/material";

const Home = () => {
  const [selected, setSelected] = useState(false);

  return (
    <Layout>
      <>
        <div className="groupButtons">
          <CustomButton label="Latest" styles={{ width: "10%" }} />
          <CustomButton label="Now Playing" styles={{ width: "10%" }} />
          <CustomButton label="Popular" styles={{ width: "10%" }} />
          <CustomButton label="Top rated" styles={{ width: "10%" }} />
          <CustomButton label="Upcoming" styles={{ width: "10%" }} />
        </div>
        <div className="groupButtons">
          <ToggleButton
            value="check"
            selected={selected}
            onChange={() => {
              setSelected(!selected);
            }}
            className="buton-style"
          >
            Latest
          </ToggleButton>
        </div>
      </>
    </Layout>
  );
};

export default Home;
