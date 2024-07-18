import React, { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { ListItemText, List, Drawer, ListItemButton, Collapse, Box, styled } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { MenuItems } from './MenuItems';
import IconifyIcon from '../Icon';
import { AppLogo } from '../AppLogo';

type MenuItemType = (typeof MenuItems)[number];

export const NavigationMenu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (item: MenuItemType) => {
    if (item.children) {
      setOpen(!open);
    } else {
      router.push(item.path);
    }
  };

  const isActive = (path: string) => pathname === '/' + path;

  const renderMenuItems = (menuItems: MenuItemType[]) => {
    return (
      <>
        <Box paddingY={2} paddingX={4}>
          <AppLogo size="small" />
        </Box>
        {menuItems.map((item, index) => (
          <Box key={index}>
            <ListItemButton
              onClick={() => handleClick(item)}
              sx={{
                paddingLeft: 4,
                gap: 0.5,
                alignItems: 'center',
                backgroundColor: isActive(item.path) ? 'primary.main' : 'transparent',
                color: isActive(item.path) ? 'primary.contrastText' : 'inherit',
                '&:hover': {
                  backgroundColor: isActive(item.path) ? 'primary.main' : '',
                },
              }}
            >
              {item.icon && <IconifyIcon icon={item.icon} />}
              <ListItemText primary={item.name} sx={{ color: 'inherit' }} />
              {item.children && (open ? <ExpandLess /> : <ExpandMore />)}
            </ListItemButton>
            {item.children && (
              <Collapse in={open} unmountOnExit>
                <List component="div" disablePadding>
                  {item.children.map((child, idx) => (
                    <ListItemButton
                      key={idx}
                      sx={{ pl: 4 }}
                      onClick={() => router.push(child.path)}
                      style={{
                        backgroundColor: isActive(child.path) ? 'primary.main' : 'transparent',
                        color: isActive(child.path) ? 'primary.contrastText' : 'inherit',
                      }}
                    >
                      <ListItemText primary={child.name} />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            )}
          </Box>
        ))}
      </>
    );
  };

  return (
    <Drawer variant="permanent" sx={{ paddingX: 13 }}>
      <List sx={{ position: 'relative' }}>{renderMenuItems(MenuItems)}</List>
    </Drawer>
  );
};
