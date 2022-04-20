const Categories = ({ categories, filteritems }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filteritems(category)} // Categorize the items based on the category clicked
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
