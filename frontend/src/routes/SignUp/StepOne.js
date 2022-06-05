import { useState } from 'react';

import Button from "components/Button";

import ClientForm from 'components/ClientForm';

const StepOne = ({ data, handleOnChange, setStep, btnText }) => {
    const [errorMsg, setErrorMsg] = useState('');

    const validateForm = () => {
        if (Object.values(data).includes('')) {
            setErrorMsg("Preencha todos os campos.");
        } else {
            setErrorMsg('');
            setStep(2);
        }
    }

    return (
        <>
            <p className="text-2xl font-bold mb-5 px-6 text-center md:px-0">Cadastre-se para ter acesso à área exclusiva para clientes</p>
            <ClientForm data={data} border handleOnChange={handleOnChange}/>
            { errorMsg && <p className='font-medium'>{errorMsg}</p>}
            <Button onClick={validateForm}> Próximo </Button>      
        </>
    );
}

export default StepOne;