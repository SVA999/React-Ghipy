import AddCategory from './components/myCategoria';
import GridGif from './components/myGridCategoria';
import ListGroup from './components/myListGroup';
import { useState } from "react";

const App = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    //eliminar una categora por su ndice
    const handleCategoryDelete = (indexToDelete) => {
        const updatedCategories = categories.filter((_, index) => index !== indexToDelete);
        setCategories(updatedCategories);

        if (selectedCategory === categories[indexToDelete]) {
            setSelectedCategory(null);
        }
    };


    return (
        <div className="container mt-3 mb-5">
            <h1 className="mb-3">Gif Consult</h1>

            <AddCategory categories={categories} setCategories={setCategories} />

            <h2>Lista de categorías</h2>
            <ListGroup
                items={categories}
                onSelectItem={(category) => setSelectedCategory(category)}
                onDeleteItem={handleCategoryDelete}
            />


            {selectedCategory
                ? (
                    // Muestra un GridGif solo para la categoria seleccionada
                    <GridGif key={selectedCategory} category={selectedCategory} />
                )
                : (
                    // Si no hay categora muestra todas las categoras
                    categories.map(category => (
                        <GridGif key={category} category={category} />
                    ))
                )
            }

        </div>
    );
};

export default App;
