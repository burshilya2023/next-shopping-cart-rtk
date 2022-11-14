import {bindActionCreators} from '@reduxjs/toolkit'
import {useDispatch} from 'react-redux'
import { FiltersActions } from '../slices/filterSlice/filterSlice'
import { FavoriteAction } from '../slices/favoriteSlice/favoriteSlice'
import {ThemeAction} from '../slices/switchThemeSlice/themeSlice'
import {setItems} from '../slices/pizzaSlice/pizzaSlice'
//@ts-ignore
import { CartsActions } from '../slices/CartSlice/CartSlice'
const allActions={
    ...FiltersActions,
    ...CartsActions,
    ...ThemeAction,
    ...setItems,
    ...FavoriteAction,
        
}

export const useAction=()=>{
    const dispatch=useDispatch()
    return bindActionCreators(allActions, dispatch)
}