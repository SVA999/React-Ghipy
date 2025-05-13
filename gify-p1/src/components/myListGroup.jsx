import { useState } from "react";

const ListGroup = ({ items, onSelectItem, onDeleteItem }) => {
    const [selectedIndex, setSelectedIndex] = useState(-1);


    //Seleccion
    const handleClick = (index) => {
        if (index === selectedIndex) {
            // Si el elemento clicado ya estaba seleccionado, lo deseleccionamos
            setSelectedIndex(-1);
            if (onSelectItem) {
                onSelectItem(null);
            }
        } else {
            // Si es un elemento diferente, selecciona normalmente
            setSelectedIndex(index);
            if (onSelectItem) {
                onSelectItem(items[index]);
            }
        }
    };

    //Eliminacion
    const handleDeleteClick = (index) => {

        if (onDeleteItem) {
            onDeleteItem(index);
        }
        if (selectedIndex === index) {
            setSelectedIndex(-1);
        }
        if (selectedIndex > index) {
            setSelectedIndex(selectedIndex - 1);
        }
    };

    return (
        <div className="mt-3">
            {items.length === 0 ? "No hay elementos" : null}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        className={
                            selectedIndex === index
                                ? "list-group-item d-flex justify-content-between align-items-center active"
                                : "list-group-item d-flex justify-content-between align-items-center"
                        }
                        key={item}
                        onClick={() => handleClick(index)}
                    >
                        {item}
                        <button
                            className="btn btn-danger btn-sm" // Clases de Bootstrap para botn rojo pequeo
                            onClick={(e) => {
                                e.stopPropagation(); // Evita que el clic en el botn active el clic del li
                                handleDeleteClick(index);
                            }}
                        >
                        <i className="bi bi-trash"></i>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListGroup;
