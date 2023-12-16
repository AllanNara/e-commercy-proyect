import { Box, Divider, IconButton, Link, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import { styled } from "@mui/system";

const Copyright = styled("div")({
	fontSize: "0.8rem",
	marginTop: 2,
});

function Footer() {
	const contactEmail = "allannara@outlook.com";

	return (
		<>
			<Box
				className="footer-information"
				sx={{
					width: "100vw",
					bgcolor: "#222",
					borderTopStyle: "double",
					borderColor: "#efefef",
					padding: 9,
					color: "#fff",
					display: "flex",
					flexDirection: "column",
				}}
			>
				<Box sx={{ display: "flex", gap: 20 }}>
					<Box>
						<Typography
							variant="h6"
							component="div"
							sx={{ fontFamily: "Playfair Display", marginBottom: 2, fontWeight: 600, fontSize: 24 }}
							gutterBottom
						>
							E-ComMercy
						</Typography>
						<Typography variant="body2" paragraph>
							¡Descubre una nueva experiencia de compras en línea con E-ComMercy!
						</Typography>
						<Box sx={{ display: "flex", gap: 2 }}>
							<Typography variant="body2" sx={{ textDecoration: "underline" }} paragraph>
								<Link href="#" color="inherit">
									Términos y Condiciones
								</Link>
							</Typography>
							|
							<Typography variant="body2" sx={{ textDecoration: "underline" }} paragraph>
								<Link href="#" color="inherit">
									Política de Privacidad
								</Link>
							</Typography>
							|
							<Typography variant="body2" sx={{ textDecoration: "underline" }} paragraph>
								<Link href="#" color="inherit">
									Aviso Legal
								</Link>
							</Typography>
						</Box>
					</Box>

					<Box sx={{ width: 500 }}>
						<Divider sx={{ marginY: 2 }} />
						<Typography
							variant="body2"
							sx={{ lineHeight: 2, color: "#dedede", fontFamily: "serif" }}
							paragraph
						>
							Agradecemos sinceramente a todos los colaboradores que han apoyado económica
							y moralmente a este proyecto. Su generosidad ha sido fundamental para hacer
							posible E-ComMercy.
						</Typography>
					</Box>
				</Box>

				<Box sx={{ display: "flex", justifyContent: "space-between" }}>
					<Copyright>
						<Typography variant="caption" paragraph>
							&copy; {new Date().getFullYear()} E-ComMercy. Todos los derechos reservados.
						</Typography>
					</Copyright>

					<Copyright>
						<IconButton
							href="https://github.com/allannara"
							target="_blank"
							color="inherit"
							rel="noopener noreferrer"
						>
							<GitHubIcon sx={{ fontSize: 35 }} />
						</IconButton>
						<IconButton
							href="https://www.linkedin.com/in/allannara"
							target="_blank"
							color="inherit"
							rel="noopener noreferrer"
						>
							<LinkedInIcon sx={{ fontSize: 35 }} />
						</IconButton>
						<IconButton
							href={`mailto:${contactEmail}`}
							color="inherit"
							target="_blank"
							rel="noopener noreferrer"
						>
							<MailIcon sx={{ fontSize: 35 }} />
						</IconButton>
					</Copyright>
				</Box>
			</Box>
		</>
	);
}

export default Footer;
