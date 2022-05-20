import Cliente from "../core/Cliente"

interface TabelaProps {
    clientes: Cliente[]

}

export default function Tabela(props: TabelaProps) {
    function reiderizaCabecalho (){
        return(
            <tr>
                <th>Código</th>
                <th>Nome</th>
                <th>Idade</th>
            </tr>
        )
    }
    function reiderizarDados () {
        return props.clientes?.map((cliente, i) => {
            return(
                <tr key={cliente.id}>
                    <td>{cliente.id}</td>
                    <td>{cliente.nome}</td>
                    <td>{cliente.idade}</td>
                </tr>
            )
        })

    }
    return(
        <table>
            <thead>
              {reiderizaCabecalho()}
            </thead>
            <tbody>
                {reiderizarDados()}
            </tbody>
        </table>
    )
}