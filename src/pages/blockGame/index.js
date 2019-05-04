import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import GameResult from '@components/gameResult'
import { setTimestampStart, setTimestampEnd } from '../../store/actions/app'

import './index.scss'

@connect(
  ({ app }) => ({
    app
  }),
  dispatch => ({
    setTimestampStart (data) {
      dispatch(setTimestampStart(data))
    },
    setTimestampEnd (data) {
      dispatch(setTimestampEnd(data))
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
      blockItemList: [], // 方块列表
      max: 0, // 最大多少
      currentIndex: 0,// 当前进行到第几步骤的下标
      isGameOver: false, // 游戏是否结束
      second: 0, // 游戏时间显示（秒）
      // timestampStart: 0, // 游戏时间戳
      // timestampEnd: 0, // 游戏时间戳
      timeIntervalId: null
    }
  }

  randomNum = number => Math.floor(Math.random() * number + 1)

  // 生成数组并且乱序
  getRandomList = max =>
    Array(max)
      .fill(1)
      .map((v, i) => ({
        value: i + 1,
        isChecked: false
      }))
      .sort((a, b) => (Math.random() > 0.5 ? -1 : 1))

  getComputedStyle = lineNum => {
    const item = 100 / lineNum - 2 + '%'
    return {
      width: item,
      paddingBottom: item
    }
  }

  initGameTime = _ => {
    // this.setState({
    //   timestampStart: new Date()
    // })
    this.props.setTimestampStart(new Date())
    let timeIntervalId = setInterval(_ => {
      let { second } = this.state
      second++
      this.setState({
        second
      })
    }, 1000)

    this.setState({
      timeIntervalId
    })
  }

  // 方块点击事件，点到最后一个完成游戏
  blockClick = (val, index) => {
    let { currentIndex, max, blockItemList, timeIntervalId } = this.state
    let { value, isChecked } = val
    // console.log(currentIndex, index)
    console.log(val, index)
    if (value !== currentIndex + 1 || isChecked) return

    ++currentIndex
    if (max === currentIndex) {
      console.log('完成')
      clearInterval(timeIntervalId)
      this.props.setTimestampEnd(new Date())
      this.setState({
        isGameOver: true,
        timeIntervalId: null
        // timestampEnd: new Date()
      })
      return
    }
    else {
      blockItemList[index].isChecked = true
      this.setState({
        currentIndex: currentIndex,
        blockItemList
      })
      return
    }
  }

  componentDidMount () {
    console.log(this.props.app)
    const { blockLineObj } = this.props.app
    const { max } = blockLineObj
    const blockItemList = this.getRandomList(max)
    this.setState({ blockItemList, max })
    this.initGameTime()
  }

  render () {
    const { blockLineObj } = this.props.app
    const { blockItemList, isGameOver, second } = this.state
    const { lineNum } = blockLineObj
    const style = this.getComputedStyle(lineNum)
    return (
      isGameOver ? <GameResult data={this.state}></GameResult> :
        <View className="container">
          <View className="block-game-title">
            <Text>以最快速度从1选到{max}</Text>
            <Text className="block-game-second">{second}秒</Text>
          </View>
          <View className="block-game-wrap">
            {/* <View className="block-game-item" style={{width: `${100 / lineNum}%`}}>222</View> */}
            {blockItemList.map((val, index) => (
              <View
                className={`block-game-item ${val.isChecked ? 'checked' : ''}`}
                style={style}
                onClick={_ => this.blockClick(val, index)}
              >
                <View className="block-game-text">
                  <Text className="block-game-content">{val.value}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
    )
  }
}

export default Index
