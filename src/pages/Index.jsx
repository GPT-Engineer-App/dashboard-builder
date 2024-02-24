import React from "react";
import { Box, Flex, Heading, Text, Button, Stack, Avatar, useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react";
import { FaSun, FaMoon, FaUserCircle, FaChartBar } from "react-icons/fa";

const DashboardCard = ({ title, icon, children }) => {
  const cardBg = useColorModeValue("gray.100", "gray.700");
  return (
    <Box p={5} shadow="md" bg={cardBg} borderRadius="md">
      <Flex alignItems="center">
        {icon}
        <Heading fontSize="xl" ml={2}>
          {title}
        </Heading>
      </Flex>
      <Text mt={4}>{children}</Text>
    </Box>
  );
};

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <Flex as="header" width="full" align="center" justifyContent="space-between" p={4} borderBottomWidth="1px">
        <Heading as="h1" size="lg">
          Dashboard
        </Heading>
        <Stack direction="row" spacing={4} align="center">
          <Button leftIcon={<FaChartBar />} colorScheme="teal">
            Generate Report
          </Button>
          <Avatar size="sm" icon={<FaUserCircle />} />
          <IconButton icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} isRound={true} />
        </Stack>
      </Flex>
      <Flex p={4} direction="column" gap={4}>
        <DashboardCard title="Visitors" icon={<FaChartBar />}>
          3,245 unique visits this month.
        </DashboardCard>
        <DashboardCard title="Sales" icon={<FaChartBar />}>
          $12,400 in revenue this month.
        </DashboardCard>
        <DashboardCard title="Performance" icon={<FaChartBar />}>
          Server uptime 99.97%.
        </DashboardCard>
      </Flex>
    </Box>
  );
};

export default Index;
