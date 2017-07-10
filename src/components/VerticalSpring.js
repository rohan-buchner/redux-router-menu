import React from 'react'
import PropTypes from 'prop-types'


class VerticalSpring extends React.Component {
  constructor(props) {
    super(props)
    this.state = { height: 0 }
  }

  componentWillReceiveProps(nextProps) {
    const { height } = this.props

    if (this.contentElement && nextProps.height !== height) {
      const getContentHeight = (contentElement) => {
        contentElement.style.overflow = 'hidden'
        const contentHeight = contentElement.offsetHeight
        contentElement.style.overflow = ''
        return contentHeight
      }

      const contentHeight = getContentHeight(this.contentElement)

      const isHeightAuto = nextProps.height === 'auto'
      const newHeight = isHeightAuto ? contentHeight : 0

      this.setState({ height: newHeight })
    }
  }

  render() {
    return (
      <div style={{
        height: this.state.height,
        WebkitTransition: `height ${this.props.duration}ms ease`,
        overflow: 'hidden'
      }}>
        <div ref={r => this.contentElement = r}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

VerticalSpring.propTypes = {
  height: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
  duration: PropTypes.number
}
VerticalSpring.defaultProps = {
  duration: 500
}

export default VerticalSpring
