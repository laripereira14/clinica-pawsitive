import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { generateCarteirinha } from 'utils/functions';
import { getCarteirinhas, signUp } from 'api';

import Button from "components/Button";
import Input from "components/Input";

const StepTwo = ({ setData, data, handleOnChange }) => {
    const navigate = useNavigate();
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        getCarteirinhas().then(res => setData({ ...data, 'carteirinha': generateCarteirinha(res.data.carteirinhas) }));
    }, []);

    const handleSignUp = () => {
        if (!data.senha || !data.senha_confirmacao) {
            setErrorMsg("Preencha todos os campos.");
        } else if (data.senha !== data.senha_confirmacao) {
            setErrorMsg("As senhas não coincidem.");
        } else if (data.senha.length < 8 || data.senha.length > 20) {
            setErrorMsg("A senha deve conter entre 8 e 20 caracteres.")
        } else {
            setErrorMsg("");
            signUp(data).then(res => res.data.success === 1 ? navigate('/login') : setErrorMsg(res.data.msg));           
        }
    }
    
    return (
        <>
            <div className="px-6 md:px-0 font-medium">
                <p className="text-2xl font-bold mb-5 text-center">Quase lá!</p>
                <p className="font-semibold text-lg mb-5 text-center"> Sua carteirinha é {data.carteirinha}. Agora, crie uma senha para acessar o portal. </p>    
                <div className="w-full space-y-5">
                    <Input type="password" field="Senha" name="senha" minLength="8" maxLength="20" placeholder="Entre 8-20 caracteres" value={data.senha} onChange={handleOnChange}/>
                    <Input type="password" field="Confirme a senha" name="senha_confirmacao" minLength="8" maxLength="20" placeholder="Entre 8-20 caracteres" value={data.senha_confirmacao} onChange={handleOnChange}/>
                </div>
            </div>
            { errorMsg && <p className='font-medium mt-5'>{errorMsg}</p>}
            <Button onClick={handleSignUp}> Cadastrar </Button>
        </>
    );
}

export default StepTwo;