import { Form } from 'react-bootstrap'

interface IPropsInput {
    value: string,
    placeholder: string,
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined,
    className: string,
    onKeyDown: React.KeyboardEventHandler<HTMLInputElement>
}

const Input = (props: IPropsInput) => {
    return (
        <Form.Control value={props.value} placeholder={props.placeholder} onChange={props.onChange} className={props.className} onKeyDown={props.onKeyDown}/>
    )
}

export default Input