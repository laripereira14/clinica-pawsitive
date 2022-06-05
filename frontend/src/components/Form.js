import { useState, useEffect } from 'react';

import { sendMail } from 'api';
import { formatPhone } from 'utils/functions';

import Button from "./Button";
import Input from "./Input";
import Loader from './Loader';

const Form = ({ formData }) => {
    const [data, setData] = useState({ name: '', phone: '', subject: '', message: ''});
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (formData) setData({...data, name: formData.nome, phone: formData.celular});
    }, [])

    const handleOnChange = (e) => setData({...data, [e.target.name]: e.target.value});
    const handleSubmit = (e) => {
        e.preventDefault(); 
        if (Object.values(data).includes('')) {
            setMessage('Preencha todos os campos.');
        } else if (data.phone.length < 11) {
            setMessage('Insira um celular válido.');
        } else {
            setMessage('');
            sendMail(data).then(res => {
                setMessage(res.data);
                setData({ name: '', phone: '', subject: '', message: ''});
            });
        }
    }


    return (
        <form className="flex flex-col space-y-6 md:w-10/12 lg:w-5/12 font-medium">
            <Input type="text" field="Nome" name="name" placeholder="Seu nome" maxLength="40" value={data.name} onChange={handleOnChange}/>
            <Input type="tel" field="Celular" name="phone" maxLength="11" placeholder="(00) 00000-0000" value={formatPhone(data.phone)} onChange={handleOnChange}/>
            <Input type="text" field="Assunto" name="subject" value={data.subject} placeholder="Motivo do seu contato" onChange={handleOnChange}/>
            <Input expand type="text" field="Mensagem" name="message" placeholder="Escreva sua mensagem..." value={data.message} onChange={handleOnChange}/>
            <Button classes="self-center" onClick={handleSubmit}> Enviar </Button>
            { message && <div> {message} </div>}
        </form>
    );
}

export default Form; 