import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import RecipeDetails from './pages/RecipeDetails'

import './App.css'

//npm run dev
/**
 * The main application component.
 * Manages global navigation state (activePage) and search term.
 */
function App() {

  //a searchben mit keres alapbol chicken
  const [searchRes, setSearchRes] = useState('Chicken')
  //alapbol home page kezeles
  const [activePage, setActivePage] = useState('home')

  const [selectedRecipeId, setSelectedRecipeId] = useState(null)

  const [lastPage, setLastPage] = useState('home')

  const navigateTo = (page, recipeId = null) => {
    if (page === 'details') {
      setLastPage(activePage)
    }
    setActivePage(page)
    if (recipeId) {
      setSelectedRecipeId(recipeId)
    }
  }

  const handleSearch = (res) => {
    setSearchRes(res)   
    setActivePage('home')
  }

  return (
    <Layout onNavigate={navigateTo} activePage={activePage} onSearch= {handleSearch}> 

      {activePage === 'home' && <Home searchRes={searchRes} onRecipeClick={(id) => navigateTo('details', id)} />}

      {activePage === 'favorites' && <Favorites onRecipeClick={(id) => navigateTo('details', id)} />}

      {activePage === 'details' && <RecipeDetails id={selectedRecipeId} onBack={() => navigateTo(lastPage)} />}

    </Layout>
  )

}

export default App
