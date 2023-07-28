import React from 'react'

export const Navbar = () => {
  return (
    <div className="sidebar">
    <h3>Organizer... I guess</h3>
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
