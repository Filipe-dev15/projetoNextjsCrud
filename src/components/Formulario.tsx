import { useState } from "react";
import Entrada from "./Entrada";
import Cliente from "../core/Cliente"
import Botao from "./Botao";

interface FormularioPros {
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void

}

export default function Formulario (props: FormularioPros){
    const id = props.cliente?.id ?? null
    const [Nome, setNome] = useState(props.cliente?.nome ?? '')
    const [Idade, setIdade] = useState(props.cliente?.idade ?? '')
    return(
        <div>
            {id ? (
                <Entrada 
                somenteLeitura 
                texto="Código" 
                valor= {id}  
                className='mb-4' />
            ) : false }
            <Entrada 
            texto="Nome" 
            valor={Nome} 
            valorMudou={setNome}  
            className="mb-4"
            />
            <Entrada 
            texto='Idade' 
            tipo ='text' 
            valor={Idade}
            valorMudou={setIdade}
            />
            <div className="flex justify-end mt-7">
                <Botao className=" mr-2 bg-gradient-to-r from-green-400 to-green-700 "
                onClick={() => props.clienteMudou?.(new Cliente(Nome, Idade,id))}>
                    {id ? 'ALterar': 'Salvar'}
                </Botao>
                <Botao className="bg-gradient-to-r from-red-400 to-red-700"
                 onClick={props.cancelado} >
                  Cancelar
                </Botao>
            </div>
        </div>
    )
}