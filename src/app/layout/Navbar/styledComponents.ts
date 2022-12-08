import {styled} from "@mui/system";
import {Link as RouterLink} from "react-router-dom";

export const StyledRouterLink = styled(RouterLink)(({theme}) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main
}));