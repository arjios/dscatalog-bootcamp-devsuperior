import { isAllowedByRole } from 'core/utils/Auth';
import { makePrivateRequest } from 'core/utils/request';
import React, { useState } from 'react';
import BaseForm from '../../BaseForm';

import './style.scss';

type FormState = {
    name: string;
    price: string;
    category: string;
    description: string;
}

type FormEvent = React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>

const Form = () => {

    const [formData, setFormData] = useState<FormState>({
        name: '',
        price: '',
        category: '',
        description: ''
    });


    const handleOnChange = (event: FormEvent) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData(data => ({ ...data, [name]: value }))
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const payload = {
            ...formData,
            imgUrl: 'https://a-static.mlcdn.com.br/1500x1500/console-playstation-5-digital-edition-ps5-sony/magazineluiza/043079600/176b094453a20c32c655ec071d3ad4e5.jpg',
            categories: [{ id: formData.category }]
        }
        makePrivateRequest({ url: '/products', method: 'POST', data: payload })
            .then(() => {
                setFormData({ name: '', category: '', price: '', description: '' });
            });
    }

    return (
        <form onSubmit={handleSubmit}>
            <BaseForm title="Cadastrar um Produto" >
                <div className="row">
                    <div className="col-6">
                        <input
                            name="name"
                            value={formData.name}
                            type="text"
                            className="form-control mb-5"
                            onChange={handleOnChange}
                            placeholder="Nome do Produto"
                        />
                        <select value={formData.category}
                            className="form-control mb-5"
                            onChange={handleOnChange}
                            name="category">
                            <option value="1">Livros</option>
                            <option value="3">Computadores</option>
                            <option value="2">Eletronicos</option>
                        </select>
                        <input
                            value={formData.price}
                            name="price"
                            type="text"
                            className="form-control"
                            onChange={handleOnChange}
                            placeholder="Preço"
                        />
                    </div>
                    <div className="col-6">
                        {isAllowedByRole(['ROLE_ADMIN']) && (
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleOnChange}
                                className="form-control"
                                cols={30}
                                rows={10}
                            />
                        )}
                    </div>
                </div>
            </BaseForm>
        </form>
    )
}

export default Form;