import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

const QuestionsList = ({ questions }) => {
  return (
    <div>
      <Card.Group>
        {
          questions.map(question => {
            return (
              <Card fluid key={question.number}>
                <Card.Content header={`#${question.number}. ${question.question}`}/>
                <Card.Content description={question.answer.answer}/>
                <Card.Content extra>
                  <Icon name='user'/>
                  Erikson
                </Card.Content>
              </Card>
            )
          })
        }
      </Card.Group>
    </div>
  );
}


export default QuestionsList;