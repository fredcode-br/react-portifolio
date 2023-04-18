import styles from './Button.module.css'

function Button({handleClick, text, value, myKey}) {
    
    const submit = (e) => {
        if(value === "all")
            value=""
        handleClick(e, value)
    }

    return (
        <button onClick={submit} value={value} className={styles.btn} key={myKey}>
            {text}
        </button>
    )
}

export default Button