import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import GameResult from '@components/gameResult'
import GamePart from '@components/gamePart'
import {
  setTimestampStart,
  setTimestampEnd,
  setIntervalId
} from '../../store/actions/app'

import './index.scss'

@connect(
  ({ app }) => ({
    app
  }),
  dispatch => ({
    setTimestampStart(data) {
      dispatch(setTimestampStart(data))
    },
    setTimestampEnd(data) {
      dispatch(setTimestampEnd(data))
    },
    setIntervalId(data) {
      dispatch(setIntervalId(data))
    }
  })
)
class Index extends Component {
  config = {
    navigationBarTitleText: '反应小测试'
  }

  constructor(props) {
    super(props)
    this.state = {
      // isGameOver: false, // 游戏是否结束
      second: 0 // 游戏时间显示（秒）
      // timestampStart: 0, // 游戏时间戳
      // timestampEnd: 0, // 游戏时间戳
      // timeIntervalId: null
    }
  }

  // 初始化游戏计时
  initGameTime = _ => {
    this.props.setTimestampStart(new Date())
    let timeIntervalId = setInterval(_ => {
      let { second } = this.state
      second++
      this.setState({
        second
      })
    }, 1000)

    this.props.setIntervalId(timeIntervalId)
  }

  componentDidMount() {
    this.initGameTime()
  }

  render() {
    const { second } = this.state
    const { isGameOver, blockLineObj } = this.props.app
    const { title } = blockLineObj

    return isGameOver ? (
      <GameResult data={this.state} />
    ) : (
      <View className="container">
        <View className="block-game-title">
          <Text>{title}</Text>
          <Text className="block-game-second">{second}秒</Text>
        </View>
        <View>
          <GamePart />
        </View>
      </View>
    )
  }
}

export default Index
