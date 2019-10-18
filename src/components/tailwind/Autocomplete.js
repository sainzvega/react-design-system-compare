import React, {
  useState,
  useContext,
  useMemo,
  useRef,
  useEffect,
  useLayoutEffect,
  createContext
} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { scrollNodeIntoView } from "../_utils/scrollNodeIntoView";
import "../../styles/tailwind.css";

function wrapEvent(overrideHandler, defaultHandler) {
  return event => {
    overrideHandler && overrideHandler(event);
    if (!event.defaultPrevented) {
      defaultHandler(event);
    }
  };
}

const AutocompleteContext = createContext();
export const Autocomplete = ({
  children,
  onSelect,
  defaultValue = "",
  size = "base"
}) => {
  // ========== State Values ==========
  const [value, setValue] = useState(defaultValue);
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const [navigationIndex, setNavigationIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  // ========== Ref Values ==========
  const inputRef = useRef();
  const popoverRef = useRef();
  const optionsRef = useRef();
  const scrollNodeRef = useRef();
  const avoidScrollingRef = useRef(false);

  // ========== Context Value ==========
  const contextValue = useMemo(() => {
    return {
      value,
      setValue,
      navigationIndex,
      setNavigationIndex,
      selectedValue,
      setSelectedValue,
      isVisible,
      setIsVisible,
      onSelect,
      inputRef,
      popoverRef,
      optionsRef,
      scrollNodeRef,
      avoidScrollingRef,
      size
    };
  }, [
    value,
    setValue,
    selectedValue,
    setSelectedValue,
    navigationIndex,
    setNavigationIndex,
    isVisible,
    setIsVisible,
    onSelect,
    size
  ]);

  // ==========
  useLayoutEffect(() => {
    const { current: scrollNode } = scrollNodeRef;
    const { current: boundaryNode } = popoverRef;
    const { current: avoidScrolling } = avoidScrollingRef;
    if (scrollNode && !avoidScrolling) {
      scrollNodeIntoView(scrollNode, boundaryNode);
    }
    avoidScrollingRef.current = false;
  });

  const autocompleteClassName = classNames({
    "inline-block relative w-full font-sans": true,
    "text-sm": size === "small",
    "text-base": size === "base",
    "text-lg": size === "large"
  });
  return (
    <AutocompleteContext.Provider value={contextValue}>
      <div className={autocompleteClassName}>{children}</div>
    </AutocompleteContext.Provider>
  );
};

Autocomplete.propTypes = {
  children: PropTypes.node,
  defaultValue: PropTypes.string,
  onSelect: PropTypes.func
};

export const AutocompleteInput = ({
  onChange,
  onFocus,
  onBlur,
  onClick,
  onKeyDown,
  value: controlledValue,
  selectOnClick = true,
  ...rest
}) => {
  const {
    value,
    setValue,
    isVisible,
    setIsVisible,
    selectedValue,
    setSelectedValue,
    setNavigationIndex,
    inputRef,
    popoverRef,
    onSelect,
    size
  } = useContext(AutocompleteContext);

  // ========= Instance Vars ==========
  const isControlled = controlledValue != null;
  const selectOnClickRef = useRef(false);

  if (isControlled && controlledValue !== value) {
    handleValueChange(controlledValue);
  }

  // ========== Handlers ==========
  const handleKeyDown = useKeyDown();

  function handleValueChange(value) {
    if (value.trim() === "") {
      setValue("");
    } else {
      setValue(value);
    }
  }

  function handleChange(event) {
    if (!isControlled) {
      handleValueChange(event.target.value);
    }
    if (!isVisible) {
      setIsVisible(true);
    }
  }

  function handleFocus() {
    if (selectOnClick) {
      selectOnClickRef.current = true;
    }
  }

  function handleBlur() {
    setTimeout(function() {
      if (document.activeElement !== inputRef.current && popoverRef.current) {
        if (!popoverRef.current.contains(document.activeElement)) {
          if (value !== selectedValue) {
            onSelect && onSelect("");
            setValue("");
            setSelectedValue("");
          }
          setIsVisible(false);
          setNavigationIndex(null);
        }
      }
    }, 0);
  }

  function handleClick() {
    if (selectOnClickRef.current) {
      selectOnClickRef.current = false;
      inputRef.current.select();
    }
  }

  // =========== Render ==========
  const inputValue = controlledValue || value;
  const autoCompleteInputClassName = classNames({
    "w-full placeholder-gray-500 outline-none border rounded-sm border-gray-800 focus:border-blue-600 focus:bg-white": true,
    "h-5 px-1 py-2": size === "small",
    "h-6 px-2 py-4": size === "base",
    "h-7 p-2": size === "large"
  });
  return (
    <input
      {...rest}
      autoComplete="off"
      className={autoCompleteInputClassName}
      value={inputValue}
      onChange={wrapEvent(onChange, handleChange)}
      onFocus={wrapEvent(onFocus, handleFocus)}
      onBlur={wrapEvent(onBlur, handleBlur)}
      onClick={wrapEvent(onClick, handleClick)}
      onKeyDown={wrapEvent(onKeyDown, handleKeyDown)}
      ref={node => (inputRef.current = node)}
    />
  );
};

AutocompleteInput.propTypes = {
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  children: PropTypes.node,
  value: PropTypes.string,
  selectOnClick: PropTypes.bool
};

export const AutocompletePopover = ({ children, ...props }) => {
  const { isVisible, popoverRef } = useContext(AutocompleteContext);
  const hidden = !isVisible ? true : false;
  return (
    <div
      {...props}
      className="absolute border border-blue-600 left-0 right-0 border-t-0 rounded-b-sm focus:outline-none bg-white z-10 overflow-y-auto"
      tabIndex="-1"
      hidden={hidden}
      role="listbox"
      ref={node => (popoverRef.current = node)}
    >
      {children}
    </div>
  );
};

AutocompletePopover.propTypes = {
  children: PropTypes.node
};

export const AutocompleteList = ({ children }) => {
  const { optionsRef } = useContext(AutocompleteContext);

  useLayoutEffect(() => {
    optionsRef.current = [];
    return () => (optionsRef.current = []);
  });

  return <ul className="select-none">{children}</ul>;
};

AutocompleteList.propTypes = {
  children: PropTypes.node
};

export const AutocompleteOption = ({
  value,
  notValidOption = false,
  onClick,
  onMouseMove,
  children,
  ...props
}) => {
  const {
    setValue,
    setSelectedValue,
    selectedValue,
    setIsVisible,
    navigationIndex,
    setNavigationIndex,
    onSelect,
    optionsRef,
    scrollNodeRef,
    avoidScrollingRef,
    size
  } = useContext(AutocompleteContext);

  useEffect(() => {
    optionsRef.current.push(value);
  });

  function handleMouseMove() {
    const { current: options } = optionsRef;
    const index = options.indexOf(value);
    avoidScrollingRef.current = true;
    setNavigationIndex(options[index]);
  }

  function handleClick() {
    if (notValidOption) {
      return;
    }
    onSelect && onSelect(value);
    setValue(value);
    setSelectedValue(value);
    setIsVisible(false);
    setNavigationIndex(null);
  }

  // ========== Instance Vars ==========
  const isActive = navigationIndex === value;
  const isSelected = selectedValue === value;
  const className = classNames({
    "cursor-pointer": true,
    "text-white bg-blue-700": isActive,
    "p-1": size === "small" || size === "base",
    "p-2": size === "large"
  });

  return (
    <li
      {...props}
      ref={node => {
        if (isActive) scrollNodeRef.current = node;
      }}
      role="option"
      aria-current={isActive}
      aria-selected={isSelected}
      className={className}
      onClick={wrapEvent(onClick, handleClick)}
      onMouseMove={wrapEvent(onMouseMove, handleMouseMove)}
    >
      {value || children}
    </li>
  );
};

AutocompleteOption.propTypes = {
  value: PropTypes.string,
  notValidOption: PropTypes.bool,
  onClick: PropTypes.func,
  onMouseMove: PropTypes.func,
  children: PropTypes.node
};

function useKeyDown() {
  const {
    isVisible,
    navigationIndex,
    setValue,
    setIsVisible,
    setNavigationIndex,
    setSelectedValue,
    onSelect,
    optionsRef
  } = useContext(AutocompleteContext);

  return function handleKeyDown(event) {
    const { current: options } = optionsRef;
    switch (event.key) {
      case "ArrowDown": {
        event.preventDefault();
        if (!options || options.length === 0) {
          return;
        }

        if (!isVisible) {
          // Opening a closed list
          setIsVisible(true);
        } else {
          const index = options.indexOf(navigationIndex);
          const atBottom = index === options.length - 1;
          if (atBottom) {
            // cycle through
            const firstOption = options[0];
            setNavigationIndex(firstOption);
          } else {
            const nextValue = options[(index + 1) % options.length];
            setNavigationIndex(nextValue);
          }
        }
        return;
      }
      case "ArrowUp": {
        event.preventDefault();
        if (!options || options.length === 0) {
          return;
        }
        if (!isVisible) {
          // Opening a closed list
          setIsVisible(true);
        } else {
          const index = options.indexOf(navigationIndex);
          if (index === 0) {
            const lastOption = options[options.length - 1];
            setNavigationIndex(lastOption);
          } else if (index === -1) {
            // displaying the user's value, so go select the last one
            const value = options.length ? options[options.length - 1] : null;
            setNavigationIndex(value);
          } else {
            // normal case, select previous
            const nextValue =
              options[(index - 1 + options.length) % options.length];
            setNavigationIndex(nextValue);
          }
        }

        return;
      }
      case "Escape": {
        if (isVisible) {
          setNavigationIndex(null);
          setIsVisible(false);
        }
        return;
      }
      case "Enter": {
        event.preventDefault();
        if (isVisible && navigationIndex !== null) {
          // how to handle not valid options?
          onSelect && onSelect(navigationIndex);
          setValue(navigationIndex);
          setSelectedValue(navigationIndex);
          setNavigationIndex(null);
          setIsVisible(false);
        }
        return;
      }
      default: {
        return;
      }
    }
  };
}
