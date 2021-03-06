import React, { Component } from 'react';
import { Text,
  View,
  ScrollView,
  Dimensions
} from 'react-native';
import { Button } from "react-native-elements";

const SCREEN_WIDTH = Dimensions.get('window').width;


class Slides extends Component {
  renderLastSlide(i) {
    if (i === this.props.data.length - 1) {
      return (
        <Button
          title="Find my buddy!"
          raised
          buttonStyle={styles.buttonStyle}
          onPress={this.props.onComplete}
        />
      )
    }
  }

  renderSlides() {
    return this.props.data.map((slide, i) => {
      return (
        <View
          key={slide.text}
          style={[styles.slideStyle, { backgroundColor: slide.color }]}
        >
          <Text style={styles.textStyle}>{slide.text}</Text>
          {this.renderLastSlide(i)}
        </View>
      )

    })
  }

  render() {
    return (
      <ScrollView
        horizontal
        style={{ flex: 1 }}
        pagingEnabled
      >
        {this.renderSlides()}
      </ScrollView>
    )
  }
}

const styles = {
  textStyle: {
    fontSize: 30,
    color: '#fff',
    textAlign: 'center'
  },
  slideStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH
  },
  buttonStyle: {
    backgroundColor: '#0288D1',
    marginTop: 15
  }
};

export default Slides;