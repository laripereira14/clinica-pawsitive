import Loader from 'components/Loader';
import { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation, useOutletContext } from "react-router-dom";

const Dashboard = () => {
  const [client, setClient] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if(!location.state || !location.state.clientData) {
      navigate('/login');
    } else {
      setClient(location.state.clientData);
    }
  }, []);
  
  const handleGoBack = () => navigate(`${location.pathname === '/minha-pawsitive' ? '/login' : '/minha-pawsitive'}`);

  return (
    <div className="bg-primary-pink flex justify-center items-center h-screen text-black px-2 md:px-10"> 
      <div className="bg-white rounded-xl flex flex-col p-6 w-10/12 min-h-[70%] z-10 relative md:bg-composition-dashboard md:bg-no-repeat md:bg-[length:75%] md:bg-[right_-0.5rem_bottom_-0.5rem] lg:bg-[right_-14rem_bottom_-8rem]
      after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-white after:rounded-xl after:-z-10 after:opacity-80">
        { client ? 
          <>
            <div>
              <h2 className="font-bold text-2xl mb-2"> Olá, {client.nome} e {client.nome_pet} </h2>
              <p className="mb-8"> Carteirinha Nº {client.carteirinha} </p>
            </div>
            <Outlet context={[client, setClient]} />
            <span className="!mt-auto w-max font-bold cursor-pointer hover:underline underline-offset-4" onClick={handleGoBack}> { `${location.pathname === '/minha-pawsitive' ? '< Sair' : '< Voltar'}` }</span>
          </> : <Loader/>
          }
      </div>
    </div>
  );
}
export default Dashboard;