import './Card.css';

const Card = (props) => {
        //     console.log(props)
        const classes = 'card ' + props.className;
        return (
                <div className={classes}>
                        {props.children}
                </div>
        )
}
export default Card;