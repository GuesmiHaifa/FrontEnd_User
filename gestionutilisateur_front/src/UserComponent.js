import UserService from "./service/UserService";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DeleteConfirmation from "./components/DeleteConfirmation";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Alert, Card, Col, Container, Row } from "react-bootstrap";




const UserComponent = () => {
    const [users, setUsers] = useState([]);

    // Set up some additional local state
    const [id, setId] = useState(null);
    const [displayConfirmationModal, setDisplayConfirmationModal] = useState(false);
    const [userMessage, setUserMessage] = useState(null);
    const [deleteMessage, setDeleteMessage] = useState(null);


    // Handle the displaying of the modal based on id
    const showDeleteModal = (id) => {
        setId(id);
        setUserMessage(null);

        setDeleteMessage(`Are you sure you want to delete user '${users.find((u) => u.id === id).lastName} ${users.find((u) => u.id === id).firstName}'?`);

        setDisplayConfirmationModal(true);
    };

    // Hide the modal
    const hideConfirmationModal = () => {
        setDisplayConfirmationModal(false);
    };

    const getUsers = () => {
        UserService.getUsers()
            .then(u => setUsers(u.data));
    }

    const deleteUser = (id) => {
        UserService.deleteUser(id)
            .then(() => {
                setUserMessage(`The User '${users.find((u) => u.id === id).lastName}' was deleted successfully.`);
                let updateUsers = [...users].filter(i => i.id !== id);
                setUsers(updateUsers);
                setDisplayConfirmationModal(false);
            });
    }
    // Handle the actual deletion of the item
    // const submitDelete = (id) => {

    //     setFruitMessage(`The User '${users.find((u) => u.id === id).lastName}' was deleted successfully.`);
    //     setUsers(fruits.filter((user) => user.id !== id));

    //     setDisplayConfirmationModal(false);
    // };


    useEffect(() => {
        getUsers();
    }, []);


    return (
        <>
            <Container className="mt-4">
                <Row>
                    <Col md={{ span: 10, offset: 1 }}>
                        <Card className="mt-2">
                            <Card.Header>Users</Card.Header>
                    {/* <h1 className="text-center">Users List</h1> */}
                                <Card.Body>
                                    {userMessage && <Alert variant="success">{userMessage}</Alert>}
                              
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <td>Id</td>
                                <td>First Name</td>
                                <td>Last Name</td>
                                <td>Email</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map(u =>
                                    <tr key={u.id}>
                                        <td>{u.id}</td>
                                        <td>{u.firstName}</td>
                                        <td>{u.lastName}</td>
                                        <td>{u.email}</td>
                                        <td className='text-center'>
                                            <FontAwesomeIcon icon={faTrash} className="text-danger cursor" onClick={() => showDeleteModal(u.id)} />
                                        </td>
                                        {/* <td>
                                    <button size="sm" color="danger" onClick={() => deleteUser(u.id)}>Delete</button>
                               </td> */}
                                        {/* <td>  
                                    <Button color="link"><NavLink to={'/user/' + u.id} >Update</NavLink></Button>
                                </td> */}
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <DeleteConfirmation showModal={displayConfirmationModal} confirmModal={deleteUser} hideModal={hideConfirmationModal} id={id} message={deleteMessage} />
            </Container>



        </>
    )
}

export default UserComponent;