import { Text, Button, ButtonProps } from "@chakra-ui/react";

type Props = {
  label: string;
  children: React.Component | string;
  buttonProps?: ButtonProps;
  isClicked?: boolean;
};

const EmojiButton = ({
  label,
  children,
  buttonProps,
  isClicked = false,
}: Props) => {
  return (
    <Button
      padding={0}
      colorScheme="teal"
      border={isClicked ? "5px solid teal" : "5px solid white"}
      variant={isClicked ? "outline" : "ghost"}
      {...buttonProps}
    >
      <Text fontSize="2xl" pointerEvents="none" aria-label={label}>
        {children}
      </Text>
    </Button>
  );
};

export default EmojiButton;
