import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Button, Text } from '@tarojs/components'
import { AtButton, AtTimeline } from 'taro-ui'
import { add, minus, asyncAdd } from '../../actions/counter'

import './index.scss'

@connect(
  ({ counter }) => ({
    counter
  }),
  dispatch => ({})
)
class LayoutBlock extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="at-row">
        <View className="at-col at-col-3">A</View>
        <View className="at-col at-col-6">B</View>
        <View className="at-col at-col-2">C</View>
        <View className="at-col at-col-1">D</View>
      </View>
    )
  }
}

export default LayoutBlock
