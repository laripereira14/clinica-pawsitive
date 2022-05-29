import { sendMail } from 'api';
import { useState } from 'react';

import Button from "./Button";
import Input from "./Input";

const Form = () => {
    const [data, setData] = useState({ name: '', phone: '', subject: '', message: ''});
    const [message, setMessage] = useState('');

    const formatPhone = phone => phone.replace(/\D/g, '').replace(/(\d{2})(\d)(\d{4})(\d{4})$/, '($1) $2 $3-$4');

    const handleOnChange = (e) => setData({...data, [e.target.name]: e.target.value});
    const handleSubmit = (e) => {
        e.preventDefault(); 
        if (Object.values(data).includes('')) {
            setMessage('Preencha todos os campos.');
        } else if (data.phone.length < 11) {
            setMessage('Insira um celular válido.');
        } else {
            setMessage('');
            sendMail(data).then(res => setMessage(res.data));
        }
    }


    return (
        <form className="flex flex-col space-y-6 md:w-10/12 lg:w-5/12">
            <Input type="text" field="Nome" name="name" maxLength="40" value={data.name} onChange={handleOnChange}/>
            <Input type="tel" field="Celular" name="phone" maxLength="11" value={formatPhone(data.phone)} onChange={handleOnChange}/>
            <Input type="text" field="Assunto" name="subject" value={data.subject} onChange={handleOnChange}/>
            <Input expand type="text" field="Mensagem" name="message" value={data.message} onChange={handleOnChange}/>
            <Button classes="self-center" onClick={handleSubmit}> Enviar </Button>
            { message && <div> {message} </div>}
        </form>
    );
}

export default Form; 

/**  const options = [
        { id: 1, title: 'Consultas'},
        { id: 2, title: 'Exames'},
        { id: 3, title: 'Emergência 24h'},
        { id: 4, title: 'Vacinas'},
        { id: 5, title: 'Banho e Tosa'},
        { id: 6, title: 'Internação'}
    ];
 */
