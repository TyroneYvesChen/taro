import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Button, Text } from '@tarojs/components'
import { setBlockLine } from '../../store/actions/app'
import { TYPE_COMMON, TYPE_ANIMAL } from '@constants/app'
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
    console.log(blockData, '点击')
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
        style={{ background: blockData && blockData.bgColor }}
        onTap={_ => {
          this.LayoutBlockClick(blockData)
        }}
      >
        {blockData.label}
      </View>
    )
  }
}

export default LayoutBlock
