import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RandomCat from './components/RandomCat';
import RandomCat2 from './components/RandomCat2';
import MediaCard from './components/MediaCard';
import CatList from './components/CatList';


const foo = <RandomCat name="María Moliner" />;

function getCatWithName(name) {
  return <RandomCat name={name} />
}

ReactDOM.render(
  <>
    <MediaCard
      name="Patri la loca"
      date="04 de Septiembre de 2019"
      image="http://lorempixel.com/400/200/cats/"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aspernatur corporis animi, harum sunt earum corrupti, dolores suscipit deleniti ratione ab asperiores vero delectus accusantium aperiam magnam nulla! Architecto, maxime."
      likes={29} />

    <CatList />


    <RandomCat />
    {foo}
    <RandomCat2 />
    {getCatWithName('Patricia')}
  </>
  , document.getElementById('root'));
