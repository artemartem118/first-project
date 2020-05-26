import classes from "./Paginator.module.css";
import React from "react";

const Paginator = props => {

    let pageCount = Math.ceil(props.totalUsers / props.pageSize);
    const pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    return <div className={classes.wrapperPaginator}>
        {
            pages.map((p) => {
                return <span className={props.currentPage === p && classes.activePage} onClick={() => {
                    props.onPageClick(p)
                }}>{p}</span>
            })
        }
    </div>
}
export default Paginator;