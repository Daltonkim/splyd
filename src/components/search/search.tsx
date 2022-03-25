import { useState } from "react";

export const Search = () => {
    const [text, setText] = useState("");

    const onSubmit = evt => {
      evt.preventDefault();
      if (text === "") {
        alert("Please enter something!");
      } else {
        alert(text);
        setText("");
      }
    };
    const onChange = evt => setText(evt.target.value);

    return (
        <div className="search">
            <div className="search-inputs">
                <form onSubmit={onSubmit}>
                    <input
                        type="text"
                        name="text"
                        placeholder="Search supplier name, CR number"
                        value={text}
                        onChange={onChange}
                        className="bg-white p-2 w-3/4 outline-none"
                    />
                    <button type="submit" className="p-2 text-center text-blue-500 w-1/4 bg-white border-l">
                    <i className="fas fa-search"></i>                    </button>
                </form>
            </div>
            <div className="search-submit">
                <div className="search-submit-input">
                    <button className="with-icon"><i className="fas fa-plus"></i>New Project</button>
                </div>
            </div>
        </div>
    );

}