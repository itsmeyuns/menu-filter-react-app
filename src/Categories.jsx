function Categories({ filterItems, items }) {
  const categories = ["all", ...new Set(items.map((e) => e.category))];

  return (
    <>
      {categories.length > 1 && (
        <div className="categories">
          {categories.map((e, i) => {
            return (
              <button className="btn" key={i} onClick={() => filterItems(e)}>
                {e}
              </button>
            );
          })}
        </div>
      )}
    </>
  );
}

export default Categories;
