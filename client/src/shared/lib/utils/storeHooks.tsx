import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../app/store/store';

export const useMySelector: TypedUseSelectorHook<RootState> = useSelector;

export const useMyDispatch: () => AppDispatch = useDispatch;
