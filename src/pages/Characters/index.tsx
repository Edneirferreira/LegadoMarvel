import React, { useEffect, useState } from "react";
import api from "../../Services/api";

import { Container } from './styles';

interface ResponseData{
    id: string;
    name: string;
    description: string;
    thumbnail:{
        path: string;
        extensions: string;
    };
}

const Characters: React.FC = () => {
    const  [ characters, setCharacters ] = useState<ResponseData[]>([]);

    useEffect(() => {
        api
            .get('/characters')
            .then(response => {
                console.log(response.data.data.results);
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <Container>
            <h1>Personagens</h1>
            <ul>
                {characters.map(character => {
                    return (
                        <li>
                            <img src={`${character.thumbnail.path}.${character.thumbnail.extensions}`}
                            alt = {`Foto do ${character.name}`}
                            />
                            <span className="name">{character.name}</span>
                        </li>
                    );
                })}
            </ul>
        </Container>
    );
};

    
export default Characters;