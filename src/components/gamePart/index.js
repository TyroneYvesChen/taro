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
// import Xxx from './xxx'
import GameCommon from './gameCommon'
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
class GamePart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blockItemList: [], // 方块列表
      max: 0, // 最大多少
      currentIndex: 0, // 当前进行到第几步骤的下标
      styleObj: {}, // 样式对象
      type: '' // 是哪种类型游戏
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
    const { blockLineObj } = this.props.app
    const { max, lineNum, bgColor, type } = blockLineObj
    const blockItemList = this.getBlockItemList(max)
    const styleObj = this.getComputedStyle(lineNum, bgColor)
    console.log(styleObj, '样式啊！！！')
    this.setState({ blockItemList, max, styleObj, type })
    // this.getGamesItem()
  }

  render() {
    const { blockItemList, styleObj, type } = this.state

    return (
      <View className="block-game-wrap">
        {
          <GameCommon
            blockItemList={blockItemList}
            styleObj={styleObj}
            blockClick={(val, index) => {
              this.blockClick.call(this, val, index)
            }}
          />
        }
        {/* {blockItemList.map((val, index) => (
          <View
            className={`block-game-item ${val.isChecked ? 'checked' : ''}`}
            style={style}
            onTouchStart={_ => this.blockClick(val, index)}
            key={index}
          >
            <View className="block-game-text">
              <Text className="block-game-content">{val.value}</Text>
            </View>
          </View>
        ))} */}
      </View>
    )
  }
}

export default GamePart
