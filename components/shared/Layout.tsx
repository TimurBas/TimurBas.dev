import NavigationBar from "../navigation/NavigationBar"
import { Box, Center } from "@chakra-ui/react"
import { ReactNode } from "react"

type LayoutProps = {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <Box>
            <NavigationBar />
            <Center>{children}</Center>
        </Box>
    )
}

export default Layout