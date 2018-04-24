import React from 'react';
import { Card, Icon } from 'semantic-ui-react'

const TestItem = ({title, description}) => (
  <Card color="olive">
    <Card.Content header={title} />
    <Card.Content description={description} />
    <Card.Content extra>
      <Icon name='user' />
      4 Friends
    </Card.Content>
  </Card>
);

export default TestItem;