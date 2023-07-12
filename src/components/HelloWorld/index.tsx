export interface HelloWorldProps {
    text: string
}

export const HelloWorld = ({ text }: HelloWorldProps) => {
    return <div className="text">This is test text: {text}</div>
}