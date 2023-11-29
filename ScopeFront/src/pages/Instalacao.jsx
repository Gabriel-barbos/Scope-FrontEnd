import {
    TextField,
    InputAdornment,
    Icon,
    IconButton,
    Button,
  } from "@mui/material";
import '../assets/css/instalacao.css'
import { NavBar } from "../components/Navbar";

export function Instalacao(){
    return(
        <>
        <NavBar />

      <div className='formulario'>
        <h1 className="cadastrar">
          Cadastrar Nova Instalação
        </h1>

        <TextField
          className="chassi"
          color="primary"
          name="Chassi"
          label="Chassi"
          placeholder="Digite o chassi do veiculo"
          sx={{ width: 271 }}
          variant="filled"
        />
        <TextField
          className="cliente"
          color="primary"
          label="Cliente"
          placeholder="Digite o nome do cliente"
          sx={{ width: 276 }}
          variant="filled"
        />
        <TextField
          className="placa"
          color="primary"
          name="Placa"
          label="Placa"
          placeholder="Digite a placa"
          sx={{ width: 169 }}
          variant="filled"
        />
        <TextField
          className="dispositivo"
          color="primary"
          label="Dispositivo"
          placeholder="Nome do Dispositivo"
          sx={{ width: 169 }}
          variant="filled"
        />
        <TextField
          className="endereco"
          color="primary"
          label="Endereço do veiculo"
          placeholder="endereço"
          sx={{ width: 452 }}
          variant="filled"
        />
        <TextField
          className="modelo"
          color="primary"
          label="Modelo do veiculo"
          placeholder="Modelo do veiculo"
          sx={{ width: 452 }}
          variant="filled"
        />
      </div>
      <Button
        className="sendBtn"
        sx={{ width: 115 }}
        color="primary"
        name="ENVIAR"
        variant="contained"
      >
        ENVIAR
      </Button>
      <Button
        className="btnExcel"
        sx={{ width: 274 }}
        color="primary"
        name="EXCEL-BTN"
        variant="contained"
      >
        IMPORTAR COM EXCEL
      </Button>

      <h1 className="list-title">Instalações</h1>
        </>
        
    )
}