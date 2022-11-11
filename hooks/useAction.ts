import {bindActionCreators} from '@reduxjs/toolkit'
import {useDispatch} from 'react-redux'
import { CartsActions } from '../slices/CartSlice/CartSlice'
import { FiltersActions } from '../slices/filterSlice/filterSlice'
import {ThemeAction} from '../slices/switchThemeSlice/themeSlice'
import {setItems} from '../slices/pizzaSlice/pizzaSlice'

const allActions={
    ...FiltersActions,
    ...CartsActions,
    ...ThemeAction,
    ...setItems,
        
}

export const useAction=()=>{
    const dispatch=useDispatch()
    return bindActionCreators(allActions, dispatch)
}