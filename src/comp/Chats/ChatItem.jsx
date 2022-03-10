import Animate from "../Animate";
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { AT } from "../../redux/action";


function ChatItem(props) {
    const dispatch = useDispatch()
    // const user = useSelector(state => state.user)
    

    return (
            <div className="chat_item" onClick={() => {
                dispatch(AT.selectUser(props.idother))
            }}>
                <div className="chat_img">
                    <div className="img" style = {{background: `url(${props.img}) no-repeat center`, backgroundSize: "cover"}}>
                    
                    </div>
                    <div className="line"></div>
                </div>
                <div className="chat_info">
                    <h4>{props.name}</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisi adipisi adipisi adipisi adipisi...</p> 
                    {/* 82 cимволов с ... */}
                </div>
            </div>
    )
  }
  
  export default ChatItem;
  