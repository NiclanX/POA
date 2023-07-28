import React, { useState } from 'react'

export const Navbar = () => {

  const [name, setName] = useState('Nicardo Lannaman')
  return (
    <div className="sidebar">
      <div className="user-info">
        
        <h3>{name}</h3>

      </div>
    <ul className='sidenav'>     
          <li>         
              <a href="/dashboard">Main Dashboard</a>            
          </li>
          <li>          
            <a href="/notes">Notes</a>            
          </li>
          <li>         
              <a href="/budgets">Bugets</a>            
          </li>
          <li>          
            <a href="/actionplans">Action Plans</a>            
          </li>
          <li>          
            <a href="/settings">Settings</a>            
          </li>
    </ul>
   </div>
  )
}
