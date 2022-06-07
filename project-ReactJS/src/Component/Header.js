import Modal from './Modal';
import {useState} from 'react'
function Header(props){
    const [userText, setUserText] = useState('');
    
    return(       
        <div className="heading">
            <h1> Danh Sách Quản Lý Thành Viên</h1>
            <div className="nav">
                <input text="name"  onChange ={(e) => setUserText( e.target.value)} placeholder="Tìm kiếm tên..."></input>
                <span onClick ={() => {
                    props.search(userText)
                }}><i className="ti-search"></i></span>                 
                <Modal {...props}/>
            </div>
            
        </div>
            
    )
}
export default Header;