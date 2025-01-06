import { Box } from "@mui/material";
import { Header, Charts } from "../../components";

const Bar = ()=>{
return(
    <Box m='20px'>
        <Header title="Bar Chart" subTitle="Simple Bar Chart" />
        <Box height='75vh'>
            <Charts.BarChart />
        </Box>
    </Box>
)
}

export default Bar;