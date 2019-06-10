import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Button, Text } from '@tarojs/components'
import { getBlockList } from '@utils'
import { TYPE_COMMON, TYPE_ANIMAL } from '@constants/app'
import CommonBlock from '@components/commonBlock'
import { setOptions, setBlockLine } from '../../store/actions/app'

import './index.scss'

import bgImg from '@images/bg.png'

@connect(
  ({ app }) => ({
    app
  }),
  dispatch => ({
    setOptions(data) {
      dispatch(setOptions(data))
    },
    setBlockLine(data) {
      dispatch(setBlockLine(data))
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
    // const blockAnimalList = [
    //   {
    //     type: TYPE_ANIMAL,
    //     max: 12,
    //     label: '生肖大乱斗',
    //     title: `以最快速度顺序选择12生肖`
    //   }
    // ]
    // const blockList = [...blockAnimalList, ...getBlockList(2, 7)]

    this.setState({
      blockList: getBlockList(2, 7)
    })
  }

  componentWillUnmount() {}

  componentDidShow() {
    this.initGameStatus()
  }

  componentDidHide() {}

  commonBlockClick = blockData => {
    console.log(blockData, '点击commonBlockClick')
    this.props.setBlockLine(blockData)
    Taro.navigateTo({
      url: '/pages/blockGame/index'
    })
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

  render() {
    const { blockList } = this.state
    return (
      <div>
        <Image src={bgImg} className="main-bg" />
        <View className="at-row at-row--wrap main-wrap">
          {blockList.map(v => (
            <View className="at-col at-col-6 block-wrap" key={v.lineNum}>
              <CommonBlock blockData={v} onTap={this.commonBlockClick} />
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
