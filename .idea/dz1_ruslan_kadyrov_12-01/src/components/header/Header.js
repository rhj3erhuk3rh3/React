import classes from './header.module.css';


export const Header = () => {
    
    return (
        <ul className={classes.header} >
            <li className={classes.link}> Home </li>
            <li className={classes.link}> About </li>
            <li>Contacts</li>
        </ul>
    )
}