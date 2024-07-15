import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ListItemText, List, Drawer, ListItemButton, Grow, Box, Collapse } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { MenuItems } from './MenuItems';
import IconifyIcon from '../Icon';
import { AppLogo } from '../AppLogo';

export const NavigationMenu = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleClick = (item: (typeof MenuItems)['0']) => {
    if (item.children) {
      setOpen(!open);
    } else {
      router.push(item.path);
    }
  };

  const renderMenuItems = (menuItems: typeof MenuItems) => {
    return (
      <>
        <Box paddingY={2} paddingX={4}>
          <AppLogo size="small" />
        </Box>
        {menuItems.map((item, index) => (
          <React.Fragment key={index}>
            <ListItemButton onClick={() => handleClick(item)} sx={{ paddingLeft: 4, gap: 0.5, alignItems: 'center' }}>
              {item.icon && <IconifyIcon icon={item.icon} />}
              <ListItemText primary={item.name} />
              {item.children && (open ? <ExpandLess /> : <ExpandMore />)}
            </ListItemButton>
            {item.children && (
              <Collapse in={open} unmountOnExit>
                <List component="div" disablePadding>
                  {item.children.map((child, idx) => (
                    <ListItemButton key={idx} sx={{ pl: 4 }} onClick={() => router.push(child.path)}>
                      <ListItemText primary={child.name} />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </>
    );
  };

  return (
    <Drawer variant="permanent" sx={{ width: '20%' }}>
      <List>{renderMenuItems(MenuItems)}</List>
    </Drawer>
  );
};
