import classes from "./Input.module.css";
const Input = props =>{
    return <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input id={props.input.id}{...props.Input}/>
    </div>
};
export default Input;