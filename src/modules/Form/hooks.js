import { useHistory, useParams } from "react-router-dom";
import { useCallback, useState } from "react";
import { DEFAULT_USER } from "../../constants/constants";

export function useForm(users, addUser, editUser) {
  const history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState(
    users.find((item) => id === item.id) || DEFAULT_USER
  );
  let onInputChange = useCallback(
    (e) => {
      setUser({ ...user, [e.target.name]: e.target.value.trim() });
    },
    [user, setUser]
  );
  function saveCont(e) {
    e.preventDefault();
    if (user.id) {
      editUser(user);
    } else {
      addUser(user);
    }
    history.push("/users");
  }
  return {
    onInputChange,
    saveCont,
    user,
  };
}
