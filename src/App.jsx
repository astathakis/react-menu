import { useState } from 'react'
import Title from './Title'
import menu from './data'
import Menu from './Menu'
import Categories from './Categories'

const tempCateg = menu.map((item) => {
  return item.category
})
// const tempSet = new Set(tempCateg)

// console.log(tempSet)

// const tempItems = ['all', ...tempSet]

const allCateg = ['all', ...new Set(tempCateg)]

console.log(allCateg)

const App = () => {
  const [menuItems, setMenuItems] = useState(menu)
  const [categories, setCategories] = useState(allCateg)

  const filterItems = (category) => {
    console.log(category)
    if (category === 'all') {
      setMenuItems(menu)
      return
    }
    const newItems = menu.filter((item) => {
      return item.category === category
    })
    setMenuItems(newItems)
  }
  return (
    <main>
      <section className='menu'>
        <Title text='our menu' />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}
export default App
