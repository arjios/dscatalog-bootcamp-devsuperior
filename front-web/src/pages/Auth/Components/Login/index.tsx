import ButtonIcon from 'core/components/ButtonIcon';
import React, { useState }  from 'react';
import {Link, useHistory} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import AuthCard from '../Card/';

import "./styles.scss";
import { makeLogin } from 'core/utils/request';
import { saveSessionData } from 'core/utils/Auth';

type FormData = {
   username: string;
   password: string;
}


const Login = () => {

   const { register, handleSubmit, errors } = useForm<FormData>();
   const [hasError, setHasError] = useState(false);
   const history = useHistory();

   const onSubmit=(data: FormData) => {
      makeLogin(data)
         .then(response => {
            setHasError(false);
            saveSessionData(response.data);
            history.push('/admin');
         })
         .catch(() => {
            setHasError(true);
         })
   }

    return(
        <AuthCard title="login">
            {hasError && (
               <div className="alert alert-danger mt-5">
                 Usuário ou senha invalidos
               </div>
            )}
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                <input
                 type="email"
                 className="form-control input-base margin-botton-30"
                 placeholder="Email"
                 name="username"
                 ref={register({ required: true })}
                 />
                <input
                 type="password"
                 className="form-control input-base"
                 placeholder="Senha"
                 name="password"
                 ref={register({ required: true })}
                />
                 <Link to="/admin/auth/recover" className="login-link-recover">
                    Esqueceu a senha?
                 </Link>
                 <div className="login-submit">
                    <ButtonIcon text="Logar"/>
                 </div>
                 <span className="not-register">
                    Não tem registro?
                 </span>
                 <Link to="/admin/auth/register" className="login-link-register">
                    CADASTRAR
                 </Link>
            </form>
        </AuthCard>
    );
}

export default Login;