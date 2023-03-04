import UserForm from "./UserForm";
import styles from "./NewUser.module.css";
import Card from "../UI/Card";

const NewUser = (props) => {
  const saveUserDataHandler = (entereUserData) => {
    props.onAddUser(entereUserData);
  };

  return (
    <Card>
      <UserForm  onSaveUserData={saveUserDataHandler}></UserForm>
    </Card>
  );
};

export default NewUser;
