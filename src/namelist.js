import React from "react";
import { List, ListItem } from "@chakra-ui/core";

export class NameList extends React.Component {
  render() {
    var list_items = this.props.names.map(name => (
      <ListItem key={name.concat(this.props.groupNumber)}>{name}</ListItem>
    ));
    return <List>{list_items}</List>;
  }
}
