import React from 'react';
import {SidebarContainer} from './styledComponents';
import List from "@mui/material/List";
import {Checkbox, ListItemButton, ListItemIcon, ListItemText, Typography} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {toggleSelectedCategory} from '../../../features/products/productsSlice';

const Sidebar = () => {
  
  const dispatch = useAppDispatch()
  
  const {
    categories,
    selectedCategories
  } = useAppSelector(state => state.products);
  
  const handleSelectedCategories = (categoryName: string) => {
    dispatch(toggleSelectedCategory(categoryName))
  }
  
  return (
    <SidebarContainer>
      <Typography
        sx={{
          textAlign: "left",
          p: 2,
          fontSize: "1.7rem",
          color: "grey.700"
        }}
      >
        Categories
      </Typography>
      
      <List component="div" dense={true} disablePadding>
        {
          categories.map((category, index) => {
            return (
              <ListItemButton
                sx={{
                  pl: 4,
                  py: 0,
                  color: "grey.800",
                  backgroundColor: index % 2 === 0 ? "white" : "grey.100"
                }}
                key={`product-categories-${category}`}
                onClick={() => handleSelectedCategories(category)}
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={selectedCategories.includes(category)}
                    disableRipple
                    id={category}
                  />
                </ListItemIcon>
                <ListItemText primary={category}/>
              </ListItemButton>
            )
          })
        }
      </List>
    </SidebarContainer>
  );
};

export default Sidebar;