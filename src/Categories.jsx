const Categories = ({ categories, filterItems }) => {
  return (
    <div className='btn-container'>
      {categories.map((categ) => {
        return (
          <button
            type='button'
            className='btn'
            key={categ}
            onClick={() => filterItems(categ)}
          >
            {categ}
          </button>
        )
      })}
    </div>
  )
}
export default Categories
