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
      blockItemList: [],
      max: 0,
      currentIndex: 0
    }
  }

  randomNum = number => Math.floor(Math.random() * number + 1)

  getRandomList = max =>
    Array(max)
      .fill(1)
      .map((v, i) => i + 1)
      .sort((a, b) => (Math.random() > 0.5 ? -1 : 1))

  getComputedStyle = lineNum => {
    const item = 100 / lineNum - 2 + '%'
    return {
      width: item,
      paddingBottom: item
    }
  }

  blockClick = index => {
    console.log(index)
  }

  componentDidMount() {
    console.log(this.props.app)
    const { blockLineObj } = this.props.app
    const { max } = blockLineObj
    const blockItemList = this.getRandomList(max)
    this.setState({ blockItemList, max })
  }

  render() {
    const { blockLineObj } = this.props.app
    const { blockItemList } = this.state
    const { lineNum } = blockLineObj
    const style = this.getComputedStyle(lineNum)
    return (
      <View className="container">
        <View className="block-game-wrap">
          {/* <View className="block-game-item" style={{width: `${100 / lineNum}%`}}>222</View> */}
          {blockItemList.map((val, index) => (
            <View
              className="block-game-item"
              style={style}
              onClick={_ => this.blockClick(index)}
            >
              <View className="block-game-text">
                <Text className="block-game-content">{val}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    )
  }
}

export default Index
