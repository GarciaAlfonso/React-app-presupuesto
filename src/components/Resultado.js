import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import  { CSSTransition, TransitionGroup} from 'react-transition-group';

const Mensaje = styled.p `
    background-color: rgb(127, 224, 237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
    font-weight: bold;
    border-radius: 10px;
`;

const ResultadoCotizacion = styled.div `
    text-align: center;
    padding: .5rem;
    border: 1px solid #26c6da;
    background-color: rgb(127, 224, 237);
    margin-top: 1rem;
    position: relative;
`;

const TextoCotizacion = styled.p `
    color: #00838F;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`;

const Resultado = ({cotizacion}) => {

    return (
        (cotizacion === 0 ? <Mensaje>Elige Marca, Año y tipo de Plan</Mensaje> 
        : (
            <ResultadoCotizacion>
                <TransitionGroup
                    component="span"
                    className="resultado"
                >
                    <CSSTransition
                        classNames="resultado"
                        key={cotizacion}
                        timeout={{enter:500, exit:500}}
                    >
                        <TextoCotizacion><span>El total es: ${cotizacion}</span></TextoCotizacion>
                    </CSSTransition>
                </TransitionGroup>
            </ResultadoCotizacion>
        ))
    );
    
}

Resultado.propTypes = {
    cotizacion: PropTypes.number.isRequired
}
export default Resultado;