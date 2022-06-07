import Modal from './Modal.js';
import ModalConfirm from './ModalConfirm.js';
export const member =[
    {
        id:'1',
        name: 'Đặng Thạch Sơn',
        adress:'Bắc Ninh',
        phoneNumber: '0347246199',
        year: '2000',

    },
    {
        id:'2',
        name: 'Nguyễn Đức Tư',
        adress:'Nghệ An',
        phoneNumber: '0345655717',
        year: '2000' 
    },
    {
        id:'3',
        name: 'Vũ Tiến Chất',
        adress:'Nam Định',
        phoneNumber: '0312246199',
        year: '2000' 
    },
    {
        id:'4',
        name: 'Vũ Xuân chiến',
        adress:'Hà Nội',
        phoneNumber: '0345655717',
        year: '1999' 
    },
    {
        id:'5',
        name: 'Trần Ngọc Hùng',
        adress:'Hà Nội',
        phoneNumber: '0345655717',
        year: '1998' 
    },
    {
        id:'6',
        name: 'Vũ quyền',
        adress:'Phú Thọ',
        phoneNumber: '0345655717',
        year: '1999' 
    },
    {
        id:'7',
        name: 'Quang Huy',
        adress:'Bắc Giang',
        phoneNumber: '0345655717',
        year: '2000' 
    },
]

function Content(props){
    
    return(
        <div className="content">
            <table border="1">
                <tbody>
                <tr>
                    <th>ID</th>
                    <th>UserName</th>
                    <th>Address</th>
                    <th>PhoneNumber</th>
                    <th>Year</th>
                    <th colSpan="2">Action</th>
                </tr>
                <ContentTable
                {...props} 
                />
                </tbody>
            </table>
            
        </div>
)
}
function ContentTable({member, handleDelete, handleEdit}){
    return(
        member.map((members,index) =>{   
            return(
                <tr key= {index} className="data">
                    <td className="ID">{index}</td>
                    <td>{members.name}</td>
                    <td>{members.phoneNumber}</td>
                    <td>{members.adress}</td>
                    <td>{members.year}</td>
                    <td>
                        <ModalConfirm 
                        members = {members}
                        handleDelete = {handleDelete}
                        />
                    </td>
                    <td>
                        <Modal
                        members = {members}
                        handleEdit = {handleEdit}/>
                    </td>
                </tr>
                
            )
        })
    )
}
export default Content;
