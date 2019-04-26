import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import './index.scss'

@connect(
  ({ app }) => ({
    app
  }),
  dispatch => ({})
)
class Index extends Component {
  config = {
    navigationBarTitleText: '反应小测试'
  }

  constructor(props) {
    super(props)
    this.state = {
      blockItemList: []
    }
  }

  componentWillReceiveProps(nextProps) {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidMount() {
    console.log(this.props.app)
  }

  render() {
    const { blockLineObj } = this.props.app
    const { max, lineNum } = blockLineObj
    return (
      <View className="block-game-wrap">
        {/* <View className="block-game-item" style={{width: `${100 / lineNum}%`}}>222</View> */}
        <View className="block-game-item">
          <View className="block-game-num">222</View>
        </View>
        <View className="block-game-item">
          <View className="block-game-num">222</View>
        </View>
        <View className="block-game-item">
          <View className="block-game-num">222</View>
        </View>
        <View className="block-game-item">
          <View className="block-game-num">222</View>
        </View>
        <View className="block-game-item">
          <View className="block-game-num">222</View>
        </View>
        <View className="block-game-item">
          <View className="block-game-num">222</View>
        </View>
        <View className="block-game-item">
          <View className="block-game-num">222</View>
        </View>
        <View className="block-game-item">
          <View className="block-game-num">222</View>
        </View>
        <View className="block-game-item">
          <View className="block-game-num">222</View>
        </View>
        <View className="block-game-item">
          <View className="block-game-num">222</View>
        </View>
      </View>
    )
  }
}

export default Index
