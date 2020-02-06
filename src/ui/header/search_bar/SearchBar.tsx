import React from 'react';
import './SearchBar.scss';

type SearchBarProps = {
    className?: string;
};

export default class SearchBar extends React.Component<SearchBarProps> {
    render() {
        const { className } = this.props;
        const actualClassName = className == null ? 'search_bar' : className + ' search_bar';
        return (
            <div className={actualClassName}>
                <i className="search_bar__icon-glass fa fa-search"></i>
                <input className="search_bar__input" type="text" placeholder="Títulos, personas, géneros" />
                <i className="search_bar__icon-close fa fa-close"></i>
            </div>
        );
    }
}
