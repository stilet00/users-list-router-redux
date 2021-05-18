import React from "react";
import { connect } from "react-redux";
import { useList } from "./hooks";
import SingleUser from "../SingleUser/SingleUser";
import "./UserList.css";
import { deleteUser, fetchUsers } from "../../../store/users/thunks";
import { useLazyLoading } from "../../../common/hooks";
import Loader from "../../../components/Loader/Loader";

function UsersList({ users, deleteUser, fetchUsers }) {
  useList(fetchUsers);
  const { currentRender, handleScroll } = useLazyLoading(users);
  const userList = users ? (
      <div className={"users-container"} onScroll={handleScroll}>
          {users.slice(0, currentRender).map((item) => (
              <SingleUser
                  key={item.id}
                  {...item}
                  onDelete={(id) => deleteUser(id)}
              />
          ))}
      </div>
  ) : <Loader />
  return (
    <div className={"users-list container"}>
        {userList}
    </div>
  );
}
const mapStateToProps = ({ users }) => ({ users: users.users });
const mapDispatchToProps = (dispatch) => ({
  deleteUser: (id) => dispatch(deleteUser(id)),
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
