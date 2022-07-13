import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

const UserUpdate = () => {

    /*Moi : 
        Declaration d'une variable  d'état que nous appelons user
        Le seul argument à passer au Hook useState est l'état initial
        ici c'est un objet vide
     
        On déclare une variable d'état appelée user et 
        on l'initialise avec un objet vide
        La méthode setUser() sera appelée afin de mettre à jour l'état
        user
    */
    const [user, setUser] = useState({});
    const params = useParams(); // Récupére un objet avec les paramétres
    const id = params.id;
    // const {id} = useParams(); -> version raccourcis avec le décomposition

    const updateUser = (id) => {
        UserService.UserUpdate(id)
            .then(() => {
                let updateUsers = [...users].filter(i => i.id !==id);
                setUsers(updateUsers);
            });
    }

         /*
        Moi : 
        le tableau vide  [] indique que useEffect
        ne s’exécutera qu’une fois
        Ce UseEffect Permet de recuperer les données de l'API
       en appelant la méthode getUser()
       Ce userEffect surveille aucune valeur,  s'execute qu'une fois 
       en appelant la méthode getUser qui charge les données de l'API
       c'est à dire un user
    */
    useEffect(() => {
        getUser();
    }, [])

    return (
        <>
            {(user)?
                <div>
                    <h1>Profil de {user.name}</h1>
                    <p>Email : {user.email}</p>
                </div>
                :
                <p>Nope, rien à voir ici !</p>
            }
        </>
    )
}
export default UserUpdate;
