export const getGifs = async( category ) => {

    // API KEY de Giphy: CpDya6nkbAoI0Om1RBj3RHFHq6SZ6Ed3

    const url = `https://api.giphy.com/v1/gifs/search?api_key=CpDya6nkbAoI0Om1RBj3RHFHq6SZ6Ed3&limit=10&q=${category}`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({

        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;

}