import { RiUserSearchFill } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { useFilter } from "hooks/hooks";
import { setFilter } from 'redux/filterSlice';
import { Input, FormLabel, Icon, FormControl } from "@chakra-ui/react";

export const Filter = () => {
  const filter = useFilter();
  const dispatch = useDispatch();

  const handleFilter = (event) => {
    dispatch(setFilter(event.target.value.toLowerCase()));
  };

  return (
    <FormControl marginBottom={'24px'}>
      <FormLabel><Icon as={RiUserSearchFill} mr={'8px'} /> Find contact by name </FormLabel>
      <Input value={filter} onChange={handleFilter} autoComplete="off" />
    </FormControl>
  )
}