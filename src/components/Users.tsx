import './users.css';


interface User {
    id: number,
    name: string,
    age: number,
    single: boolean
};

interface UsersProps {
    currentUser?: string,
    usersList?: Array<User>
}

const Users = (props: UsersProps): JSX.Element => {

    //props 
    const { currentUser, usersList } = props;

    //list users Render 
    const listUsersRender = usersList?.map((user: User, index: number): any => {
        return (
            <ul key={index}>
                <li><strong>Name:{' '}</strong>{user.name}</li>
                <li><strong>Age:{' '}</strong>{user.age}</li>
                <li><strong>Single:{' '}</strong>{user.single ? 'Single' : 'Engaged'}</li>
            </ul>
        )
    });


    return (
        <div className={"users-list"}>
            {currentUser ?
                <h3>Current user IS:<strong>{' ' + currentUser}</strong></h3>
                : null}
            {listUsersRender ?
                <div style={{ marginTop: '15px' }}>
                    <h5>Users List:</h5>
                    <div>
                        {listUsersRender}
                    </div>
                </div>
                : null}

        </div>
    )
}

export default Users;