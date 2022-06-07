/* eslint-disable no-lone-blocks */
import React from 'react'
import {useState} from 'react'

const Modal = ({ onAdd,type,members, handleEdit }) => {
    const [closeModal,setClose] = useState(false)
    const close =()=>{
        setClose(true)
    };
    const [user, setUsers] = useState({
        name:'',
        adress:'',
        phoneNumber:'',
        year:'',
    });
    const HandleSubmit=()=>{      
        setClose(false)

        {type==='Add'?
        onAdd({...user,id:Math.floor(Math.random()*100000000)})
        :handleEdit(user)}

    };
    const List = (members) =>{
        setUsers(members)
    }   
  return (
     <div>{type==='Add' ?
     <button className="btn" onClick={close} type="button">Thêm Mới</button>:
            <div>Edit<span className="button" onClick= {() =>{
             close()
             List(members)
         }}><i className="ti-marker-alt"></i></span></div>}

            <div className='body-form'>
                <div className='form' style={closeModal ? {display:'block'} : {display:'none'}}>
                    <div className='form-hear'>
                        <h2>Thêm thành viên</h2>
                        <span className="button" onClick={() =>{setClose(false)}}><i className="ti-close"></i></span>
                    </div>
                    <input value = {user.name} onChange ={(e) => setUsers({...user, name:e.target.value})} text="name" placeholder="Nhập vào tên..."></input>
                    <input value = {user.adress} onChange ={(e) => setUsers({...user, adress:e.target.value})} text="name" placeholder="Nhập vào địa chỉ..."></input>
                    <input value = {user.phoneNumber} onChange ={(e) => setUsers({...user, phoneNumber:e.target.value})} text="name" placeholder="Nhập vào số điện thoại..."></input>
                    <input value = {user.year} onChange ={(e) => setUsers({...user, year:e.target.value})} text="name" placeholder="Nhập vào năm sinh..."></input>
                    {type === 'Add' ?
                    <button className="submit" onClick={HandleSubmit} type="button">ADD</button>:
                    <button className="submit" onClick={HandleSubmit} type="button">Save</button>}

                </div>
            </div>
     </div> 
  )
}
export default Modal;

