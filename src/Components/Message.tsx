export type MessageProps = {
    user: string;
    text: string;
}

export default function Message(props: MessageProps) {
    return (
        <div className={"message"}>
            <span>{props.user}</span>
            <p>{props.text}</p>
        </div>
    );
}