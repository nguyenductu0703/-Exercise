import React from 'react'
import {useState} from 'react'


const ModalConfirm = ({ members, handleDelete }) => {
    const [closeModal,setClose] = useState(false)
    const close =()=>{
        setClose(true)
    };
    const HandleDelete=()=>{
        handleDelete(members.id)
        setClose(false)
    };
  
  return (
     <div>Delete
         <span className="button" onClick= {() =>{
             close()
         }}><i className="ti-trash"></i></span>
            <div className='body-form-confirm'>
                <div className='form' style={closeModal ? {display:'block'} : {display:'none'}}>
                    <div className='form-hear'>
                        <h2>Bạn có xác nhận xóa hay hay không</h2>
                        <span className="button" onClick={() =>{setClose(false)}}><i className="ti-close"></i></span>
                    </div>
                    <span className="submit" onClick={()=>{HandleDelete()}} type="button">Yes</span>
                    <span className="submit" onClick={() =>{setClose(false)}} type="button">No</span>
                </div>
            </div>
     </div> 
  )
}
export default ModalConfirm;