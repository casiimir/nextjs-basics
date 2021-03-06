import React from 'react';

import { Box, Flex, Image, Link } from '@chakra-ui/react';

function Layout() {
  return (
    <div className="Layout">
      <Box bg="#18181880" w="100%" my={2} color="#fff">
        <Flex justify="space-between" align="center">
          <Box>
            <Image
              w="100px"
              style={{ display: 'inline-block' }}
              src="https://logoipsum.com/logo/logo-15.svg"
              alt="logo"
            />
            <strong style={{ marginLeft: '-20px' }}>Egemonia</strong>
          </Box>
          <Box align="center">
            <Link href="/" mr={4}>
              Home
            </Link>
            <Link href="/articles" mr={4}>
              Articles
            </Link>
            <Link href="/contacts" mr={4}>
              Contacts
            </Link>
          </Box>
        </Flex>
      </Box>
    </div>
  );
}

export default Layout;
