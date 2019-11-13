import React from 'react';
import './App.css';
import NavList from './NavList'
const navlistarr=[
  {
    text:'Home',
    link:'#',
    avtive:'true',
   
  },
  {
    text :'Services',
    link:'#',
    avtive:'false',
    list:[
      {
        text: 'For entrepreneurs',
        link: '#'
      },
      {
        text: 'For students',
        link: '#'
      },
      {
        text: 'For hobbyists',
        link: '#'
      }
      ]
  },
  { 
    text:'Contact',
    link:'#',
    avtive:'false',
   
  }
]
function App() {
  return (
    
<ul className="app">
{navlistarr.map((el,index)=><NavList key={index} item={el}/>)}
</ul>
  
  );
}

export default App;
