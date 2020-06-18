//index.js

import React from 'react';
import PropTypes from 'prop-types';
import { List, Image } from 'semantic-ui-react';

/**
 * This object renders the results of the search query on the web page. 
 * Each result item, or 'match', will display a title, description, and
 * sentiment value.
 */
const Message = props => (
  <List.Item className={ props.className }>
    <Image avatar src={ props.image } />
    <List.Content className='message-text' >
      { props.text }
    </List.Content>
  </List.Item>
);

// type check to ensure we are called correctly
Message.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

const Messages = props => (
  <div>
    <List relaxed='very'>
      {props.messages.map(item =>
        <Message
          key={ item.id }
          text={ item.text }
          className = { getClassName(item) }
          image = { getImage(item) }
        />)
      }
    </List>
  </div>
);

const getClassName = item => {
  if (item.owner === 'user') {
    return 'right-item-list';
  } else { 
    return 'left-item-list';
  }
};

const getImage = item => {
  if (item.owner === 'user') {
    return 'https://semantic-ui.com/images/avatar/small/stevie.jpg';
  } else if (item.owner === 'watson') { 
    return '/images/watson.png';
  } else {
    return '/images/separator.png';    
  }
};

// type check to ensure we are called correctly
Messages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired
};

// export so we are visible to parent
module.exports = Messages;
