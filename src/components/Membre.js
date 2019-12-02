import React, {Fragment} from 'react'

const Membre = ({nom, age, children,hideName,handleChange}) => {
return(
<Fragment>
    <h2 style={{backgroundColor:   age > 18 ? 'purple' : 'red' ,color:'white'}}>{nom.toUpperCase()} : {age}</h2>
    <input type='text' value={nom} onChange={handleChange}/>
    { children ? <p>{children}</p> : <Fragment />}
    <button onClick={hideName}>X</button>
</Fragment>
)
}
export default Membre