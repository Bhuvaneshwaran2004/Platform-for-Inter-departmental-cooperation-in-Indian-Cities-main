import { Box } from "@mui/material";
import Header from "../../components/Header";
import GroupDiscussion from "../../components/PieChart";

const Pie = () => {
    return (
        <Box m="20px">
            <Header title="Group Discussion" subtitle="Discussion tab" />
            <Box height="75vh">
                <GroupDiscussion />
            </Box>
        </Box>
    );
};

export default Pie;