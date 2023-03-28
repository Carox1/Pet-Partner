import {
    Card,
    Image,
    StepperField,
    Flex,
    Badge,
    Text,
    Button,
  } from '@aws-amplify/ui-react';
  
  export const Product = (props) => {
    return (
        <Card variation="elevated">
        <Flex alignItems="flex-start">
          <Image src={props.img}
            alt="Amplify" width="8rem"/>
          <Flex direction="column" gap="xs">
            <Flex>
              <Badge variation="success">New</Badge>
            </Flex>
            <Text fontSize="large" fontWeight="semibold">
              {props.title}
            </Text>
            <Text color="font.tertiary">
              {props.desc}
            </Text>
            <Text
              fontSize="large"
              color="secondary">
              ${props.price}
            </Text>
            <Flex>
              <StepperField
                label="Quantity"
                min={0}
                max={10}
                step={1}
                defaultValue={1}
                labelHidden
              />
              <Button variation="primary">Add to cart</Button>
            </Flex>
          </Flex>
        </Flex>
      </Card>
    );
  };