import { useState } from "react";

const ListGroup = ({ items, onSelectItem }) => {
    const [selectedIndex, setSelectedIndex] = useState(-1);

    const handleClick = (index) => {
        setSelectedIndex(index);
        onSelectItem(items[index]); // ← Notifica al componente padre
    };

    return (
        <div className="mt-3">
            {items.length === 0 ? "No hay elementos" : null}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        className={
                            selectedIndex === index
                                ? "list-group-item active"
                                : "list-group-item"
                        }
                        key={item}
                        onClick={() => handleClick(index)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListGroup;
