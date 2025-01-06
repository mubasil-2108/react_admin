import { Box } from "@mui/material";
import { Header, Charts } from "../../components";

const Pie = ()=>{
return(
    <Box m='20px'>
         <Header title="Pie Chart" subTitle="Simple Pie Chart" />
        <Box height='75vh'>
            <Charts.PieChart />
        </Box>
    </Box>
)
}

export default Pie;