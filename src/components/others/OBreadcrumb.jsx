import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Icon } from "@chakra-ui/core";
import { useRecoilState } from "recoil";
import { selectedCategory } from "../../recoil/state";

export default function OBreadcrumb() {
  const [catSelected, setCat] = useRecoilState(selectedCategory);
  return (
    <Breadcrumb
      spacing="6px"
      fontWeight="medium"
      fontSize="md"
      separator={catSelected !== "all" ? <Icon color="bluex.400" name="chevron-right" /> : null}
    >
      <BreadcrumbItem isCurrentPage={catSelected === "all"}>
        <BreadcrumbLink onClick={() => setCat("all")}>All Items</BreadcrumbLink>
      </BreadcrumbItem>

      {catSelected !== "all" ? (
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink textTransform="capitalize">{catSelected}</BreadcrumbLink>
        </BreadcrumbItem>
      ) : null}
    </Breadcrumb>
  );
}
