import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../Redux/user/userAction";
const HttpReqWithRedux = () => {
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { loading, data, error } = userData;
  console.log(userData);

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  const handelUser = () => {
    if (loading) {
      return <p>Loading......</p>;
    }
    if (!loading && error) {
      return <p>{error}</p>;
    }
    if (!loading && !error && data) {
      console.log(data);
      return data.map((i) => {
        return (
          <div key={i.id}>
            <h3>{i.name}</h3>
          </div>
        );
      });
    }
  };

  return <div>{handelUser()}</div>;
};

export default HttpReqWithRedux;
