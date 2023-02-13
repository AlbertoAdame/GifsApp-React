import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {//como no le hemos quitado el otro handleSubmit esto solo lo hará con enter
        e.preventDefault();
        console.log("enviado");
        if (inputValue.trim().length>2) {
            setCategories((cats)=> [ inputValue, ...cats] )
            setInputValue('')
        }
        // setCategories( cats => [...cats, inputValue]); //cats puede ser el nombre que queramos, y de esta forma recibe el valor actual
    }
return (
    
    <form onSubmit={ handleSubmit }>
        <input
            type="text"
            value={ inputValue }
            onChange={ handleInputChange }
            required/>
    </form>
)
}

AddCategory.propTypes = { //esto lo hacemos para que sea obligatorio pasarle el metodo
    setCategories: PropTypes.func.isRequired
}
