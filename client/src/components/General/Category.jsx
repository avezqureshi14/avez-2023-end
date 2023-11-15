import React from 'react'
import ExistingCat from './ExistingCat'
import CreateCat from './CreateCat'
import HNav from '../Home/HNav'

const Category = () => {
  return (
    <>
    <HNav/>
    <main>
        <div className="space1">

        </div>
        <div className="articleSpace2">
            <ExistingCat/>
            <CreateCat/>
        </div>
        <div className="space3">

        </div>
    </main>
    </>
  )
}

export default Category