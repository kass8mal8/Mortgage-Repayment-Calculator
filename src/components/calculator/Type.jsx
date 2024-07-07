/* eslint-disable react/prop-types */
import { Typography } from "@mui/material";

const Type = ({ handleChange, isError }) => {
	return (
		<>
			<ul>
				<Typography variant="h6">Mortgage Type</Typography>
				<li>
					<input
						type="radio"
						name="mortgage_type"
						value="repayment"
						onChange={handleChange}
					/>
					<Typography>Repayment</Typography>
				</li>
				<li>
					<input
						type="radio"
						name="mortgage_type"
						value="interest"
						onChange={handleChange}
					/>
					<Typography>Interest Only</Typography>
				</li>
			</ul>
			{isError && (
				<Typography variant="body2" mt={1} sx={{ color: "hsl(4, 69%, 50%)" }}>
					This field is required
				</Typography>
			)}
		</>
	);
};

export default Type;
