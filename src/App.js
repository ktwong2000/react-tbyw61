import React from 'react';
import './style.css';
import { Button, Flex, Heading, Image, Text } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

export default function App() {
  return (

    <div>
            <h1>Hello StackBlitz!</h1>
              <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat
          sed cras ornare arcu dui. Duis aute irure dolor in reprehenderit in
          voluptate velit esse.
        </Text>
        <Button
          variation="primary"
          onClick={() => alert('Added item to cart!')}
        >
          Add to Cart
        </Button>
      <h1>Hello StackBlitz!</h1>
      <h1>Hello StackBlitz!</h1>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>

    </div>
  );
}
