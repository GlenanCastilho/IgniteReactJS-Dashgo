import { Avatar, Box, Flex, Text  } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
            { showProfileData && (
                <Box mr="4" textAlign="right">
                <Text>Glenan Castilho</Text>
                <Text color="gray.300" fontSize="small">
                    glenancastilho37@gmail.com
                </Text>
            </Box>
            )}

            <Avatar size="md" name="Glenan Castilho" src="https://github.com/GlenanCastilho.png" />
        </Flex>
    );
}