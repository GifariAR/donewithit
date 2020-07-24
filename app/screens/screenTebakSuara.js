import React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  SafeAreaView,
  Image,
  Separator,
} from "react-native";

import { Button, ButtonContainer } from "../components/Button";
import { Alert } from "../components/Alert";
import Sound from "react-native-sound";

const sound = new Sound("http://sounds.com/some-sound", null, (error) => {
  if (error) {
    // do something
  }

  // play when loaded
  sound.play();
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#36B1F0",
    flex: 1,
    paddingHorizontal: 20,
  },
  text: {
    color: "#f7347a",
    fontSize: 25,
    textAlign: "center",
    display: "flex",
    letterSpacing: -0.02,
    fontWeight: "600",
  },
  text3: {
    color: "#f7347a",
    fontSize: 25,
    textAlign: "center",
    display: "flex",
    marginBottom: -350,
    letterSpacing: -0.02,
    fontWeight: "600",
  },
  text2: {
    color: "#f7347a",
    fontSize: 25,
    textAlign: "center",
    letterSpacing: -0.02,
    fontWeight: "600",
  },
  safearea: {
    flex: 1,
    marginTop: 100,
    justifyContent: "space-between",
  },
});

class Quiz extends React.Component {
  state = {
    correctCount: 0,
    incorrectCount: 0,
    totalCount: this.props.navigation.getParam("questions", []).length,
    activeQuestionIndex: 0,
    answered: false,
    answerCorrect: false,
    answerIncorrect: false,
    imageQuestion: 0,
  };

  answer = (correct) => {
    this.setState(
      (state) => {
        const nextState = { answered: true };

        if (correct) {
          nextState.correctCount = state.correctCount + 1;
          nextState.answerCorrect = true;
        } else {
          nextState.incorrectCount = state.incorrectCount + 1;
          nextState.answerCorrect = false;
        }

        return nextState;
      },
      () => {
        setTimeout(() => this.nextQuestion(), 850);
      }
    );
  };

  nextQuestion = () => {
    this.setState((state) => {
      const nextIndex = state.activeQuestionIndex + 1;

      if (nextIndex >= state.totalCount) {
        return this.props.navigation.popToTop();
      }

      return {
        activeQuestionIndex: nextIndex,
        answered: false,
      };
    });
  };

  renderCountTracker() {
    const correctCount = this.state.correctCount;
    const incorrectCount = this.state.incorrectCount;
    return (
      <View>
        <View>
          <Text>Correct:{correctCount}</Text>
        </View>
        <View>
          <Text>InCorrect:{incorrectCount}</Text>
        </View>
      </View>
    );
  }

  render() {
    const questions = this.props.navigation.getParam("questions", []);
    const currentQuestion = questions[this.state.activeQuestionIndex];
    const question = questions[this.state.activeQuestionIndex];

    return (
      <View
        style={[
          styles.container,
          { backgroundColor: this.props.navigation.getParam("color") },
        ]}
      >
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.safearea}>
          <View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            ></View>
            <Text style={styles.text}>{question.question}</Text>
            <ButtonContainer>
              {question.answers.map((answer) => (
                <Button
                  key={answer.id}
                  text={answer.text}
                  onPress={() => this.answer(answer.correct)}
                />
              ))}
            </ButtonContainer>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <Text style={styles.text2}>
              <Text>Benar : {this.state.correctCount}</Text>
              {/* {`${this.state.correctCount}/${this.state.totalCount}`} */}
            </Text>
            <Text style={styles.text2}>
              <Text>Salah : {this.state.incorrectCount}</Text>
              {/* {`${this.state.correctCount}/${this.state.totalCount}`} */}
            </Text>
            <Text style={styles.text2}>
              <Text>Jum Quiz : {this.state.totalCount}</Text>
              {/* {`${this.state.correctCount}/${this.state.totalCount}`} */}
            </Text>
          </View>
        </SafeAreaView>
        <Alert
          correct={this.state.answerCorrect}
          visible={this.state.answered}
        />
      </View>
    );
  }
}

export default Quiz;
