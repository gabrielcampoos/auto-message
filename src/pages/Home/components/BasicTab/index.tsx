import { Button, Container, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import * as React from 'react';

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function CustomTabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

export default function BasicTabs() {
	const [value, setValue] = useState(0);
	const [numero, setNumero] = useState('');
	const [nome, setNome] = useState('');
	const [equipamento, setEquipamento] = useState('');
	const [link, setLink] = useState('');

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	const time = () => {
		const timeNow = new Date();
		const h = timeNow.getHours();
		const m = timeNow.getMinutes();

		if (h < 12) return `Bom dia`;

		return `Boa tarde`;
	};

	const mensagem = (equipamento: string) => {
		if (!equipamento) {
			return 'É preciso informar um equipamento.';
		}

		if (equipamento === 'computador') {
			return 'Seu computador está pronto para ser retirado.';
		}

		if (equipamento === 'notebook') {
			return 'Seu notebook está pronto para ser retirado.';
		}

		if (equipamento === 'impressora') {
			return 'Sua impressora está pronta para ser retirada.';
		}

		if (equipamento === 'nobreak') {
			return 'Seu nobreak está pronto para ser retirado.';
		}
	};

	return (
		<Container>
			<Box sx={{ width: '100%' }}>
				<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
					<Tabs
						value={value}
						onChange={handleChange}
						aria-label="basic tabs example"
					>
						{/* <Tab label="Periodo" {...a11yProps(0)} /> */}
						<Tab label="Número" {...a11yProps(0)} />
						<Tab label="Nome" {...a11yProps(1)} />
						<Tab label="Equipamento" {...a11yProps(2)} />
					</Tabs>
				</Box>

				{/* <CustomTabPanel value={value} index={0}>
					<TextField 
						id="periodoId"
						label='Periodo: "dia | tarde"'
						variant="standard"
						onChange={(ev) => {
							setPeriodo(ev.target.value)
						}}
						onClick={() =>{ 
							const id = document.getElementById('periodoId');
							if(id === 'dia') {
								setPeriodo('Bom dia')
							}
						}}
						value={periodo}
					/>
				</CustomTabPanel> */}
				<CustomTabPanel value={value} index={0}>
					<TextField
						id="standard-basic"
						label="Número"
						variant="standard"
						onChange={(ev) => setNumero(ev.target.value)}
						value={numero}
					/>
				</CustomTabPanel>
				<CustomTabPanel value={value} index={1}>
					<TextField
						id="standard-basic"
						label="Nome"
						variant="standard"
						onChange={(ev) => setNome(ev.target.value)}
						value={nome}
					/>
				</CustomTabPanel>
				<CustomTabPanel value={value} index={2}>
					<TextField
						id="idEquipamento"
						label="Equipamento"
						variant="standard"
						onChange={(ev) => {
							setEquipamento(ev.target.value);
						}}
						value={equipamento}
					/>
				</CustomTabPanel>
				<Button
					id="btnEnviar"
					variant="contained"
					onClick={() => {
						const btnEnviar = document.getElementById('btnEnviar');

						const enviar = `https://api.whatsapp.com/send/?phone=55${numero}&text=${time()}, ${nome}. ${mensagem(
							equipamento,
						)}.&type=phone_number&app_absent=0`;

						if (btnEnviar?.id === 'btnEnviar') setLink(enviar);
					}}
					href={link}
				>
					Enviar
				</Button>
			</Box>
		</Container>
	);
}
