import { useState, useEffect } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';

import { updateData } from 'api';

import Button from 'components/Button';
import ClientForm from 'components/ClientForm';
import Loader from 'components/Loader';
import Modal from 'components/Modal';

const UpdateData = () => {
    const [data, setData] = useOutletContext();
    const [clientData, setClientData ] = useState();
    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOnChange = (e) => setClientData({...clientData, [e.target.name]: e.target.value});

    const handleSave = () => {

        if (Object.values(clientData).includes('')) {
            setMessage("Preencha todos os campos.");
        } else if (clientData.celular.length < 11) {
            setMessage('Insira um celular válido.');
        } else {
            setMessage('');
            updateData(clientData).then(res => {
                setData(clientData);
                setMessage(res.data.msg);
                setIsModalOpen(true);
                
            });
    
        }

    }

    useEffect(() => {
       setClientData({...data, senha: ''});
    }, []);

    return (
        <div className="flex flex-col items-center">
           { clientData ? <ClientForm data={clientData} showPasswordField handleOnChange={handleOnChange}/> : <Loader/> }
           { message && <p className='font-medium mb-6'>{message}</p>}
           <Button onClick={handleSave} classes="-mt-1 md:mt-2 mb-6"> Salvar </Button> 
           { isModalOpen && <Modal setIsOpen={setIsModalOpen} afterDismiss={() => navigate(-1)}>{message}</Modal> }    
        </div>
    );
}
//

export default UpdateData;