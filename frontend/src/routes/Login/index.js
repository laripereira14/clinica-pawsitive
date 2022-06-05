import { useState, useEffect } from 'react';

import Button from "components/Button";
import Input from "components/Input";
import PawPatternBackground from "components/PawPatternBackground";
import { Link, useNavigate } from "react-router-dom";
import { login } from 'api';
import { isNumberKey } from 'utils/functions';

const Login = () => {
    const [data, setData] = useState({ carteirinha: '', password: '' }); 
    const [errorMsg, setErrorMsg] = useState(''); 
    const navigate = useNavigate();

    const handleOnChange = (e) => setData({...data, [e.target.name]: e.target.value});

    const handleSignIn = () => {
      if(Object.values(data).includes('')) {
        setErrorMsg("Preencha todos os campos.");
      } else {
        login(data).then(res => res.data.success === 1 ? navigate('/minha-pawsitive', { state: { clientData: res.data.client }}) : setErrorMsg(res.data.msg));
      }
    }

    return (
      <PawPatternBackground classes="flex flex-col items-center justify-center h-screen text-black"> 
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold mb-5"> Minha Pawsitive </span>
          <div className="space-y-4 font-medium mb-4">
              <div><Input type="text" field="Carteirinha" value={data.carteirinha} name="carteirinha" onKeyPress={(e) => isNumberKey(e)} onChange={handleOnChange} /></div>
              <div><Input type="password" field="Senha" value={data.senha} name="password" onChange={handleOnChange} /></div>
          </div>
          {errorMsg && <p className='font-medium mt-4'>{errorMsg}</p>}
          <Button onClick={handleSignIn}> Entrar </Button>
          <Link to="/sign-up" className="mt-4 cursor-pointer hover:underline underline-offset-4 transition font-medium"> Primeiro acesso?</Link>
        </div>
      </PawPatternBackground>
    );
}

export default Login;