import React from 'react'
import "./Dictionary.css"
import Navbar from '../../Components/Navbar /Navbar'
import Searchbar from '../../Components/Searchbar/Searchbar'
import DictionaryCard from '../../Components/DictionaryCard/DictionaryCard'
import Footer from '../../Components/Footer/Footer'
import Footer2 from '../../Components/Footer2/Footer2'

function Dictionary() {
  return (
    <div >
      <Navbar/>
      <h1 className='div2'>Dictionary & Phrases</h1>
      <div className="container">
        <h1>Search Words & Phrases</h1>
        <h3>Look up words and phrases in our comprehensive dictionary</h3>
        <Searchbar/>
      </div>
      <DictionaryCard/>
      <Footer/>
      <Footer2/>
      
    </div>
  )
}

export default Dictionary
