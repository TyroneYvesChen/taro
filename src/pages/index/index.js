import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Button, Text } from '@tarojs/components'
import { getBlockList } from '@utils'
import { TYPE_COMMON, TYPE_ANIMAL, TYPE_WAIT_MORE } from '@constants/app'
import LayoutBlock from '@components/LayoutBlock/index'
import { setOptions, setBlockLine } from '../../store/actions/app'

import './index.scss'

import bgImg from '@images/bg.png'

@connect(
  ({ app }) => ({
    app
  }),
  dispatch => ({
    setOptions (data) {
      dispatch(setOptions(data))
    },
    setBlockLine (data) {
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

  componentWillReceiveProps (nextProps) { }

  componentDidMount () {
    const blockList = [
      {
        type: TYPE_ANIMAL,
        max: 12,
        label: '生肖大乱斗',
        title: `以最快速度顺序选择12生肖`
      },
      {
        type: TYPE_COMMON,
        label: '数字反应力'
      },
      {
        type: TYPE_WAIT_MORE,
        label: '敬请期待'
      }
    ]
    console.log(blockList)
    this.setState({
      blockList
    })
  }

  componentWillUnmount () { }

  componentDidShow () {
    this.initGameStatus()
    qq && qq.showShareMenu({
      showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment']
    })
  }

  componentDidHide () { }

  layoutBlockClick = blockData => {
    console.log(blockData, '点击ininin')
    const { type, label } = blockData
    const obj = {
      [TYPE_WAIT_MORE]: _ => {
        console.log('TYPE_WAIT_MORE')
        Taro.showToast({
          title: label,
          icon: 'none',
          mask: true
        })
      },
      [TYPE_COMMON]: _ => {
        console.log('TYPE_COMMON')
        Taro.navigateTo({
          url: '/pages/commonIndex/index'
        })
      },
      [TYPE_ANIMAL]: _ => {
        console.log('TYPE_ANIMAL')
        Taro.navigateTo({
          url: '/pages/blockGame/index'
        })
        this.props.setBlockLine(blockData)
      }
    }
    obj[type]()
  }

  initGameStatus = _ => {
    console.log('initGameStatus')
    this.props.setOptions({
      blockLineObj: {},
      timestampStart: 0,
      timestampEnd: 0,
      timeIntervalId: null, // 计时
      isGameOver: false // 游戏是否结束
    })
  }

  render () {
    const { blockList } = this.state
    console.log(blockList, 'blockList')

    return (
      <div>
        <Image src={bgImg} className="main-bg" />
        <View className="at-row at-row--wrap main-wrap">
          {blockList.map(v => (
            <View className="at-col at-col-12 block-wrap" key={v.lineNum}>
              <LayoutBlock blockData={v} onTap={this.layoutBlockClick} />
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
