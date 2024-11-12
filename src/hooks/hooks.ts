import { useDispatch } from 'react-redux';
import { AppDispatch } from '../app/store';

// Create a typed version of useDispatch with AppDispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();