import React, { useRef, useCallback, useState, useEffect } from "react";
import { FiBold } from "react-icons/fi";
import { GoItalic } from "react-icons/go";
import { BsTypeUnderline } from "react-icons/bs";
import { GoStrikethrough } from "react-icons/go";
import { FaListOl, FaListUl } from "react-icons/fa";
import IkRichEditorStyle from "./IkRichEditorStyle";

const IkRichEditor = ({ config, onContentChange }) => {
  const editorRef = useRef();
  const [isPlaceholderVisible, setIsPlaceholderVisible] = useState(true);
  const [isBoldActive, setIsBoldActive] = useState(false);
  const [isItalicActive, setIsItalicActive] = useState(false);
  const [isUnderlineActive, setIsUnderlineActive] = useState(false);
  const [isStrikeThroughActive, setIsStrikeThroughActive] = useState(false);
  const [isOrderedListActive, setIsOrderedListActive] = useState(false);
  const [isUnorderedListActive, setIsUnorderedListActive] = useState(false);

  const handleContentChange = () => {
    const content = editorRef.current.innerHTML.trim();
    setIsPlaceholderVisible(
      content === "" && !editorRef.current.contains(document.activeElement)
    );
    onContentChange && onContentChange(content); // Pass content here

    // Dynamically adjust the height of the contenteditable div based on content
    editorRef.current.style.height = "auto";
    editorRef.current.style.height = `${Math.min(
      editorRef.current.scrollHeight,
      400
    )}px`;
  };

  useEffect(() => {
    const handleFocus = () => {
      setIsPlaceholderVisible(false);
    };

    const handleBlur = () => {
      handleContentChange();
    };

    const handleSelect = () => {
      setIsBoldActive(document.queryCommandState("bold"));
      setIsItalicActive(document.queryCommandState("italic"));
      setIsUnderlineActive(document.queryCommandState("underline"));
      setIsStrikeThroughActive(document.queryCommandState("strikethrough"));
      setIsOrderedListActive(document.queryCommandState("insertorderedlist"));
      setIsUnorderedListActive(
        document.queryCommandState("insertunorderedlist")
      );
    };

    editorRef.current.addEventListener("input", handleContentChange);
    editorRef.current.addEventListener("focus", handleFocus);
    editorRef.current.addEventListener("blur", handleBlur);
    editorRef.current.addEventListener("select", handleSelect);

    return () => {
      // editorRef.current.removeEventListener('input', handleContentChange);
      // editorRef.current.removeEventListener('focus', handleFocus);
      // editorRef.current.removeEventListener('blur', handleBlur);
      // editorRef.current.removeEventListener('select', handleSelect);
    };
  }, [isOrderedListActive, isUnorderedListActive]);

  const handleBold = useCallback(() => {
    document.execCommand("bold", false, null);
    setIsBoldActive(!isBoldActive);
  }, [isBoldActive]);

  const handleItalic = useCallback(() => {
    document.execCommand("italic", false, null);
    setIsItalicActive(!isItalicActive);
  }, [isItalicActive]);

  const handleUnderline = useCallback(() => {
    document.execCommand("underline", false, null);
    setIsUnderlineActive(!isUnderlineActive);
  }, [isUnderlineActive]);

  const handleStrikeThrough = useCallback(() => {
    document.execCommand("strikethrough", false, null);
    setIsStrikeThroughActive(!isStrikeThroughActive);
  }, [isStrikeThroughActive]);

  const handleOrderedList = useCallback(() => {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const selectedNode = range.commonAncestorContainer;

    if (selectedNode && selectedNode.nodeType === 1) {
      const parentList = selectedNode.closest("ol");

      if (parentList) {
        const listItems = parentList.querySelectorAll("li");
        const ol = document.createElement("ol");

        listItems.forEach((item) => {
          const newListItem = document.createElement("li");

          const contentWithoutBullet = item.textContent.replace(
            /^\s*\d+\.\s*/,
            ""
          );
          newListItem.innerHTML = contentWithoutBullet.trim();
          ol.appendChild(newListItem);
        });

        parentList.parentNode.replaceChild(ol, parentList);
        setIsOrderedListActive(false);
        setIsUnorderedListActive(false);
      } else {
        document.execCommand("insertorderedlist", false, null);
        setIsOrderedListActive(!isOrderedListActive);
        setIsUnorderedListActive(false);
      }
    } else {
      document.execCommand("insertorderedlist", false, null);
      setIsOrderedListActive(!isOrderedListActive);
      setIsUnorderedListActive(false);
    }
  }, [isOrderedListActive]);

  const handleUnorderedList = useCallback(() => {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const selectedNode = range.commonAncestorContainer;

    if (selectedNode && selectedNode.nodeType === 1) {
      const parentList = selectedNode.closest("ol");

      if (parentList) {
        const listItems = parentList.querySelectorAll("li");
        const ul = document.createElement("ul");

        listItems.forEach((item) => {
          const bullet = "\u2022";
          const newListItem = document.createElement("li");
          newListItem.dataset.bullet = bullet;

          const contentWithoutNumbers = item.textContent.replace(
            /^\s*\d+\.\s*/,
            ""
          );
          newListItem.innerHTML = `<span data-bullet>${bullet}</span>${contentWithoutNumbers.trim()}`;
          ul.appendChild(newListItem);
        });

        parentList.parentNode.replaceChild(ul, parentList);
        setIsUnorderedListActive(true);
        setIsOrderedListActive(false);
      } else {
        document.execCommand("insertunorderedlist", false, null);
        setIsUnorderedListActive(!isUnorderedListActive);
        setIsOrderedListActive(false);
      }
    } else {
      document.execCommand("insertunorderedlist", false, null);
      setIsUnorderedListActive(!isUnorderedListActive);
      setIsOrderedListActive(false);
    }
  }, [isUnorderedListActive]);

  const handleListChange = useCallback(() => {
    const listItems = editorRef.current.querySelectorAll("ol > li, ul > li");

    listItems.forEach((item, index) => {
      const existingBullet = item.querySelector("span[data-bullet]");
      const spanElement = existingBullet || document.createElement("span");

      if (isUnorderedListActive) {
        spanElement.dataset.bullet = "\u2022";
        item.style.listStyleType = "none";
      } else if (isOrderedListActive) {
        spanElement.dataset.bullet = index + 1 + ".";
        item.style.listStyleType = "decimal";
      } else {
        spanElement.dataset.bullet = "";
        item.style.listStyleType = "";
      }

      if (!existingBullet) {
        spanElement.className = isUnorderedListActive ? "bullet" : "";
        item.insertBefore(spanElement, item.firstChild);
      }
      spanElement.contentEditable = "false";
    });
  }, [isUnorderedListActive, isOrderedListActive]);

  useEffect(() => {
    handleListChange();
  }, [isOrderedListActive, isUnorderedListActive]);

  return (
    <div className="">
      {config.map((item, index) => (
        <div key={index} className="">
          <div className={IkRichEditorStyle[item.titlecss]}>
            <label htmlFor="">{item.title}</label>
          </div>
          <div
            className={`container mt-1 border border-gray-off ${
              IkRichEditorStyle[item.mainContainer]
            }`}
          >
            <div className="relative">
              <div
                ref={editorRef}
                className={` ${IkRichEditorStyle[item.container]}${
                  isOrderedListActive ? "ordered-list" : ""
                } ${isUnorderedListActive ? "unordered-list" : ""}`}
                contentEditable
                style={{
                  border: isPlaceholderVisible ? "none" : "none",
                  outline: isPlaceholderVisible ? "none" : "1px solid gray",
                  minHeight: item.hight ? item.hight : "50px",
                }}
              />
              {isPlaceholderVisible && (
                <div className="absolute top-3 text-xs left-3 text-gray-medium pointer-events-none">
                  {item.placeholder}
                </div>
              )}
            </div>
            <div className={IkRichEditorStyle[item.iconsContainer]}>
              <button
                type="button"
                className={`text-black px-2 mr-1 ${
                  isBoldActive ? "bg-gray-off " : ""
                }`}
                onClick={handleBold}
              >
                <FiBold />
              </button>
              <button
                type="button"
                className={`text-black px-2 mr-1 ${
                  isItalicActive ? "bg-gray-off " : ""
                }`}
                onClick={handleItalic}
              >
                <GoItalic />
              </button>
              <button
                type="button"
                className={`text-black px-2 mr-1 ${
                  isUnderlineActive ? "bg-gray-off" : ""
                }`}
                onClick={handleUnderline}
              >
                <BsTypeUnderline />
              </button>
              <button
                type="button"
                className={`text-black px-2 mr-1 ${
                  isStrikeThroughActive ? "bg-gray-off" : ""
                }`}
                onClick={handleStrikeThrough}
              >
                <GoStrikethrough />
              </button>
              <button
                type="button"
                className={`text-black px-1.5 h-6 w-7 items-center mr-1 ${
                  isOrderedListActive ? "bg-gray-off" : ""
                }`}
                onClick={handleOrderedList}
              >
                <FaListOl />
              </button>
              <button
                type="button"
                className={`text-black px-2 mr-1 ${
                  isUnorderedListActive ? "bg-gray-off" : ""
                }`}
                onClick={handleUnorderedList}
              >
                <FaListUl />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IkRichEditor;
