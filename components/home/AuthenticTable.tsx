import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Text,
} from "@chakra-ui/react";

const tableData = [
  {
    feature: "Context",
    authentic:
      "Relevant context that draw on student's experiences, culture, or community",
    typical:
      "No context or forced context that is not relevant to student's life, culture, or community",
  },
  {
    feature: "Intuition",
    authentic:
      "Can be approached using a student's intuition. Possible to make an educated guess",
    typical:
      "Impossible to approach the problem without having learned the standard or formula",
  },
  {
    feature: "Solutions",
    authentic:
      "There are multiple ways to solve the problem, and multiple reasonable solutions.",
    typical:
      "There is only one way to solve the problem and a single correct solution.",
  },

  {
    feature: "Feedback",
    authentic:
      "Students receive feedback from peers, and can continually improve on their answers.",
    typical: "Student's answer is marked right or wrong.",
  },
];

const AuthenticTable = () => {
  return (
    <Table variant="striped" size="sm" maxWidth={650} margin="auto">
      <Thead>
        <Tr>
          <Th></Th>
          <Th>Authentic</Th>
          <Th>Typical</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td></Td>
          <Td pt={5} pb={5}>
            <Text as="i" fontSize="sm">
              Where should we build cell towers to provide cellular access to
              the as many residents as possible?
            </Text>
          </Td>
          <Td>
            <Text as="i">
              Diego's bedroom is 4 meters by 3 meters. What is the diagonal
              distance from one corner to the opposite corner?
            </Text>
          </Td>
        </Tr>
        {tableData.map((row) => {
          return (
            <Tr key={row.feature}>
              <Td pt={10} pb={10}>
                <Text as="b">{row.feature}</Text>
              </Td>
              <Td>{row.authentic}</Td>
              <Td>{row.typical}</Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

export default AuthenticTable;
