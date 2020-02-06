import React from 'react';
import './SearchBar.scss';

type SearchBarProps = {
    className: string;
};

export default class SearchBar extends React.Component<SearchBarProps> {
    constructor(props: SearchBarProps) {
        super(props);
    }

    render() {
        const { className } = this.props;
        return (
            <div className={className + " search_bar"}>
                <i className="search_bar__icon-glass fa fa-search"></i>
                <input className="search_bar__input" type="text" placeholder="Títulos, personas, géneros" />
                <i className="search_bar__icon-close fa fa-close"></i>
            </div>
        );
    }
}