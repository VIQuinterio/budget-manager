import { useState, useEffect } from 'react';
import styles from './Message.module.css';

function Message({type, msg}) {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if (!msg) {
            setVisible(false)
            return
        }
        
        setVisible(true)

        const timer = setTimeout(() => {
            setVisible(false)
        }, 3000)

        return () => clearTimeout(timer)
    }, [msg])

    return (
        <div>
            {visible && (
                <div className={`${styles.message} ${styles[type]}`}>
                    <h1>{msg}</h1>                    
                </div>
            )}
        </div>        
    );
}

export default Message;