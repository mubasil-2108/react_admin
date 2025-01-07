import { Box, useTheme } from "@mui/material";
import { Header, Charts } from "../../components";
import { tokens } from "../../theme";

const Geography = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box m='20px'>
            <Header title="Geography" subTitle="Simple Geography Chart" />
            <Box height='75vh' border={`1px solid ${colors.grey[100]}`} borderRadius="4px">
                <Charts.GeographyChart />
            </Box>
        </Box>
    )
}

export default Geography;