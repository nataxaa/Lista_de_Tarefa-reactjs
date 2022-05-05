import { useState } from "react";
import { Area, Container, Header } from "./style";
import {Item} from '../../types/item'
import { ListItem } from "../Listitem";
import { Addarea } from "../AddArea";

export function Dashboard(){
    
    const [list, setList] = useState<Item[]>([
        {id: 1, name: 'Comprar pao', done: true},
        {id: 2, name: 'Pagar casa', done: false}
    ]);
    console.log(list)
    
    function handleAddTask(nameTask: string){
        let newList = [...list] 
        newList.push({
            id: list.length + 1,
            name: nameTask,
            done: false
        })
        setList(newList)
    }

    return(
        <Area>
            <Header><h1>Lista de Tarefa</h1></Header>
            <Addarea onEnter={handleAddTask}/>
            {list.map((item, index)=>(
                <ListItem key={index} item={item} />
            ))}    
            
        </Area>
        
    )
}
