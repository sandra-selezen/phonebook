import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectIsRefreshing, selectUser } from 'redux/auth/selectors';
import { selectContacts, selectFilter, selectError, selectFilteredContacts, selectIsLoading } from 'redux/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};

export const useContacts = () => useSelector(selectContacts);
export const useFilter = () => useSelector(selectFilter);
export const useFilteredContacts = () => useSelector(selectFilteredContacts);
export const useIsLoading = () => useSelector(selectIsLoading);
export const useError = () => useSelector(selectError);