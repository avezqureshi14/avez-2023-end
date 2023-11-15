import React from 'react'
import mongo from '../../assets/image/mongo.png'
import express from '../../assets/image/exp.png'
import react from '../../assets/image/react-removebg-preview.png'
import node from '../../assets/image/node.png'
import { Link } from 'react-router-dom'
const Category = () => {
  return (
    
    <div className="blog_Recent reactCat">
                    <div className="heading reactGrid">
                        <div className="reactCol">
                        <Link to='/mongodb' >
                        <div className="reactImage mongo">
                        <img src={mongo} alt=""/>
                        </div>
                        </Link>
                        <Link to='/express' >
                        <div className="reactImage exp">
                        <img src={express} alt=""/>
                        </div>
                        </Link>
                        </div>
                        <div className="reactCol">
                        <Link to='/reactjs' >
                        <div className="reactImage">
                        <img src={react} alt=""/>
                        </div>
                        </Link>
                        <Link to='/nodejs' >
                        <div className="reactImage nodeCat">
                        <img src={node} alt=""/>
                        </div>
                        </Link>
                        </div>
                      
                    </div>
                    

                </div>
    
  )
}

export default Category