import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import { connect } from '@tarojs/redux'
import { setOptions } from '../../store/actions/app'
import './index.scss'

@connect(
  ({ app }) => ({
    app
  }),
  dispatch => ({
    setOptions(data) {
      dispatch(setOptions(data))
    }
  })
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

  initGameStatus = _ => {
    this.props.setOptions({
      blockLineObj: {},
      timestampStart: 0,
      timestampEnd: 0,
      timeIntervalId: null, // 计时
      isGameOver: false // 游戏是否结束
    })
  }

  backToHome = e => {
    console.log('wocao')
    e.stopPropagation()
    this.initGameStatus()
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
