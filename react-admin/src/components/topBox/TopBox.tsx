import "./topBox.scss";
import { topDealUsers } from "../../data";

const TopBox = () => {
  return (
    <div className="topBox">
      <h1>Tool Deals</h1>
      <div className="list">
        {topDealUsers.map((user) => (
          <div className="listItem">
            <div className="user">
                <img src={user.img} alt="" />
                <div className="usersText">
                    <span className="username">{user.username}</span>
                    <span className="email">{user.email}</span>
                </div>
            </div>
            <span className="amount">${user.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBox;
