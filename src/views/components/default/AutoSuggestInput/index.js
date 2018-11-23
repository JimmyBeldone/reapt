import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import debounce from "lodash/debounce";

import icon from "../../../../assets/img/search.svg";

export default class AutoSuggestInput extends React.Component {
    static defaultProps = {
        suggestItems: []
    };

    static propTypes = {
        inputProps: PropTypes.object.isRequired,
        suggestItems: PropTypes.array,
        suggestItemRenderer: PropTypes.func.isRequired,
        submitHandler: PropTypes.func.isRequired,
        wordSelectHandler: PropTypes.func.isRequired,
        closeSuggestPanelHandler: PropTypes.func.isRequired
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
        this.onInputBlurHandler = debounce(
            this.onInputBlurHandler.bind(this),
            50
        );
    }

    componentDidUpdate(prevProps, prevState) {
        const { suggestItems } = this.props;
        const { suggestWordIndex } = this.state;
        if (
            prevProps.suggestItems.length !== suggestItems.length ||
            prevState.suggestWordIndex !== suggestWordIndex
        ) {
            this.setSuggestWordsPanelScroll();
        }
    }

    getCurrentWordPrefix() {
        const firstPart = this.input.value
            .substring(0, this.input.selectionStart)
            .replace(/^.*\s/, "");
        const secondPart = this.input.value
            .substring(this.input.selectionStart)
            .replace(/^([^\s]*)(.*)$/, "$1");

        return firstPart + secondPart;
    }

    replaceCurrentWord(word) {
        const { selectionStart } = this.state;
        let inputValue = this.input.value;
        let replacementOffset = selectionStart;
        inputValue = inputValue
            .substring(0, selectionStart)
            .replace(/([^\s]+)$/, (match, p1, offset) => {
                let replacement = word;
                if (offset + p1.length < inputValue.length) {
                    replacement += inputValue
                        .substring(offset + p1.length)
                        .replace(/^([^\s]*)(.*)$/, "$2");
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
        const { inputProps } = this.props;
        const wordPrefix = this.getCurrentWordPrefix();
        this.setState({
            selectionStart: e.target.selectionStart
        });
        if (inputProps.hasOwnProperty("onChange")) {
            inputProps.onChange(e.target.value, wordPrefix);
        }
    }

    onSuggestWordSelectHandler(item) {
        const {
            wordSelectHandler,
            suggestItemRenderer,
            suggestItems
        } = this.props;
        const { suggestWordIndex } = this.state;

        this.replaceCurrentWord(item);

        if (wordSelectHandler !== null) {
            wordSelectHandler(
                this.input.value,
                suggestItemRenderer(
                    suggestItems[suggestWordIndex],
                    suggestWordIndex
                )
            );
        }
    }

    onInputBlurHandler() {
        const { closeSuggestPanelHandler } = this.props;
        if (closeSuggestPanelHandler !== null) {
            // this.props.closeSuggestPanelHandler();
        }
    }

    onInputDownUpHandler(e) {
        const { suggestWordIndex } = this.state;
        const { suggestItems, suggestItemRenderer, submitHandler } = this.props;
        if (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Enter") {
            const currentSuggestWordIndex = suggestWordIndex;
            e.preventDefault();
            e.stopPropagation();
            if (
                e.key === "ArrowDown" &&
                currentSuggestWordIndex + 1 < suggestItems.length
            ) {
                this.setState({
                    suggestWordIndex: currentSuggestWordIndex + 1
                });
            }
            if (e.key === "ArrowUp" && currentSuggestWordIndex - 1 >= 0) {
                this.setState({
                    suggestWordIndex: currentSuggestWordIndex - 1
                });
            }
            if (e.key === "Enter") {
                if (
                    suggestItems.length > 0 &&
                    currentSuggestWordIndex < suggestItems.length
                ) {
                    this.onSuggestWordSelectHandler(
                        suggestItemRenderer(
                            suggestItems[currentSuggestWordIndex],
                            currentSuggestWordIndex
                        )
                    );
                } else if (submitHandler !== null) {
                    submitHandler(this.input.value);
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
        const { inputProps } = this.props;
        const inputPropsCopy = {
            ...inputProps,
            onChange: this.onInputChangeHandler.bind(this),
            onBlur: this.onInputBlurHandler,
            onKeyDown: this.onInputDownUpHandler.bind(this),
            ref: input => {
                if (input !== null) this.input = input;
            }
        };
        return React.createElement("input", inputPropsCopy);
    }

    renderSuggestionPanel() {
        const { suggestItems, suggestItemRenderer } = this.props;
        const { suggestWordIndex } = this.state;

        this.activeWordRow = null;
        if (suggestItems.length === 0) {
            return null;
        }

        return suggestItems.map((item, i) => {
            if (suggestItemRenderer !== null) {
                item = suggestItemRenderer(item, i);
            }
            return (
                <div
                    key={i}
                    role="button"
                    tabIndex={i}
                    className={cn("auto-suggest-row", {
                        active: i === suggestWordIndex
                    })}
                    onClick={this.onSuggestWordSelectHandler.bind(this, item)}
                    ref={div => {
                        if (div !== null && i === suggestWordIndex)
                            this.activeWordRow = div;
                    }}
                >
                    {item}
                </div>
            );
        });
    }

    render() {
        const { suggestItems } = this.props;
        return (
            <div
                className={cn("auto-suggest-input-container", {
                    "auto-suggest-panel-open": suggestItems.length > 0
                })}
            >
                <div
                    className="icon"
                    style={{ backgroundImage: `url(${icon})` }}
                />
                {this.renderInput()}
                <div
                    className={cn("auto-suggest-panel", {
                        close: suggestItems.length === 0
                    })}
                    ref={div => {
                        if (div !== null) this.suggestWordsPanel = div;
                    }}
                >
                    {this.renderSuggestionPanel()}
                </div>
            </div>
        );
    }
}
