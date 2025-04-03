import React, { useEffect, useState } from 'react'
import axios from 'axios';



const EjemploAxios = () => {

    const [resultado, setResultado] = useState([]);
    const [muestraSpinner, setMuestraSpinner] = useState(false);

    useEffect( () => {
        setMuestraSpinner(true);
        consultaPOST().then( ()=> setMuestraSpinner(false));

        

    }, []); 

    async function consultaPOST () {
        // Make a request for a user with a given ID
        await axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) {
                // handle success
                console.log(response);
                setResultado( response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
        }    

    
    //    console.log( resultado );
    

  return (
    <>
        <div>
            {muestraSpinner? <img src="./assets/rotate.svg" /> : null}
            
        </div>
        <div>
        {resultado&&resultado.map((post) => (
                    <li key={post.id}> {post.title} </li>
                ))}
        </div>
    </>
  )
}

export default EjemploAxios
