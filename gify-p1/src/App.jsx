import AddCategory from './components/myCategoria';
import GridGif from './components/myGridCategoria';
import ListGroup from './components/myListGroup';
import { useState } from "react";

const App = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null); // ← NUEVO estado

    return (
        <div className="container mt-3 mb-5">
            <h1 className="mb-3">Gif Expert</h1>

            <AddCategory categories={categories} setCategories={setCategories} />

            <h2>Lista de categorías</h2>
            <ListGroup
                items={categories}
                onSelectItem={(category) => setSelectedCategory(category)} // ← NUEVA prop
            />

            {/* Solo muestra el GridGif si se ha seleccionado una categoría */}
            {selectedCategory && (
                <GridGif key={selectedCategory} category={selectedCategory} />
            )}
        </div>
    );
};

export default App;
