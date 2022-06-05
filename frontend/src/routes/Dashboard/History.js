import { useState, useEffect } from 'react';
import Loader from "components/Loader";
import Table from "components/Table";
import { useNavigate, useOutletContext } from 'react-router-dom';
import { getServices } from 'api';
import Button from 'components/Button';

const History = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [serviceHistory, setServiceHistory] = useState([]);
    const [data] = useOutletContext();

    const navigate = useNavigate();

    useEffect(() => {
        getServices(data.carteirinha).then(res => {
            setIsLoading(false);
            console.log(res.data);
            setServiceHistory(res.data.services);
        });
    }, []);

    return (
        <>
            { isLoading && <Loader/>}
            
                {
                    serviceHistory.length === 0 ? (
                        <div className="self-center mt-auto flex flex-col items-center text-center"> 
                            <p >Seu pet ainda não fez nenhum serviço na Pawsitive. Que tal agendar agora? </p>
                            <Button onClick={() => navigate('/minha-pawsitive/agendar-visita')}> Agendar visita </Button> 
                        </div>
                    ) : (
                        <Table data={serviceHistory}/>
                    )
                }
            
        </>
    );
}

export default History;