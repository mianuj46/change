import './Expenseitem.css'
import './Expensedate.css'
function Expenseitem(props){
    const month= props.expensedate.toLocaleString('en-US',{month:'long'});
    const day=props.expensedate.toLocaleString('en-US',{day:'2-digit'})
    const year=props.expensedate.getFullYear()
    const handleClick=(e)=>{
        e.target.parentNode.remove()
    }
    const change=()=>{
         var ch=document.getElementById('tex')
         ch.innerHTML="100$"
    }
  

    return (
        <div className='expense-item'>

            <div className='expense-date'>
                <div className='expense-date_month'>{month}</div>
                <div className='expese-date_day'>{day}</div>
                <div className='expense-date_year'>{year}</div>
            </div>
            <div className='expense-item_discription'>
                <h2>{props.LocationOfExpenditure}</h2>
                <div className='expense-item_price' id="tex">{props.expenseamount}</div>
                <button onClick={change}>Add</button>
            
            </div>
            <button onClick={handleClick}>Delete</button>
        </div>
    )
}
export default Expenseitem;