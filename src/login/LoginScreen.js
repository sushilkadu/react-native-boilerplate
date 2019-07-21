import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  Left,
  Icon,
  Body,
  Right,
  Title,
  StatusBar
} from "native-base";
import { observer, inject } from "mobx-react";

@inject(stores => {
  return {
    loginStore: stores.loginStore
  };
})
@observer
export default class LoginScreen extends Component {
  render() {
    console.log("LoginStore: ", this.props);

    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Login</Title>
          </Body>
        </Header>
        <Content style={{ margin: 20 }}>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input
                onChangeText={e => this.props.loginStore.setUsername(e)}
                value={this.props.loginStore.username}
              />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input
                onChangeText={e => this.props.loginStore.setPassword(e)}
                value={this.props.loginStore.password}
                secureTextEntry={true}
              />
            </Item>

            <Button
              block
              style={{ marginTop: 20 }}
              onPress={() => this.props.loginStore.login()}
            >
              <Text>Login</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

// +              <Left>
// +                <Button transparent textStyle={{ color: "#87838B" }}>
// +                  <Text>Forgot Password</Text>
// +                </Button>
// +              </Left>
// +
// +              <Right>
// +                <Button transparent textStyle={{ color: "#87838B" }}>
// +                  <Text>Register jk</Text>
// +                </Button>
// +              </Right>
