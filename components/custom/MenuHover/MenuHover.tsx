import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
  } from "@/components/ui/navigation-menu"
  interface IMenuHoverProps {
    children:React.ReactNode, 
    menuTitle :string
  }
const  MenuHover:React.FC<IMenuHoverProps> =({children ,menuTitle})=> {
  return (
    <NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>{menuTitle}</NavigationMenuTrigger>
      <NavigationMenuContent>
        {/* <NavigationMenuLink>Link</NavigationMenuLink> */}
        {children}
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
  )
}

export default MenuHover