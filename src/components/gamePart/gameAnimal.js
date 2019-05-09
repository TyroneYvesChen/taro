import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { TYPE_COMMON, TYPE_ANIMAL } from '@constants/app'
import { getRandomList } from '@utils'
import './index.scss'

import animal1 from '@images/1.png'
import animal2 from '@images/2.png'
import animal3 from '@images/3.png'
import animal4 from '@images/4.png'
import animal5 from '@images/5.png'
import animal6 from '@images/6.png'
import animal7 from '@images/7.png'
import animal8 from '@images/8.png'
import animal9 from '@images/9.png'
import animal10 from '@images/10.png'
import animal11 from '@images/11.png'
import animal12 from '@images/12.png'

const animalPng = {
  animal1,
  animal2,
  animal3,
  animal4,
  animal5,
  animal6,
  animal7,
  animal8,
  animal9,
  animal10,
  animal11,
  animal12
}

@connect(
  ({ app }) => ({
    app
  }),
  dispatch => ({})
)
class GameAnimal extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    console.log(this.props.blockItemList)
  }

  render() {
    const { blockItemList, styleObj, blockClick } = this.props
    return (
      <View className="block-game-wrap">
        {blockItemList &&
          blockItemList.map((val, index) => (
            <View
              className={`block-game-item block-game-animal ${
                val.isChecked ? 'checked' : ''
              }`}
              // style={{ background: `${val.img}` }}
              onTouchStart={_ => blockClick(val, index)}
              key={index}
            >
              <Image mode="widthFix" src={animalPng[val.img]} />
              {/* <View className="block-game-text">
                <Text className="block-game-animal-content">{val.value}</Text>
              </View> */}
            </View>
          ))}
      </View>
    )
  }
}

export default GameAnimal
