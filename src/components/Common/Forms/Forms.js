import React from "react";
import styles from "./Forms.module.css"

export const Textarea = ({input, meta, ...props}) => {

    const hasError = meta.error && meta.touched;

    return (
      <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
          <div>
              <textarea {...props} {...input} />
          </div>
          {hasError && <span>{meta.error}</span>}
      </div>
    );
}
export const Input = ({input, meta, ...props}) => {

    const hasError = meta.error && meta.touched;

    return (
      <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
          <div>
              <input {...props} {...input} />
          </div>
          {hasError && <span>{meta.error}</span>}
      </div>
    );
}