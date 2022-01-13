import { Injectable } from '@angular/core';
import { Action, createAction, props } from '@ngrx/store';
import { FavoriteDog } from '../models/favoriteDog.model';

export enum DogsActionType {
  ADD_FAVORITE = '[FAVORITES] Add',
  DELETE_FAVORITE = '[FAVORITES] Delete',
  GET_LS = '[LS] Get',
}

export const addFavorite = createAction(
  DogsActionType.ADD_FAVORITE,
  props<FavoriteDog>()
);
export const deleteFavorite = createAction(
  DogsActionType.DELETE_FAVORITE,
  props<{ id: string }>()
);
export const getDataFromLocalStorage = createAction(
  DogsActionType.GET_LS,
  props<{ data: FavoriteDog[] }>()
);
