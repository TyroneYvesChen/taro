import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { TYPE_COMMON, TYPE_ANIMAL } from '@constants/app'
import { getRandomList } from '@utils'
import './index.scss'

@connect(
  ({ app }) => ({
    app
  }),
  dispatch => ({})
)
class gameCommon extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {}

  render() {
    const { blockItemList, styleObj, blockClick } = this.props
    return (
      <View className="block-game-wrap">
        {blockItemList &&
          blockItemList.map((val, index) => (
            <View
              className={`block-game-item ${val.isChecked ? 'checked' : ''}`}
              style={styleObj}
              onTouchStart={_ => blockClick(val, index)}
              key={index}
            >
              <View className="block-game-text">
                <Text className="block-game-content">{val.value}</Text>
              </View>
            </View>
          ))}
      </View>
    )
  }
}

export default gameCommon
