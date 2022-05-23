import React, { Component } from 'react';
import { Card, Badge, Collapse } from 'react-bootstrap';
import ConditionalWrapper from './common/conditionalWrapper';

class ProjectCard extends Component {
  state = { open: false };

  open = () => { this.setState({ open: true }); };
  close = () => { this.setState({ open: false }); };

  render() {
    const { href, imgData, created, title, tags } = this.props;
    const { open } = this.state;
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    return (
      <ConditionalWrapper
        condition={href}
        wrapper={children => (
          <a className="no-decoration" target="_blank" rel="noopener noreferrer" href={href}>
            {children}
          </a>
        )}
      >
        <Card
          style={{
            overflow: 'hidden',
            borderRadius: '24px'
          }}
          onMouseEnter={() => this.open()}
          onTouchStart={() => this.open()}
          onMouseLeave={() => this.close()}
          onTouchEnd={() => this.close()}
          aria-expanded={open}
        >
          <Card.Img variant="top" src={`data:image/png;base64,${imgData}`} />
          <div
            className="badge badge-warning"
            style={{
              position: 'absolute',
              top: '5px',
              right: `${open? '10px' : '-200px'}`,
              transition: 'all .35s',
              borderRadius: '50px'
            }}
          >
            {`${monthNames[created.getMonth()]} ${created.getFullYear()}`}
          </div>
          <Card.Body className="bg-nero">
            <p className={`text-center ${open ? 'active-link' : 'inactive-link'}`}>{title}</p>
            <Collapse in={open}>
              <Card.Text className="text-center">
                {tags.map((tag, index, { length }) => (
                  <React.Fragment key={index}>
                    <Badge variant="warning">{tag}</Badge>
                    {index !== length - 1 && <>&nbsp;</>}
                  </React.Fragment>
                ))}
              </Card.Text>
            </Collapse>
          </Card.Body>
        </Card>
      </ConditionalWrapper>
    );
  }
}

export default ProjectCard;
