import React from 'react';
import PetShop from './PetShop'



function App () {
  const handleClick = () => {
    console.log('Shower starting...');
  }

  return (
    <PetShop 
      dogs={2}
      customerName="PL"
      onClick={handleClick}
      status="done"
    />
  )
}

export default App;