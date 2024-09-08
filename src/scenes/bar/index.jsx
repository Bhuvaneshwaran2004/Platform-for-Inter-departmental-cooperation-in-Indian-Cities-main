import { Box } from "@mui/material";
import Header from "../../components/Header";
import LearningTab from "../../components/BarChart";

const Bar = () => {
    return (
        <Box m="20px">
            <Header title="LearningTab" subtitle="Learning about Tools" />
            <Box height="75vh">
                <LearningTab />
            </Box>
        </Box>
    );
};

export default Bar;