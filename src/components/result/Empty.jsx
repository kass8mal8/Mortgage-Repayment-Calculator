import { Box, Typography } from "@mui/material";
import empty from "../../assets/images/illustration-empty.svg";

const Empty = () => {
	return (
		<Box className="empty">
			<img src={empty} alt="illustration-empty" />
			<Typography variant="h5">Results shown here</Typography>
			<Typography>
				Complete the form and click “calculate repayments” to see what your
				monthly repayments would be.
			</Typography>
		</Box>
	);
};

export default Empty;
