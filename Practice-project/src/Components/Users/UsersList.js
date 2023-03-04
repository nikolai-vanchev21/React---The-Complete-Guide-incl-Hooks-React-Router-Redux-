import Card from "../UI/Card";

import styles from "./UsersList.module.css";

const UsersList = (props) => {
  if (props.users.length === 0) return <h2>No users found.</h2>;

  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => {
          return (
            <li key={user.id}>
            {user.username} ({user.age} years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UsersList;
