import { Image } from '@chakra-ui/react'

const Avatar = () => {
    return (
        <Image
            borderRadius="5px"
            boxSize="150px"
            src="https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTc2MjQ5NTYwNTQzMzQwNDIz/netflix-needs-to-keep-the-smoking-in-their-live-action-adaptation-of-cowboy-bebop.jpg"
            alt="Cowboy Bebop"
            display="inline-block"
        />
    )
}

export default Avatar