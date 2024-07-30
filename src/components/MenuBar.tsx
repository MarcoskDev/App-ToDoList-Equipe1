import React from "react";
import "../styles/MenuBar.css";

const MenuBar: React.FC = () => {
   return (
      <div className="menu-bar">
         <div className="logo-circle"></div>
         <nav>
            <ul>
               <li>Início</li>
               <li>Sobre</li>
            </ul>
         </nav>
      </div>
   );
};

export default MenuBar;
