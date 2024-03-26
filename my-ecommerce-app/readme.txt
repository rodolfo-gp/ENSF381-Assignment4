The process of importing necessary files and functions proceeded as follows:

Initially, via the terminal, we installed the required packages by executing the commands:

npm install react-scripts
npm install react-router-dom


Next, within our project, we imported various functions from the react-router-dom package, 
facilitating navigation functionalities. 


Additionally, we imported additional files as needed :
import React from 'react';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Header from './Header';
import HomeMainSection from './HomeMainSection';
import Footer from './Footer';
import ProductItem from './ProductItem';
import product from '../data/products';
import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import './App.css';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Productpage from './components/Productpage';
import Loginpage from './components/Loginpage';
import CartItem from './CartItem';
import reviews from '../data/reviews';
