import PropTypes from "prop-types";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableFooter from "@mui/material/TableFooter";
import Paper from "@mui/material/Paper";
import { Tooltip, Typography } from "@mui/material";

function Brief({ cart, total_to_pay, total_items }) {
	return (
		<>
			<Typography variant="h5">Resumen de compra</Typography>
			<TableContainer sx={{ width: "90%", marginTop: 3 }} component={Paper}>
				<Table sx={{ maxWidth: "100%" }} size="small">
					<TableHead>
						<TableRow>
							<TableCell>Producto</TableCell>
							<TableCell align="center">Cantidad</TableCell>
							<TableCell align="center">Subtotal</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{cart.map((item, index) => (
							<TableRow
								key={index}
								sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
							>
								<Tooltip title={item.title} placement="top">
									<TableCell
										component="th"
										scope="row"
										sx={{
											whiteSpace: "nowrap",
											overflow: "hidden",
											textOverflow: "ellipsis",
											maxWidth: "150px",
										}}
									>
										{item.title}
									</TableCell>
								</Tooltip>
								<TableCell align="center">{item.quantity}</TableCell>
								<TableCell align="center">$ {item.total ?? item.subtotal}</TableCell>
							</TableRow>
						))}
					</TableBody>
					<TableFooter>
						<TableRow>
							<TableCell variant="" colSpan={3} size="medium" />
						</TableRow>
						<TableRow>
							<TableCell colSpan={2} align="right" variant="head">
								Items:
							</TableCell>
							<TableCell align="center" variant="body">
								{total_items} unidades
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell colSpan={2} align="right" variant="head" sx={{ fontSize: 18 }}>
								Total:
							</TableCell>
							<TableCell
								size="medium"
								align="center"
								variant="head"
								sx={{ fontSize: 18 }}
							>
								$ {total_to_pay}
							</TableCell>
						</TableRow>
					</TableFooter>
				</Table>
			</TableContainer>
		</>
	);
}

Brief.propTypes = {
	cart: PropTypes.array.isRequired,
	total_to_pay: PropTypes.number.isRequired,
	total_items: PropTypes.number.isRequired,
};

export default Brief;
