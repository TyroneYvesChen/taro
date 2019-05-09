import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Button, Text } from '@tarojs/components'
import { getBlockList } from '@utils'
import { TYPE_COMMON, TYPE_ANIMAL } from '@constants/app'
import LayoutBlock from '@components/LayoutBlock'
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
class Index extends Component {
  config = {
    navigationBarTitleText: '反应小测试'
  }

  constructor(props) {
    super(props)
    this.state = {
      blockList: []
    }
  }

  componentWillReceiveProps(nextProps) {}

  componentDidMount() {
    const blockAnimalList = [
      {
        type: TYPE_ANIMAL,
        max: 12,
        label: '生肖大乱斗'
      }
    ]
    const blockList = [...blockAnimalList, ...getBlockList(2, 7)]
    this.setState({
      blockList
    })
  }

  componentWillUnmount() {}

  componentDidShow() {
    this.initGameStatus()
  }

  componentDidHide() {}

  initGameStatus = _ => {
    this.props.setOptions({
      blockLineObj: {},
      timestampStart: 0,
      timestampEnd: 0,
      timeIntervalId: null, // 计时
      isGameOver: false // 游戏是否结束
    })
  }

  render() {
    const { blockList } = this.state
    return (
      <div>
        <View className="at-row at-row--wrap main-wrap">
          {blockList.map(v => (
            <View className="at-col at-col-6 block-wrap" key={v.lineNum}>
              <LayoutBlock blockData={v} />
            </View>
          ))}
        </View>
      </div>
    )
  }
}

Index.defaultProps = {
  blockList: []
}

export default Index
