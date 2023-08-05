const fetchProducts = async (query) => { //função assincrona que busca uma api externa
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
    const data = await response.json(); //a const data vai armazenar as respostas do json pela pesquisa da api

    return data.results; // retorna na api somente o results, para buscas mais afuniladas.
};

export default fetchProducts; //exporta a função fetchProducts