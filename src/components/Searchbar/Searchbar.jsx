import React, { Component } from 'react';
import { SearchHeader, Form, SearchButton, Input } from './Searchbar.styled';
import { ReactComponent as SearchIcon } from '../../icons/search.svg';

export class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  handleChange = e => {
    this.setState({ inputValue: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputValue);
  };

  render() {
    return (
      <SearchHeader>
        <Form onSubmit={this.handleSubmit}>
          <SearchButton type="submit">
            <SearchIcon />
          </SearchButton>

          <Input
            onChange={this.handleChange}
            value={this.state.inputValue}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="search"
          />
        </Form>
      </SearchHeader>
    );
  }
}
