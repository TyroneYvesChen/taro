import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import {
  setTimestampStart,
  setTimestampEnd,
  setIsGameOver,
  setIntervalId
} from '../../store/actions/app'
import { TYPE_COMMON, TYPE_ANIMAL } from '@constants/app'
import { getRandomList } from '@utils'
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
    setIsGameOver(data) {
      dispatch(setIsGameOver(data))
    },
    setIntervalId(data) {
      dispatch(setIntervalId(data))
    }
  })
)
class Xxx extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blockItemList: [], // 方块列表
      max: 0, // 最大多少
      currentIndex: 0, // 当前进行到第几步骤的下标
      style: {}
    }
  }

  // 方块点击事件，点到最后一个完成游戏
  blockClick = (val, index) => {
    let { currentIndex, max, blockItemList } = this.state
    let { timeIntervalId } = this.props.app
    let { value, isChecked } = val
    // console.log(val, index)
    console.log(this.props.app)
    if (value !== currentIndex + 1 || isChecked) {
      Taro.vibrateLong()
      return
    }

    ++currentIndex
    if (max === currentIndex) {
      console.log('完成')
      clearInterval(timeIntervalId)
      this.props.setTimestampEnd(new Date())
      this.props.setIsGameOver(true)
      this.props.setIntervalId(null)
      return
    } else {
      blockItemList[index].isChecked = true
      this.setState({
        currentIndex: currentIndex,
        blockItemList
      })
      return
    }
  }

  // 获取游戏列表数据
  getBlockItemList = max =>
    getRandomList(max).map(v => ({
      type: TYPE_COMMON,
      value: v + 1,
      isChecked: false
    }))

  // 十二生肖的列表
  getAnimalList = _ => {
    let arr = getRandomList(12).map(v => ({
      type: TYPE_ANIMAL,
      value: v + 1,
      isChecked: false,
      img: `${v + 1}.png`
    }))

    return arr
  }

  getComputedStyle = (lineNum, bgColor) => {
    const item = 100 / lineNum - 2 + '%'
    return {
      width: item,
      paddingBottom: item,
      background: bgColor
    }
  }

  componentDidMount() {
    console.log(this.props.blockClick2, '----------------------------')
    console.log(this.props.ceshi, '----------------------------')

    const { blockLineObj } = this.props.app
    const { max, lineNum, bgColor } = blockLineObj
    const blockItemList = this.getBlockItemList(max)
    const style = this.getComputedStyle(lineNum, bgColor)
    this.setState({ blockItemList, max, style })
  }

  render() {
    const { blockItemList, style } = this.state

    return (
      <View
        className={`block-game-item`}
        style={style}
        onTouchStart={_ => this.props.blockClick2()}
      >
        <View className="block-game-text">
          <Text className="block-game-content">saidjsakda</Text>
        </View>
      </View>
    )
  }
}

export default Xxx
