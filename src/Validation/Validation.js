import React from 'react';

const validation = ( props ) => {
    let validationMessage = '';

    if (isNaN(props.value.velocidade) || isNaN(props.value.minutos) || isNaN(props.value.repeticoes) || isNaN(props.value.metros)) {
        validationMessage = 'Dados inválidos';
    }    
    return (
       <p>{validationMessage}</p>
    );
};

export default validation;