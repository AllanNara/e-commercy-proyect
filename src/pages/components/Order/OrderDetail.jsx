import LocalShippingSharpIcon from "@mui/icons-material/LocalShippingSharp";
import CheckCircleSharpIcon from "@mui/icons-material/CheckCircleSharp";
import { Box, Container, styled, Typography } from "@mui/material";
import LiveHelpSharpIcon from "@mui/icons-material/LiveHelpSharp";
import CancelIcon from "@mui/icons-material/Cancel";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";
import Brief from "../common/Brief";

function OrderDetail({ order, loading, error }) {
	if (loading) return <Spinner />;

	if (error)
		return (
			<ContainerNotFound>
				<LiveHelpSharpIcon sx={{ fontSize: 150, userSelect: "none" }} />
				<Typography variant="h5" fontFamily={"Poppins"}>
					No encontramos lo que buscaba...
				</Typography>
				<Typography variant="h6" fontFamily={"Poppins"}>
					Pruebe si el codigo esta bien escrito e intente de nuevo
				</Typography>
			</ContainerNotFound>
		);

	return (
		<ContainerOrderDetail>
			{!order ? (
				<>
					<LocalShippingSharpIcon sx={{ fontSize: 300 }} />
					<InfoBox>
						<Typography variant="h6" fontWeight={300} fontFamily={"Poppins"}>
							Con el codigo de identificación que te proporcionamos al momento de tu
							compra podras ver el resumen generado en esta sección
						</Typography>
						<Typography variant="h6" fontWeight={300} fontFamily={"Poppins"}>
							No se mostraran datos sensibles de la compra, como dirección del envio,
							nombre o correo del usuario.
						</Typography>
					</InfoBox>
				</>
			) : (
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						flex: 0.8,
					}}
				>
					<Brief
						cart={order.items}
						total_items={order.total_items}
						total_to_pay={order.total_to_pay}
					/>
					<Container
						sx={{ my: 6.5, pb: 2, display: "flex", flexDirection: "column", gap: 1 }}
					>
						<Typography variant="h6" fontFamily={"Poppin"}>
							Estado:{" "}
							{order.state === "generated" ? (
								<>
									<CheckCircleSharpIcon color="success" /> Generado
								</>
							) : (
								<>
									<CancelIcon color="error" /> Cancelado
								</>
							)}
						</Typography>
						<Typography variant="h6" fontFamily={"Poppin"}>
							Fecha de emision: {order.date.toDate().toLocaleString()}
						</Typography>
					</Container>
				</Box>
			)}
		</ContainerOrderDetail>
	);
}

OrderDetail.propTypes = {
	order: PropTypes.object,
	loading: PropTypes.bool,
	error: PropTypes.bool,
};

export default OrderDetail;

const ContainerOrderDetail = styled(Container)(() => ({
	display: "flex",
	justifyContent: "center",
	gap: 50,
	marginTop: 50,
}));

const InfoBox = styled(Box)(() => ({
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-evenly",
	width: 500,
}));

const ContainerNotFound = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	gap: theme.spacing(3),
	marginTop: theme.spacing(9),
}));
