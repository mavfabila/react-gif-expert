import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = ( newCategory ) => {

        // Valida que nosea un valor repetido en el arreglo.
        if( categories.includes( newCategory ) ) {
            alert(`Ya existe el valor ${newCategory}`);
            return;
        }


        // Agrega un nuevo valor al arreglo: categories
        //setCategories( [...categories, 'Nuevo valor'] ); // Agrega el nuevo valor al final.
        setCategories( [newCategory, ...categories] ); // Agrega el nuevo valor al inicio del arreglo.

        // ..otra forma de hacerlo
        //setCategories( cat => [...cat, 'Nuevo valor'] );
    };

    return (
        <>
            <h1>GifExpertApp</h1>

            {/* Llamando un functional component externo (AddCategory->setCategories)
                para agregar el valor. */}
            {/* <AddCategory setCategories={ setCategories } /> */} 


            {/* Sin llamado a un functional component externo: */}
            <AddCategory
                onNewCategory={ (event) => onAddCategory(event) }
            />

            
            {/* Leyendo el arreglo: categories */}
            {
                categories.map( (category ) => (
                    <GifGrid key={ category } category={ category } />
                ))


                // categories.map( (category) => {
                //     return <li key={ category }>{ category }</li>
                // }) 
            }
        

            {/* <button onClick={ onAddCategory }>Agregar categoria</button> */}
        </>
    )
}
