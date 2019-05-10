import React from 'react';

const inputlist = (props) => {

    return (
        <form>
            <div>
                <input id="tipo" placeholder="tipo" type="text" value={props.value.tipo} onChange={props.changed} />
                <input id="velocidade" placeholder="velocidade" type="text" value={props.value.velocidade} onChange={props.changed} />
                <input id="minutos" placeholder="minutos" type="text" value={props.value.minutos}  onChange={props.changed} />
                <input id="repeticoes" placeholder="repeticoes" type="text" value={props.value.repeticoes}  onChange={props.changed}/>
                <input id="metros" placeholder="metros" type="text" value={props.value.metros}  onChange={props.changed}/>
                <button onClick={props.addRecord}>Inserir</button>
            </div>
        </form>
    );
}

export default inputlist;