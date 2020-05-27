import classes from "./Paginator.module.css";
import React, {useState} from "react";

const Paginator = ({portionSize = 5, ...props}) => {

    let pageCount = Math.ceil(props.totalUsers / props.pageSize);
    const pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    const portionCount = Math.ceil(pageCount/ portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;



    return <div className={classes.wrapperPaginator}>
        {portionNumber > 1 && <button onClick={ () => setPortionNumber(portionNumber - 1) } >PREV</button>}
        {
            pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                return <span className={props.currentPage === p && classes.activePage} onClick={() => {
                    props.onPageClick(p)
                }}>{p}</span>
            })
        }
        {portionCount > portionNumber && <button onClick={ () => setPortionNumber(portionNumber + 1) } >PREV</button>}
    </div>
}
export default Paginator;