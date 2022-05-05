import { useState, KeyboardEvent } from "react";
import { Container } from "./style";

interface AreaProps{
    onEnter(nameTask:string):void;
}

export function Addarea<Props>({onEnter}:AreaProps){

    function handleKeyUp(e:KeyboardEvent){
        if(e.code == 'Enter' && inpuText != ''){
            onEnter(inpuText);
            setInpunText('');
        }
    }
    function handleClick(){
        if(inpuText!=''){
            onEnter(inpuText);
            setInpunText('')
        }
    }
    

    const [inpuText, setInpunText] = useState('');

    return(
        <Container>
            <button type="button" onClick={handleClick}>➕</button>
            <input type="text"
              placeholder="Digite sua tarefa aqui..."
              value={inpuText}
              onChange={e=>setInpunText(e.target.value)}
              onKeyUp={handleKeyUp}

            />
        </Container>
    )
}