import { useState } from "react";
// Importa el hook useState de React, que permite manejar el estado dentro de un componente funcional.

const AddCategory = ({ categories, setCategories }) => {
    // El componente recibe dos props:
    // 'categories' es el array de categor�as existentes.
    // 'setCategories' es la funci�n para actualizar dicho array.

    const [searchValue, setSearchValue] = useState("");
    // useState define una variable de estado llamada 'searchValue' (valor del input) y su funci�n de actualizaci�n 'setSearchValue'.
    // Inicialmente, 'searchValue' es un string vac�o.

    const onInputChange = (event) => setSearchValue(event.target.value);
    // Funci�n manejadora que actualiza 'searchValue' con el valor del campo de entrada cuando el usuario escribe.

    const onCategorySubmit = () => {
        // Funci�n que se ejecuta cuando el usuario hace clic en el bot�n "Agregar".

        if (searchValue.trim().length <= 0) return;
        // Si el valor de 'searchValue' es muy corto (menos de 2 caracteres) se cancela la ejecuci�n de la funci�n.

        if (categories.includes(searchValue.trim())) return;
        // Si la categor�a ya existe en el array 'categories', se evita agregarla duplicada.

        setCategories((categories) => [...categories, searchValue.trim()]);
        // Se actualiza el array 'categories' a�adiendo la nueva categor�a.
        // Utiliza la funci�n de actualizaci�n 'setCategories' para agregar 'searchValue' al array sin modificar el original.

        setSearchValue("");
        // Despu�s de agregar la nueva categor�a, se reinicia el campo de texto (se vac�a).
    };

    return (
        <div className="input-group mt-3">
            <input
                aria-label="Recipient's username with two button addons"
                className="form-control"
                placeholder="Dragon Ball"
                type="text"
                value={searchValue}
                onChange={onInputChange}

                onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                        event.preventDefault(); // Evita la acción predeterminada del Enter en el input
                        onCategorySubmit(); // Llama a la misma función del botón
                    }
                }}

            // Input controlado: su valor est� vinculado a 'searchValue' y cada vez que el usuario escribe, 'onInputChange' actualiza el estado.
            />

            <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={onCategorySubmit}
            // Al hacer clic en el bot�n, se ejecuta 'onCategorySubmit' para intentar agregar la nueva categor�a.
            >
                Agregar
            </button>
        </div>
    );
};

export default AddCategory;