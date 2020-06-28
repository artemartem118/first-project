import styles from './Paginator.module.scss'
import React, {useState} from 'react'
import cn from 'classnames'
import Button from '../Button/Button'

type Props = {
    portionSize?: number
    totalItems: number
    pageSize: number
    currentPage: number
    onPageClick: (p: number) => void
}


const Paginator: React.FC<Props> = ({portionSize = 5, totalItems, pageSize, currentPage, onPageClick}) => {

    let pageCount = Math.ceil(totalItems / pageSize)
    const pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pageCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize


    return <div className={styles.paginator}>
        {portionNumber > 1 && <Button handleClick={() => setPortionNumber(portionNumber - 1)} name={'Prev'}/>}
        <div className={styles.pageWrapper}>
            {
                pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(p => {
                        return <span key={p} className={cn({
                            [styles.activePage]: currentPage === p
                        }, styles.paginator__page)} onClick={() => {
                            onPageClick(p)
                        }}>{p}</span>
                    })
            }
        </div>

        {portionCount > portionNumber &&
        <Button handleClick={() => setPortionNumber(portionNumber + 1)} name={'Next'}/>}
    </div>
}
export default Paginator