import React from 'react';
import ToDo from './ToDo.js';

const teksty = [
    {
    id:0,
    text:'papiez polak'
}, {
    id:1,
    text:'kamienie'
}, {
    id:2,
    text:'dinozaury'
}, {
    id:3,
    text:'goguslaw linda'
}, {
    id:4,
    text:'traktor'
}

]

function App(){
const owca = teksty.map( el => <ToDo key={el.id} text={el.text} /> )

    return (
        <div className='App'>
            {owca}
        </div>
    )
}

export default App