import React, { createContext, useState } from 'react';

const FodaContext = createContext();

const FodaContextProvider = ({ children }) => {

  const [form, setForm] = useState([]);
  
  
 
  const updateCache = (array) => {
    const fodaJson = JSON.stringify(array)
    if (array.length !== 0) { localStorage.setItem("FODA", fodaJson) } 
  }
  
  updateCache(form);

  const handleChange = (e) => {
   // console.log(e.target.value)
  };

 const takeFodaToContext = () =>{

updateCache(form)
 }

 /*

  const removeItem = (id) => {
    const result = compra.filter(el => el.id !== id);
    setCompra(result);
    updateCacheRemove(result)
  }

  const clear = () => {
    setCompra([]);
    localStorage.removeItem("Compra")
  }

  const isInCart = (item) => {
    const found = compra.find(el => el.id == item.id);
  }
*/

  const cargarFodaDeLocalStorage = () => {

    let storageFoda = JSON.parse(localStorage.getItem("FODA"));
    if (localStorage.getItem("FODA") !== null) { setForm(storageFoda) };
  }

  const data = { handleChange,  cargarFodaDeLocalStorage, takeFodaToContext, form, setForm, }

  return (
    <FodaContext.Provider value={data}>
      {children}
    </FodaContext.Provider>
  )
}

export { FodaContextProvider };
//exporto contexto
export default FodaContext;


