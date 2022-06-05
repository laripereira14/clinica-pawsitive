import { useNavigate } from "react-router-dom";

import Card from "components/Card";

const DashboardIndex = () => {
    const navigate = useNavigate(); 

    return (
        <div className="space-y-5 flex flex-col">
            <Card title="Histórico" description="Visualize seu histórico de serviços feitos na Pawsitive." onClick={() => navigate('/minha-pawsitive/historico')}/>
            <Card title="Alterar dados" description="Altere os dados do seu cadastro." onClick={() => navigate('/minha-pawsitive/meus-dados')} />
            <Card title="Agendar visita" description="Agende uma visita à Pawsitive" onClick={() => navigate('/minha-pawsitive/agendar-visita')} />
        </div>
    );
}

export default DashboardIndex;