import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Button, Text } from '@tarojs/components'
import { AtButton, AtTimeline } from 'taro-ui'

import { getBlockList } from '@utils'
import LayoutBlock from '@components/LayoutBlock'

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
      blockList: []
    }
  }

  componentWillReceiveProps(nextProps) {}

  componentDidMount() {
    const blockList = getBlockList(2, 7)
    this.setState({
      blockList
    })
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

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
