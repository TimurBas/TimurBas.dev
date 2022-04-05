import { Box, Image } from '@chakra-ui/react'

const Avatar = () => {
    return (
        <Image
            borderRadius="5px"
            boxSize="250px"
            src="/cowboybebop.png"
            alt="Avatar"
            display="block"
        />
    )
}

export default Avatar