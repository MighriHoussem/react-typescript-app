import HOCMessage from "./HOC";


const Example = (props: any): any => {
    const { name, message } = props;
    return (
        <>
            <h6>
                <strong style={{ color: 'blue' }}>{name + ' :'}</strong>
                <span>{message}</span>
            </h6>
        </>
    )
}

const Message = HOCMessage(Example);

export default Message;