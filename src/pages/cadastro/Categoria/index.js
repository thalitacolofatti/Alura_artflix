import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PageDefault from '../../../components/PageDefault'
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    };
    const [categorias, setCategorias] = useState([]); 
    const [values, setValues] = useState(valoresIniciais);
    
    //chave: nome, descricao, ...
    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor,
        });
    }

    function handleChange(infosDoEvento) {
        setValue(
            infosDoEvento.target.getAttribute('name'), 
            infosDoEvento.target.value
        );
    }

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome}</h1>

            <form onSubmit={function handleSubmit(infosDoEvento) {
                infosDoEvento.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ]);
                setValues(valoresIniciais)
            }}>

                <FormField
                    label="Nome da Categoria: "
                    name="nome"
                    type="text"
                    value={values.nome}
                    onChange={handleChange}
                />

                <FormField
                    label="Descrição: "
                    name="descricao"
                    type="textarea"
                    value={values.descricao}
                    onChange={handleChange}
                />
                <FormField
                    label="Cor: "
                    name="cor"
                    type="color"
                    value={values.cor}
                    onChange={handleChange}
                />

                <Button>
                    Cadastrar
                </Button>
            </form>

            <ul>
                {categorias.map((categoria) => {
                    return (
                        <li key={`${categoria.nome}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>

            <Link to="/">
                Voltar para a Home
            </Link>
        </PageDefault>
    );
}

export default CadastroCategoria;