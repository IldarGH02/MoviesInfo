import { ChangeEventHandler, FC } from "react"
import Form from 'react-bootstrap/Form';

interface ISelect {
    categories: string[]
    options: ChangeEventHandler
    value: string
}

const Selects: FC<ISelect> = ({categories, options, value}) => {
    return (
        <Form.Select name="категории" id="select" onChange={options} value={value} size="sm">
            {categories.length > 0 ? categories.map((category: string) => {
                return <option key={(Math.random() + 100 * 2 - 30 )} value={category}>{category}</option>}) 
                
            : <></>}
        </Form.Select>
    )
}

export default Selects