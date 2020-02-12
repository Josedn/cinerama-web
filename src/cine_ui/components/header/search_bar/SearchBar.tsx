import React, { ChangeEvent, SyntheticEvent, RefObject } from "react";
import "./SearchBar.scss";

type SearchBarProps = {};

type SearchBarState = {
    searchText: string;
    active: boolean;
};

const initialState: SearchBarState = {
    searchText: "",
    active: false
};

export default class SearchBar extends React.Component<
    SearchBarProps,
    SearchBarState
> {
    searchInput: RefObject<HTMLInputElement>;
    constructor(props: SearchBarProps) {
        super(props);
        this.searchInput = React.createRef();
        this.state = initialState;
    }

    handleUpdateText = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            searchText: event.target.value
        });
    };

    handleToggleSearch = (event: SyntheticEvent) => {
        const { active, searchText } = this.state;
        if (searchText.length === 0) {
            this.setState(
                {
                    active: !active
                },
                () => {
                    this.focusSearchInput();
                }
            );
        }
    };

    handleCancelSearch = (event: SyntheticEvent) => {
        this.setState({
            searchText: ""
        });
        this.focusSearchInput();
    };

    focusSearchInput = () => {
        if (this.searchInput.current != null) {
            this.searchInput.current.focus();
        }
    };

    render() {
        const { searchText, active } = this.state;

        if (active || searchText.length > 0) {
            return (
                <div className="search_bar search_bar--open">
                    <button
                        className="search_bar__button"
                        onClick={this.handleToggleSearch}
                    >
                        <i className="search_bar__icon fa fa-search"></i>
                    </button>
                    <input
                        className="search_bar__input"
                        type="text"
                        placeholder="Títulos, personas, géneros"
                        value={searchText}
                        onChange={this.handleUpdateText}
                        ref={this.searchInput}
                    />
                    <button
                        className="search_bar__button search_bar__button--close"
                        onClick={this.handleCancelSearch}
                    >
                        <i className="search_bar__icon fa fa-close"></i>
                    </button>
                </div>
            );
        }

        return (
            <div className="search_bar">
                <button
                    className="search_bar__button"
                    onClick={this.handleToggleSearch}
                >
                    <i className="search_bar__icon fa fa-search"></i>
                </button>
            </div>
        );
    }
}
