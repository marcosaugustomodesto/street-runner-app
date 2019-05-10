import React from 'react';

const inputlistdetail = (props) => {
    return (
        <div>
            <input id="tipo" placeholder="tipo" type="text" value={props.input.tipo} />
            <input id="velocidade" placeholder="velocidade" type="text" value={props.input.velocidade} />
            <input id="minutos" placeholder="minutos" type="text" value={props.input.minutos} />
            <input id="repeticoes" placeholder="repeticoes" type="text" value={props.input.repeticoes} />
            <input id="metros" placeholder="metros" type="text" value={props.input.metros} />
        </div>
    )
}

export default inputlistdetail;