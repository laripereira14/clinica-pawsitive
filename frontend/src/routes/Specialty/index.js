import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";

import { getSpecialty } from "./data";

import SectionTitle from 'components/SectionTitle';
import ImageMask from 'components/ImageMask';
import List from 'components/List';
import Button from 'components/Button';

const Specialty = () => {
    const location = useLocation();
    const [specialty, setSpecialty] = useState('');


    useEffect(() => setSpecialty(getSpecialty(location.state.id)), [location.state.id]);


    return (
        specialty && <main className="pt-40 pb-14 px-12 bg-white text-black md:pt-60 lg:pt-52 lg:px-28">
            <SectionTitle classes="text-primary-pink">{specialty.name}</SectionTitle>
            <div className="flex flex-col text-justify md:inline-block md:mt-5">
                <ImageMask imagePath={specialty.photo} altText={`specialty-picture-${specialty.name}`} side="right" imageClasses="order-2 mt-10 md:w-7/12 md:mt-0 md:ml-4 lg:w-4/12">
                    <p>{specialty.description.main}</p>
                    { specialty.description.callout && <p className="mt-2 mb-5"> {specialty.description.callout} </p> }
                    { specialty.description.features &&  <List data={specialty.description.features}/> }
                </ImageMask>
                <Button href="/#booking" classes="-mt-1 md:mt-0 self-center"> Agendar visita </Button>
            </div>
        </main>
    )
}

export default Specialty;