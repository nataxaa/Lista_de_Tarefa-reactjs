import { useState } from "react";
import { Item } from "../../types/item";
import { Container } from "./style";



interface ListTask{
    item:Item;
}

export function ListItem<Props>({item}:ListTask){

    const [isCheked, setIsCheked] = useState(item.done);

    return(
        <Container done={isCheked}>
            <input 
             type="checkbox"
             checked={isCheked}
             onChange={e => setIsCheked(e.target.checked)}
             />
            <label>{item.name}</label>
        </Container>
    )
}