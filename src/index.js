import React from 'react';
import ReactDOM from 'react-dom';

const menuItem = {link: '#', title: 'About us', isActive: true}
const menuItem2 = {link: '#', title: 'Contact', isActive: false}

// <NavItem item={menuItem} />

const NavItem = (props) =>
  <a
    className="nav-item"
    style={{color: props.item.isActive ? '#6bb09d' : 'black'}}
    href={props.item.link}>
      {props.item.title}
  </a>
  
  

const App = () => <div>
  <NavItem item={menuItem} />
  <NavItem item={menuItem2} />
</div>
ReactDOM.render(<App />, document.getElementById('root'));