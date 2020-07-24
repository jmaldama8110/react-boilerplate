import React from 'react';
import {connect} from 'react-redux';
import {fxLogin} from '../actions/auth';


const LoginPage = ( props ) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__titulo">Boilerplate React App</h1>
            <p>Agrega una descripcion principal aqui...</p>
            <button className="button-layout" onClick={props.detonarLogin}>Sesion Google</button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    detonarLogin: () => dispatch( fxLogin() )
});

export default connect(undefined,mapDispatchToProps)(LoginPage);