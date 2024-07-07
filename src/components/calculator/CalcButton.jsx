import { Button } from "@mui/material";
import calculator from "../../assets/images/icon-calculator.svg";

const CalcButton = () => {
	return (
		<Button
			variant="contained"
			className="btn"
			type="submit"
			// fullWidth
			startIcon={<img src={calculator} alt="calculator" />}
		>
			Calculate Repayments
		</Button>
	);
};

export default CalcButton;
