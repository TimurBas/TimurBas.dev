import { Box, Heading, IconButton, Link, Text, useClipboard, useToast } from "@chakra-ui/react"
import { FaDiscord, FaGithub, FaLinkedinIn } from "react-icons/fa"
import NextLink from "next/link"
import React from "react"

const Biography = () => {
    const { onCopy } = useClipboard("Timur#5001")
    const toast = useToast()

    const addToast = () => {
        toast({
            description: "Copied Discord Id", containerStyle: {

            }
        })
    }

    const copyDiscordId = () => {
        onCopy()
        addToast()
    }

    return (
        <Box>
            <Heading>
                Hi, I'm Timur Bas!
            </Heading>
            <Text>I am based in Denmark</Text>
            <NextLink href="https://www.github.com/TimurBas" passHref>
                <Link isExternal={true}>
                    <IconButton
                        variant='ghost'
                        aria-label='GitHub Link'
                        fontSize='20px'
                        icon={<FaGithub />}
                    />
                </Link>
            </NextLink>
            <IconButton
                variant='ghost'
                aria-label='Discord Id'
                fontSize='20px'
                icon={<FaDiscord />}
                onClick={copyDiscordId}
            />
            <NextLink href="https://www.linkedin.com/in/timurbas" passHref>
                <Link isExternal={true}>
                    <IconButton
                        variant='ghost'
                        aria-label='LinkedIn Link'
                        fontSize='20px'
                        icon={<FaLinkedinIn />}
                    />
                </Link>
            </NextLink>
        </Box>
    )
}

export default Biography