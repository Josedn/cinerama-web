import React, { ChangeEvent, SyntheticEvent, RefObject } from "react";
import "./SearchBar.scss";
import CineEnvironment from "../../../../cine_engine/CineEnvironment";

type SearchBarProps = {};

type SearchBarState = {
    searchText: string;
    active: boolean;
};

const initialState: SearchBarState = {
    searchText: "",
    active: false
};

export default class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
    searchInput: RefObject<HTMLInputElement>;
    constructor(props: SearchBarProps) {
        super(props);
        this.searchInput = React.createRef();
        this.state = initialState;
    }

    componentDidMount() {
        CineEnvironment.getCine().cineState.onStartSearch = () => {
            this.setState({
                active: true
            }, () => {
                this.focusSearchInput();
            });
        };
    }

    componentWillUnmount() {
        CineEnvironment.getCine().cineState.onStartSearch = () => { };
    }

    handleUpdateText = (event: ChangeEvent<HTMLInputElement>) => {
        const searchText = event.target.value;
        this.setState({
            searchText
        });
    };

    handleKeyDown = (evt: SyntheticEvent) => {
        const event = evt.nativeEvent as KeyboardEvent;
        const isEnter = event.which === 13;
        if (isEnter) {
            this.submitSearch();
        }
    }

    submitSearch = () => {
        const { searchText } = this.state;
        if (searchText.length > 0) {
            CineEnvironment.getCine().cineState.handleSearch(searchText);
        }
    }

    handleToggleSearch = (event?: SyntheticEvent) => {
        const { active, searchText } = this.state;
        if (searchText.length === 0) {
            this.setState({
                active: !active
            }, () => {
                this.focusSearchInput();
            });
        } else {
            this.submitSearch();
        }
    };

    handleCancelSearch = (event: SyntheticEvent) => {
        const { searchText } = this.state;
        if (searchText.length > 0) {
            this.setState({
                searchText: ""
            });
            this.focusSearchInput();
        } else {
            this.setState({
                active: false
            });
        }
    };

    focusSearchInput = () => {
        if (this.searchInput.current != null) {
            this.searchInput.current.focus();
        }
    };

    render() {
        const { searchText, active } = this.state;

        const { placeholder } = CineEnvironment.getCine().cineUniversal.search;

        if (active || searchText.length > 0) {
            return (
                <div className="search-bar search-bar--open">
                    <button
                        className="search-bar__button"
                        onClick={this.handleToggleSearch}
                    >
                        <i className="search-bar__icon fa fa-search"></i>
                    </button>
                    <input
                        className="search-bar__input"
                        type="text"
                        placeholder={placeholder}
                        value={searchText}
                        onChange={this.handleUpdateText}
                        ref={this.searchInput}
                        onKeyDown={this.handleKeyDown}
                    />
                    <button
                        className="search-bar__button search-bar__button--close"
                        onClick={this.handleCancelSearch}
                    >
                        <i className="search-bar__icon fa fa-close"></i>
                    </button>
                </div>
            );
        }

        return (
            <div className="search-bar">
                <button
                    className="search-bar__button"
                    onClick={this.handleToggleSearch}
                >
                    <i className="search-bar__icon fa fa-search"></i>
                </button>
            </div>
        );
    }
}
