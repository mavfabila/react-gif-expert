import { useState } from 'react';

export const AddCategory = ( {onNewCategory} ) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue( event.target.value ); // El valor que se teclee, se asigna al input.
    }

    const onSubmit = (event) => {
        event.preventDefault();

        const inputReceived = inputValue.trim();

        if( inputReceived.length === 0 ) return; // Esto evita que se agreguen valores en blanco.

        // Agrega el valor ingresado en el INPUT al arreglo categories.
        // setCategories( categories => [inputValue, ...categories] );
        onNewCategory( inputReceived );

        // Limpia el input despues de agregar el nuevo valor al arreglo.
        setInputValue('');
    }

    return (
        <form onSubmit={ (event) => onSubmit(event) }>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}
