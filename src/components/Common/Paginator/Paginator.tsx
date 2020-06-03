import classes from './Paginator.module.css'
import React, {useState} from 'react'
import cn from 'classnames'

type Props = {
    portionSize?: number
    totalItems: number
    pageSize: number
    currentPage: number
    onPageClick: (p: number) => void
}


const Paginator: React.FC<Props> = ({portionSize = 5, totalItems, pageSize, currentPage, onPageClick}) => {

    let pageCount = Math.ceil(totalItems / pageSize);
    const pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pageCount/ portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize



    return <div className={classes.wrapperPaginator}>
        {portionNumber > 1 && <button onClick={ () => setPortionNumber(portionNumber - 1) } >PREV</button>}
        {
            pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                return <span key={p} className={cn(  {
                    [classes.activePage]:currentPage === p
                })} onClick={() => {
                    onPageClick(p)
                }}>{p}</span>
            })
        }
        {portionCount > portionNumber && <button onClick={ () => setPortionNumber(portionNumber + 1) } >PREV</button>}
    </div>
}
export default Paginator