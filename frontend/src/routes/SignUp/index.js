import { useState } from 'react';

import Button from "components/Button";
import PawPatternBackground from "components/PawPatternBackground";
import StepOne from './StepOne';
import StepTwo from './StepTwo';

const SignUp = () => {
    const [step, setStep] = useState(1);

    const [data, setData] = useState({
      nome:'',
      celular: '',
      email: '',
      nome_pet: '',
      especie_pet: '',
      data_nasc: '',
    });

    const handleOnChange = (e) => setData({...data, [e.target.name]: e.target.value});

    return (
      <PawPatternBackground classes="flex flex-col items-center justify-center h-screen text-black"> 
        <div className="flex flex-col items-center">
          { step === 1 ? <StepOne data={data} handleOnChange={handleOnChange} setStep={setStep}/> : <StepTwo data={data} setData={setData} handleOnChange={handleOnChange}/>}
        </div>
      </PawPatternBackground>
    );
}

export default SignUp;