import React , { useState } from 'react' ;
 import { Text , View , TextInput } from 'react-native' ;    
      

const LoginForm = () => { const [ value , setValue ] = useState ( 0 ); 
    return ( < View >
     < Text > Formulario de inicio de sesión </ Text > 
     < View > < TextInput placeholder = "ingrese su correo electronico:" /> < TextInput 
          secureTextEntry ={ true } 
          placeholder = "Ponga su contraseña: " />
           </ View > 
           </ View > ); };     
    


    export default LoginForm;