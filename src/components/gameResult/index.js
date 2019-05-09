import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import { connect } from '@tarojs/redux'
import './index.scss'

@connect(
  ({ app }) => ({
    app
  }),
  dispatch => ({})
)
class GameResult extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    console.log(this.props.app)
  }

  getGameResultTime = (timestampStart, timestampEnd) => {
    const timestamp = timestampEnd - timestampStart
    const result = timestamp / 1000
    return result
  }

  backToHome = e => {
    console.log('wocao')
    e.stopPropagation()
    Taro.reLaunch({
      url: '/pages/index/index'
    })
  }

  render() {
    const { timestampStart, timestampEnd, blockLineObj } = this.props.app
    const { label } = blockLineObj
    const gameResultTime = this.getGameResultTime(timestampStart, timestampEnd)
    return (
      <View className="result-wrap">
        <View className="result-text">{label}的结果</View>
        <View className="result-content">{gameResultTime}</View>
        <View className="result-text">完成训练</View>
        <AtButton type="primary" onClick={this.backToHome}>
          返回主页
        </AtButton>
      </View>
    )
  }
}

export default GameResult
