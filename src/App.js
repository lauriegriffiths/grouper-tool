import React from "react";
import {
  ThemeProvider,
  CSSReset,
  theme,
  Stack,
  Grid,
  Flex,
  Text,
  Box,
  Heading,
  NumberInput,
  Textarea,
  Button
} from "@chakra-ui/core";
import { shuffle, chunk } from "lodash";

import { Groups } from "./groups";

class App extends React.Component {
  generateBySize = () => {
    const list_of_names = this.state.textArea.split(/\r?\n/);
    const random_list = shuffle(list_of_names);
    const groups = chunk(random_list, this.state.groupSize);
    this.setState({ groups: groups });
    console.log(random_list);
  };
  generateByNumber = () => {
    const list_of_names = this.state.textArea.split(/\r?\n/);
    const random_list = shuffle(list_of_names);
    const number_of_groups = this.state.numberOfGroups;
    const number_of_names = list_of_names.length;
    var chunk_size = Math.round(number_of_names / number_of_groups);
    console.log(chunk_size);
    const groups = chunk(random_list, chunk_size);
    //const [remainder] = groups_with_remainder.slice(-1);

    //for (i = 0; i < remainder.length; i++) {}
    console.log(groups);
    this.setState({ groups: groups });
  };

  handleTextAreaChange = event => {
    this.setState({ textArea: event.target.value });
  };

  handleGroupSizeChange = value => {
    this.setState({ groupSize: value });
  };
  handleNumberOfGroupsChange = value => {
    this.setState({ numberOfGroups: value });
  };

  constructor(props) {
    super(props);
    this.state = { studentlist: [], groups: [["alice", "bob"]] };
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Flex
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          mt={4}
        >
          <Flex
            display="flex"
            flexDirection="row"
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            <Text fontSize="3xl" fontWeight="bold">
              Grouper Tool
            </Text>
          </Flex>
          <Text color="gray.500">Quickly divide people into groups</Text>
        </Flex>
        <Grid
          p={10}
          gap={6}
          templateColumns="repeat(auto-fit, minmax(350px, 1fr))"
        >
          <Stack>
            <Box
              backgroundColor="white"
              borderRadius="lg"
              shadow="sm"
              pl={3}
              pr={3}
              pt={5}
              pb={5}
            >
              <Flex
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="flex-start"
              >
                <Heading
                  size="md"
                  as="h2"
                  lineHeight="shorter"
                  fontWeight="bold"
                  fontFamily="heading"
                >
                  Inputs
                </Heading>
              </Flex>
              <Stack shouldWrapChildren spacing={4} ml={4} mt={4}>
                <Stack shouldWrapChildren spacing={2}>
                  <Text>Person list</Text>
                  <Textarea onChange={this.handleTextAreaChange} />
                </Stack>
                <Stack shouldWrapChildren spacing={2}>
                  <Text>Group size</Text>
                  <NumberInput onChange={this.handleGroupSizeChange} />
                  <Button onClick={this.generateBySize}>Generate</Button>
                </Stack>
                <Stack shouldWrapChildren spacing={2}>
                  <Text>Number of Groups</Text>
                  <NumberInput onChange={this.handleNumberOfGroupsChange} />
                  <Button onClick={this.generateByNumber}>Generate</Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
          <Box>
            <Box
              backgroundColor="white"
              borderRadius="lg"
              shadow="sm"
              pl={3}
              pr={3}
              pt={5}
              pb={5}
            >
              <Flex
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="flex-start"
              >
                <Heading
                  size="md"
                  as="h2"
                  lineHeight="shorter"
                  fontWeight="bold"
                  fontFamily="heading"
                >
                  Groups
                </Heading>
              </Flex>
              <Stack shouldWrapChildren spacing={4} ml={4} mt={4}>
                <Groups groups={this.state.groups} />
              </Stack>
            </Box>
          </Box>
        </Grid>
      </ThemeProvider>
    );
  }
}
export default App;
