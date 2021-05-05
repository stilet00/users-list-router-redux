import { useHistory, useParams } from "react-router-dom";
import { useCallback, useState } from "react";
import { DEFAULT_USER } from "../../constants/Constants";

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
      history.push("/Users");
    } else {
      addUser(user);
      history.push("/Users");
    }
  }
  return {
    onInputChange,
    saveCont,
    user,
  };
}
