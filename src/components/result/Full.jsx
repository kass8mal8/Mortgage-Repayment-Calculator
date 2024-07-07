/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { Box, Typography, Stack } from "@mui/material";
import { CurrencyPound } from "@mui/icons-material";

const Full = ({ result }) => {
	return (
		<Box className="full">
			<Typography variant="h5"> Your results</Typography>

			<Typography>
				Your results are shown below based on the information you provided. To
				adjust the results, edit the form and click “calculate repayments”
				again.
			</Typography>

			<Box className="mortgage">
				<Typography>Your monthly repayments</Typography>
				<Stack className="stack" direction="row" alignItems={"center"} my={1.3}>
					<CurrencyPound sx={{ width: "50px", height: "50px", mr: -1 }} />
					<Typography variant="h4">{result?.monthly?.toFixed(2)}</Typography>
				</Stack>
				<Typography
					sx={{ flex: 1, background: "hsl(200, 24%, 40%)", p: 0.1 }}
				></Typography>
				<Stack my={1.5}>
					<Typography variant="body2">
						Total you'll receive over the term
					</Typography>
					<Stack className="stack" direction="row" my={1.3}>
						<CurrencyPound
							sx={{
								width: "25px",
								height: "25px",
								color: "white",
								mt: -2.5,
							}}
						/>

						<Typography variant="h5" sx={{ color: "white" }}>
							{result?.yearly?.toFixed(2)}
						</Typography>
					</Stack>
				</Stack>
			</Box>
		</Box>
	);
};

export default Full;
