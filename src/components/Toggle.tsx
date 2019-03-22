import React from 'react';

type Props = {
  isToggled: boolean;
  onToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

type State = {};

export default class Toggle extends React.Component<Props, State> {
  state: State = {
    initialValue: this.props.isToggled,
  };

  handleClick = () => {
    this.props.onToggle(!this.props.isToggled);
  };

  render() {
    return <button onClick={this.handleClick}>Click</button>;
  }
}
