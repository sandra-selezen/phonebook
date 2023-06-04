import { useSelector } from 'react-redux';
import { selectContacts, selectFilter, selectError, selectFilteredContacts, selectIsLoading } from 'redux/selectors';

export const useContacts = () => useSelector(selectContacts);
export const useFilter = () => useSelector(selectFilter);
export const useFilteredContacts = () => useSelector(selectFilteredContacts);
export const useIsLoading = () => useSelector(selectIsLoading);
export const useError = () => useSelector(selectError);