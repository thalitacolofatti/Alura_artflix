import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageDefault from '../../../components/PageDefault'
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';


function CadastroCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    };

    const { handleChange, values, clearForm } = useForm(valoresIniciais);
    const [categorias, setCategorias] = useState([]); 

    useEffect(() => {
        const URL_TOP = window.location.hostname.includes('localhost')
        ? 'http://localhost:8080/categorias'
        : 'https://alura-artflix.herokuapp.com/categorias'
        fetch(URL_TOP)
            .then (async (respostaDoServidor) => {
                const resposta = await respostaDoServidor.json();
                setCategorias([
                    ...resposta,
                ]);
            });
            
        // setTimeout(() => {
        //     setCategorias([
        //         ...categorias,
        //         values,
        //     ]);
        // }, 4 * 1000);
    }, []);

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome}</h1>

            <form onSubmit={function handleSubmit(infosDoEvento) {
                infosDoEvento.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ]);
                clearForm();
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

            {categorias.length === 0 && (
                <div>
                    Loading...
                </div>
            )}

            <ul>
                {categorias.map((categoria) => {
                    return (
                        <li key={`${categoria.titulo}`}>
                            {categoria.titulo}
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