import {styled} from "@mui/system";

export const StyledContainer = styled("div")(({theme}) => ({
  display: "flex",
  width: "100%"
}));

export const SidebarContainer = styled("div")(({theme}) => ({
  width: "300px",
}));

export const ProductsContainer = styled("div")(({theme}) => ({
  flex: 1,
  display: "flex",
  justifyContent: "center",
  gap: theme.spacing(6),
  flexWrap: "wrap",
  padding: theme.spacing(4)
}));