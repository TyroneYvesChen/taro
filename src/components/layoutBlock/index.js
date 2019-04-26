import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Button, Text } from '@tarojs/components'
import { AtButton, AtTimeline } from 'taro-ui'
import { setBlockLine } from '../../store/actions/app'

import './index.scss'

@connect(
  ({ app }) => ({
    app
  }),
  dispatch => ({
    setBlockLine(data) {
      dispatch(setBlockLine(data))
    }
  })
)
class LayoutBlock extends Component {
  componentWillReceiveProps(nextProps) {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  LayoutBlockClick = blockData => {
    console.log(blockData)
    this.props.setBlockLine(blockData)
    Taro.navigateTo({
      url: '/pages/blockGame/index'
    })
  }

  render() {
    const { blockData } = this.props
    return (
      <View
        className="block"
        onClick={_ => {
          this.LayoutBlockClick(blockData)
        }}
      >
        {blockData.label}
      </View>
    )
  }
}

export default LayoutBlock
