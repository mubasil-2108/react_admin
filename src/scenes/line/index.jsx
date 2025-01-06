import { Box } from "@mui/material";
import { Header, Charts } from "../../components";

const Line = ()=>{
return(
    <Box m='20px'>
          <Header title="Line Chart" subTitle="Simple Line Chart" />
        <Box height='75vh'>
            <Charts.LineChart />
        </Box>
    </Box>
)
}

export default Line;