import {styled} from "@mui/material";

export const ProductContainer = styled("div")(({theme}) => ({
  width: "300px",
  height: "500px",
  borderRadius: theme.shape.borderRadius * 4,
  overflow: "hidden",
  backgroundColor: theme.palette.grey["200"],
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  
  [theme.breakpoints.up('md')]: {
    height: "420px",
  },
  
}))

export const ProductImageContainer = styled("div")(({theme}) => ({
  position: "relative",
  height: "250px",
  
  [theme.breakpoints.up('sm')]: {
    height: "280px",
  },
}))

export const ProductImage = styled("img")({
  width: "100%",
  height: "100%"
})

export const ImageDetail = styled("div")(({theme}) => ({
  position: "absolute",
  bottom: 0,
  right: 0,
  left: 0,
  zIndex: 1,
  padding: "1rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: theme.spacing(1)
}));

export const Description = styled("div")(({theme}) => ({
  color: theme.palette.grey["700"],
  display: "-webkit-box",
  overflow: "hidden",
  textOverflow: "ellipsis",
  "WebkitLineClamp": "3",
  "WebkitBoxOrient": "vertical",
}))

export const PriceText = styled("div")(({theme}) => ({
  color: theme.palette.primary.main,
}))

export const ImageText = styled("div")(({theme}) => ({
  color: "white",
  fontSize: "0.75rem",
  
  [theme.breakpoints.up('sm')]: {
    fontSize: "0.85rem",
  },
  
  [theme.breakpoints.up('lg')]: {
    fontSize: "1rem",
  },
}))

export const GradiantOverlay = styled("div")({
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 33.15%, #000000 79.63%)",
  zIndex: 0,
});

export const ProductCardFooter = styled("div")(({theme}) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const ProductDetail = styled("div")(({theme}) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(1),
  justifyContent: "space-between",
  gap: theme.spacing(1)
}));