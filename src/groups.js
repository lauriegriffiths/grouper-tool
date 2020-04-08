import React from "react";
import { Stack, Tag } from "@chakra-ui/core";
import { NameList } from "./namelist";

export class Groups extends React.Component {
  render() {
    const groups = this.props.groups.map((groupNames, index) => (
      <Stack key={index + 1} shouldWrapChildren spacing={2}>
        <Tag size="md" variant="subtle" variantColor="whatsapp">
          Group {index + 1}
        </Tag>
        <NameList groupNumber={index + 1} names={groupNames} />
      </Stack>
    ));

    return groups;
  }
}
