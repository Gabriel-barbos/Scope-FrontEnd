import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import { Instalacao } from "./instalacao";
import { Manutencao } from "./Manutencao";
import { Remocao } from "./remocao";

export function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Instalacao />}/>
                <Route path="/manutencoes" element={<Manutencao />}/>
                <Route path="/remocoes" element={<Remocao />}/>
            </Routes>
        </Router>
    )
}