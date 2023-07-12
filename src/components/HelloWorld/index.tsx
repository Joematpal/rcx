export interface HelloWorldProps {
    text: string
}

export const HelloWorld: React.FC<HelloWorldProps> = ({text}) => {
return <div className='text'>This is test text: {text}</div>
}