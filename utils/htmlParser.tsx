import { OrderedList, ListItem } from "@chakra-ui/react";
import { domToReact } from "html-react-parser";

// helpful for parse and replace children - https://medium.com/@san.vuthy08/html-react-parser-1d0df932303a
export const replaceListDom = (domNode) => {
  if (domNode.name === "ol") {
    const { children } = domNode;

    return (
      <OrderedList ml={8}>
        {
          //@ts-ignore
          domToReact(children, (domNode) => {
            if (domNode.name === "li") {
              return (
                <ListItem key={`${domNode.data}`}>{domNode.data}</ListItem>
              );
            }
          })
        }
      </OrderedList>
    );
  }
  return false;
};
