import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import debounce from 'lodash/debounce';

export default class AutoSuggestInput extends React.Component {
    static defaultProps = {
        suggestItems: []
    };
    static propTypes = {
        inputProps: PropTypes.object.isRequired,
        suggestItems: PropTypes.array,
        suggestItemRenderer: PropTypes.func,
        submitHandler: PropTypes.func,
        wordSelectHandler: PropTypes.func,
        closeSuggestPanelHandler: PropTypes.func
    };
    constructor(props) {
        super(props);
        this.input = null;
        this.suggestWordsPanel = null;
        this.activeWordRow = null;
        this.state = {
            selectionStart: 0,
            suggestWordIndex: 0
        };
        this.onInputBlurHandler = debounce(this.onInputBlurHandler.bind(this), 50);
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.suggestItems.length !== this.props.suggestItems.length || prevState.suggestWordIndex !== this.state.suggestWordIndex) {
            this.setSuggestWordsPanelScroll();
        }
    }
    getCurrentWordPrefix() {
        const firstPart = this.input.value.substring(0, this.input.selectionStart).replace(/^.*\s/, '');
        const secondPart = this.input.value.substring(this.input.selectionStart).replace(/^([^\s]*)(.*)$/, '$1');

        return firstPart + secondPart;
    }
    replaceCurrentWord(word) {
        let inputValue = this.input.value;
        let replacementOffset = this.state.selectionStart;
        inputValue = inputValue.substring(0, this.state.selectionStart).replace(/([^\s]+)$/, (match, p1, offset) => {
            let replacement = word;
            if (offset + p1.length < inputValue.length) {
                replacement += inputValue.substring(offset + p1.length).replace(/^([^\s]*)(.*)$/, '$2');
            }
            replacementOffset = offset + word.length;

            return replacement;
        });
        if (inputValue.length === 0) inputValue = word;

        this.input.value = inputValue;
        this.input.focus();
        this.input.setSelectionRange(replacementOffset, replacementOffset);
    }
    setSuggestWordsPanelScroll() {
        if (this.activeWordRow === null) {
            return;
        }
        const panelRect = this.suggestWordsPanel.getBoundingClientRect();
        const rowRect = this.activeWordRow.getBoundingClientRect();
        const rowTop = rowRect.top - panelRect.top;
        const rowBottom = rowTop + rowRect.height;
        if (rowTop < 0) {
            this.suggestWordsPanel.scrollTop += rowTop;
        }
        if (rowBottom > panelRect.height) {
            this.suggestWordsPanel.scrollTop += rowBottom - panelRect.height;
        }
    }
    onInputChangeHandler(e) {
        const wordPrefix = this.getCurrentWordPrefix();
        this.setState({
            selectionStart: e.target.selectionStart
        });
        if (this.props.inputProps.hasOwnProperty('onChange')) {
            this.props.inputProps.onChange(e.target.value, wordPrefix);
        }
    }
    onSuggestWordSelectHandler(item) {
        this.replaceCurrentWord(item);
        if (this.props.wordSelectHandler !== null) {
            this.props.wordSelectHandler(
                this.input.value,
                this.props.suggestItemRenderer(this.props.suggestItems[this.state.suggestWordIndex], this.state.suggestWordIndex)
            );
        }
    }
    onInputBlurHandler() {
        if (this.props.closeSuggestPanelHandler !== null) {
            // this.props.closeSuggestPanelHandler();
        }
    }
    onInputDownUpHandler(e) {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Enter') {
            const currentSuggestWordIndex = this.state.suggestWordIndex;
            e.preventDefault();
            e.stopPropagation();
            if (e.key === 'ArrowDown' && currentSuggestWordIndex + 1 < this.props.suggestItems.length) {
                this.setState({ suggestWordIndex: currentSuggestWordIndex + 1 });
            }
            if (e.key === 'ArrowUp' && currentSuggestWordIndex - 1 >= 0) {
                this.setState({ suggestWordIndex: currentSuggestWordIndex - 1 });
            }
            if (e.key === 'Enter') {
                if (this.props.suggestItems.length > 0 && currentSuggestWordIndex < this.props.suggestItems.length) {
                    this.onSuggestWordSelectHandler(this.props.suggestItemRenderer(this.props.suggestItems[currentSuggestWordIndex], currentSuggestWordIndex));
                } else if (this.props.submitHandler !== null) {
                    this.props.submitHandler(this.input.value);
                }
            }
        }
    }
    setInputValue(value) {
        if (this.input !== null) {
            this.input.value = value;
        }
    }
    renderInput() {
        const inputProps = {
            ...this.props.inputProps,
            onChange: this.onInputChangeHandler.bind(this),
            onBlur: this.onInputBlurHandler,
            onKeyDown: this.onInputDownUpHandler.bind(this),
            ref: input => { if (input !== null) this.input = input }
        };
        return React.createElement('input', inputProps);
    }
    renderSuggestionPanel() {
        this.activeWordRow = null;
        if (this.props.suggestItems.length === 0) {
            return null;
        }

        return this.props.suggestItems.map((item, i) => {
            if (this.props.suggestItemRenderer !== null) {
                item = this.props.suggestItemRenderer(item, i);
            }
            return (
                <div key={i}
                     className={cn('auto-suggest-row', { 'active': i === this.state.suggestWordIndex })}
                     onClick={this.onSuggestWordSelectHandler.bind(this, item)}
                     ref={div => { if (div !== null && i === this.state.suggestWordIndex) this.activeWordRow = div }}>
                    {item}
                </div>
            );
        });
    }
    render() {
        const icon = require('../../../../assets/img/search.svg')
        return (
            <div className={cn('auto-suggest-input-container', { 'auto-suggest-panel-open': this.props.suggestItems.length > 0 })}>
                <div className="icon" style={{ backgroundImage: `url(${icon})` }} />
                {this.renderInput()}
                <div className={cn('auto-suggest-panel', { 'close': this.props.suggestItems.length === 0 })}
                     ref={div => { if (div !== null) this.suggestWordsPanel = div }}>
                    {this.renderSuggestionPanel()}
                </div>
            </div>
        );
    }
}
