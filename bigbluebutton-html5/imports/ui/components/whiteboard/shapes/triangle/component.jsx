import React from 'react';
import PropTypes from 'prop-types';
import ShapeHelpers from '../helpers.js';

export default class TriangleDrawComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  getCoordinates() {
    let path = '';

    // points[0] and points[1] are x and y coordinates of the top left corner of the shape obj
    // points[2] and points[3] are x and y coordinates of the bottom right corner of the shape obj
    const xBottomLeft = this.props.shape.points[0];
    const yBottomLeft = this.props.shape.points[3];
    const xBottomRight = this.props.shape.points[2];
    const yBottomRight = this.props.shape.points[3];
    const xTop = ((xBottomRight - xBottomLeft) / 2) + xBottomLeft;
    const yTop = this.props.shape.points[1];

    path = `${path}M${xTop / 100 * this.props.slideWidth
        },${yTop / 100 * this.props.slideHeight
        },${xBottomLeft / 100 * this.props.slideWidth
        },${yBottomLeft / 100 * this.props.slideHeight
        },${xBottomRight / 100 * this.props.slideWidth
        },${yBottomRight / 100 * this.props.slideHeight
        }Z`;

    return path;
  }

  render() {
    const path = this.getCoordinates();
    return (
      <path
        style={this.props.style}
        fill="none"
        stroke={ShapeHelpers.formatColor(this.props.shape.color)}
        d={path}
        strokeWidth={this.props.shape.thickness}
        strokeLinejoin="round"
      />
    );
  }
}

TriangleDrawComponent.defaultProps = {
  style: {
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  },
};
