import React, { useState } from "react";
import * as S from "./styled";
import { FaSearch } from "react-icons/fa";
import { specficPokemon } from '../../services/api'
import logo from './images/logo.png'

export default function Header({pokemonSearchName}) {
  const [pokemonName, setPokemonName] = useState('');
  const [erro, setErro] = useState(false);

  async function handlePesquisa(){
    if(pokemonName){
      const response = await specficPokemon(pokemonName.toLowerCase()).then(response => response);
      pokemonSearchName(response)
      .catch(err =>{
        setErro(true);

      })
    }
  }
  return (
    
    <S.Header>
      <S.Container>
       <img src={logo} width="120px" height='70px' ></img>
       <S.divSearch>
          <S.inputName value={pokemonName} onChange={e => setPokemonName(e.target.value)} placeholder="Pesquise pelo nome"></S.inputName>
            <S.buttonSearch type="button" onClick={handlePesquisa}><FaSearch/></S.buttonSearch>  
          {erro ? <S.ErrorMsg>Pokemon não encontrado</S.ErrorMsg> : ''}  
        </S.divSearch>
      </S.Container>
    </S.Header>
  );
}
