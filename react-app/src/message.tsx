
// É importante nomear as funções com letras maiúsculas
// para que o React as reconheça como componentes
function Message () {
    // JSX: JavaScript XML
    // É uma sintaxe que permite escrever HTML dentro do JavaScript
    const name = 'Erick';

    if (name) 
        return <h1>Hello, {name}</h1>
    return <h1>Hello, World</h1>;
}

export default Message;