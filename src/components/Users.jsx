import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `http://localhost:5000/users/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Users has been deleted.",
                icon: "success",
              });
              const remainingUser = users.filter((usr) => usr._id !== _id);

              setUsers(remainingUser);
            }
          });
      }
    });
  };

  return (
    <div className="mt-10 mb-10 container mx-auto bg-[#F4F3F0] rounded-lg">
      <div>
        <div className="overflow-x-auto p-5  ">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Created At</th>
                <th>Last Login At</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users.map((user) => (
                <tr>
                  <th></th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.createAt}</td>
                  <td>{user.lastSignInTime}</td>

                  <td className="flex gap-2">
                    <button className="btn bg-[#D2B48C]">Edit</button>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="btn bg-[#D2B48C]"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
