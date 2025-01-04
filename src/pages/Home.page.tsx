import { Image, Paper, Tabs, rem, Text, Grid, Box, Group, Textarea } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';

export function HomePage() {

  const iconStyle = { width: rem(12), height: rem(12) };

  return (
    <>
      <Tabs defaultValue="progression">
        <Tabs.List>
          <Tabs.Tab value="progression" leftSection={<IconPhoto style={iconStyle} />}>
            Progression
          </Tabs.Tab>
          <Tabs.Tab value="messages" leftSection={<IconMessageCircle style={iconStyle} />}>
            Messages
          </Tabs.Tab>
          <Tabs.Tab value="settings" leftSection={<IconSettings style={iconStyle} />}>
            Settings
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="progression">

          <Image
            src="src/components/fantasy-endless-hole-landscape.jpg"
            radius="sm"
            opacity={1}
            pos="fixed"
          />

          <Group justify="center" pt="3vh" gap="lg" pos="fixed" w="100vw" h="65vh">
            <Box>
              <Paper withBorder shadow="xs" p="xl" w="65vw" h="65vh">
                <Text>AI Story Content</Text>
                <Text>
                  Lorem Ipsum
                </Text>
              </Paper>
            </Box>

            <Box>
              <Paper withBorder shadow="xs" p="xl" w="27vw" h="65vh">
                <Text>Character Stats</Text>
                <Text>
                  Lorem Ipsum
                </Text>
              </Paper>
            </Box>

            <Box>
              <Paper withBorder shadow="xs" p="md" w="100vw" h="45vh" radius={0}>
                <Textarea
                  size="lg"
                  w="100%"
                  h="100%"
                  placeholder="What Happens Next?"
                />
              </Paper>
            </Box>
          </Group>



          {/* <Grid p="4%" w="100%" h="100%" grow pos="fixed" justify="flex-start" align="stretch" overflow="hidden">

            <Grid.Col span={12}>
              <Paper shadow="xs" p="xl" w="100%" h="100%" >
                <Text>AI Story Content</Text>
                <Text>
                  Lorem Ipsum
                </Text>
              </Paper>
            </Grid.Col>

            <Grid.Col span="auto">
              <Paper shadow="xs" p="xl" w="100%" h="100%" >
                <Text>AI Story Content</Text>
                <Text>
                  Lorem Ipsum
                </Text>
              </Paper>
            </Grid.Col>

            <Grid.Col span="auto">
              <Paper shadow="xs" p="xl" w="100%" h="100%" >
                <Text>AI Story Content</Text>
                <Text>
                  Lorem Ipsum
                </Text>
              </Paper>
            </Grid.Col>

          </Grid> */}


        </Tabs.Panel>

        <Tabs.Panel value="messages">
          Messages tab content
        </Tabs.Panel>

        <Tabs.Panel value="settings">
          Settings tab content
        </Tabs.Panel>
      </Tabs>
    </>
  );
}
