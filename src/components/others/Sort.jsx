import { Button, Menu, MenuButton, MenuItemOption, MenuList, MenuOptionGroup } from "@chakra-ui/core";
import { useRecoilState, useRecoilValue } from "recoil";
import { orderOptions, sortMode } from "../../recoil/state";

export default function Sort() {
  const [sort, setSort] = useRecoilState(sortMode);
  const options = useRecoilValue(orderOptions);

  return (
    <Menu closeOnSelect={true}>
      <MenuButton as={Button} variantColor="bluex" rightIcon="chevron-down" size="md">
        {sort}
      </MenuButton>
      <MenuList w="80px" placement="bottom-end">
        <MenuOptionGroup defaultValue="asc" value={sort} title="Order" type="radio" onChange={(val) => setSort(val)}>
          {options.map((option) => (
            <MenuItemOption value={option} key={option}>
              {option}
            </MenuItemOption>
          ))}
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
}
