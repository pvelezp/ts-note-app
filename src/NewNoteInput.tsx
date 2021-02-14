import { FC, useState } from "react";
import { NotesStore } from "./NotesStore";

type NewNoteInputProps = {
    addNote: NotesStore['addNote']
}

export const NewNoteInput: FC<NewNoteInputProps> = ({addNote}) =>{

    const [note, setNote] = useState<string>('');

    const updateNote = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setNote(event.target.value)
    }

    const onAddNoteClick = ()=>{
        addNote(note)
        setNote('')
    }

    return(
        <div>
            <input 
            placeholder="Note"
            name="note"
            value={note}
            type="text"
            onChange={updateNote}
            />
            <button
            onClick={onAddNoteClick}
            >Add note</button>
        </div>
    )
}