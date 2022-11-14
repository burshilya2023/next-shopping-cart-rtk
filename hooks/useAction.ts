import {bindActionCreators} from '@reduxjs/toolkit'
import {useDispatch} from 'react-redux'
import { CartsActions } from '../slices/cartSlice/CartSlice'
import { FiltersActions } from '../slices/filterSlice/filterSlice'
import { FavoriteAction } from '../slices/favoriteSlice/favoriteSlice'
import {ThemeAction} from '../slices/switchThemeSlice/themeSlice'
import {setItems} from '../slices/pizzaSlice/pizzaSlice'

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