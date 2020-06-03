import React from "react";
import styles from "./Forms.module.css"

export const Textarea = ({input, meta : {error, touched}, ...props}) => {

    const hasError = error && touched;

    return (
      <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
          <div>
              <textarea {...props} {...input} />
          </div>
          {hasError && <span>{error}</span>}
      </div>
    );
}
export const Input = ({input, meta : {error, touched}, ...props}) => {

    const hasError = error && touched;

    return (
      <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
          <div>
              <input {...props} {...input} />
          </div>
          {hasError && <span>{error}</span>}
      </div>
    );
}