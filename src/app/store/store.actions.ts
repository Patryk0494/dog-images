import { Injectable } from '@angular/core';
import { Action, createAction, props } from '@ngrx/store';
import { FavoriteDog } from '../models/favoriteDog.model';

export enum DogsActionType {
  ADD_FAVORITE = '[FAVORITES] Add',
  REMOVE_FAVORITE = '[FAVORITES] Remove',
}

export const addFavorite = createAction(
  DogsActionType.ADD_FAVORITE,
  props<FavoriteDog>()
);
export const removeFav = createAction(
  DogsActionType.REMOVE_FAVORITE,
  props<{ id: number }>()
);
