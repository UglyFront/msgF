import { useSelector } from "react-redux";

function Msg(props) {


if (props.idsend === useSelector(state => state.user.id)) {
    return (
        <div className="msg">
             <p className = "my">{props.text}</p>
        </div>
        )
}

else {
    return (
        <div className="msg_not">
            <p className = "my_not">{props.text}</p>
       </div>
        )
}
  }
  
  export default Msg;