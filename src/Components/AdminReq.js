import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAdmin } from "../Redux/admin/adminAction";

const AdminReq = () => {
  const adminData = useSelector((state) => state.admin);
  const { loading, data, error } = adminData;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdmin());
  }, []);

  const handlerAdmin = () => {
    if (loading) {
      return <p>Loading...</p>;
    }

    if (!loading && error) {
      return <p>{error}</p>;
    }
    if (!loading && !error && data) {
      return (
        <div>
          {data.map((i) => {
            return (
              <div key={i.id}>
                <h3>{i.email}</h3>
              </div>
            );
          })}
        </div>
      );
    }
  };

  return <div>{handlerAdmin()}</div>;
};

export default AdminReq;
