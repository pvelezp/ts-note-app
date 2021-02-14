import { createContext, useContext } from 'react'
import {NotesStore} from './NotesStore'

type RootStateContextValue = {
    notesStore: NotesStore
}

const RootStateContext = createContext<RootStateContextValue>({} as RootStateContextValue)


export const RootStateProvider: React.FC<React.PropsWithChildren<{}>> = ({children})=> {
    
    const notesStore = new NotesStore()
    return (
        <RootStateContext.Provider
        value={{notesStore}}
        >
            {children}
        </RootStateContext.Provider>
    )
}

export const useRootStore = () => useContext(RootStateContext)