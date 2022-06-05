const Table = ({ data }) => {
    const tableCellsClasses = 'py-3 px-4';

    console.log(data);
    
    return (
        <table className="md:min-w-[80%] rounded-xl overflow-hidden w-full text-center">
            <thead className="bg-primary-green text-white font-bold"> 
                <tr>
                    <th className={tableCellsClasses}>Data</th>
                    <th className={tableCellsClasses}>Serviço</th>
                    <th className={tableCellsClasses}>Preço</th>
                    <th className={tableCellsClasses}>Responsável</th>
                </tr>
            </thead>
            <tbody>
                { data.map(el => (
                    <tr className={`${el.id % 2 === 0 ? 'bg-[#eaeaea]' : 'bg-white'} hover:bg-primary-green`} >
                      <td className={tableCellsClasses}>{new Date(el.data).toLocaleDateString('pt-br')}</td>
                      <td className={tableCellsClasses}>{el.desc_servico}</td>
                      <td className={tableCellsClasses}>{Number(el.preco).toLocaleString('pt-br', { style: 'currency', currency: 'BRL'})}</td>
                      <td className={tableCellsClasses}>{el.responsavel}</td>
                    </tr>
                ))}
    
            </tbody>
        </table>
    );
}

export default Table;