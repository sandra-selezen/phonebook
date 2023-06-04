import { RiUserSearchFill } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { useFilter } from "hooks/hooks";
import { setFilter } from 'redux/filterSlice';
import { Input, Text, Icon } from "@chakra-ui/react";

export const Filter = () => {
  const filter = useFilter();
  const dispatch = useDispatch();

  const handleFilter = (event) => {
    dispatch(setFilter(event.target.value.toLowerCase()));
  };

  return (
    <>
      <Text><Icon as={RiUserSearchFill} /> Find contact by name </Text>
      <Input value={filter} onChange={handleFilter} autoComplete="off" />
    </>
  )
}