import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchDataActions, sugestDataActions } from "../actions/allActions";

function Header() {
    const [inputData, setInputData] = useState("");
    const dispatch = useDispatch();
    const { searchData1 } = useSelector((state) => state.sugeSlice);

    const [sugestions, setSugestions] = useState([]);

    const handleChange = (value) => {
        dispatch(sugestDataActions(value));

        setInputData(value);
    };

    const handleKeyDown = (value) => {
        console.log("**** in keyDown function", value);
        dispatch(searchDataActions(value));

        setInputData("");
        setSugestions([]);
    };
    const handleSpecificElement = (e) => {
        dispatch(searchDataActions(e));
        setSugestions([]);
        setInputData("");
    };

    useEffect(() => {
        setSugestions(searchData1["data"]);
    }, [searchData1]);

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid navbarContainer ">
                    <a class="navbar-brand" href="/">
                        Navbar
                    </a>
                    <div className="search">
                        <input
                            onKeyDown={(e) =>
                                e.key === "Enter" && handleKeyDown(inputData)
                            }
                            class="form-control me-2 inputFeild"
                            type="search"
                            placeholder="Search"
                            value={inputData}
                            aria-label="Search"
                            onChange={(e) => handleChange(e.target.value)}
                        />
                        <ul class="list-group">
                            {sugestions?.length > 0 &&
                                sugestions?.map((data) => (
                                    <li
                                        class="list-group-item item"
                                        onClick={() =>
                                            handleSpecificElement(data.name)
                                        }
                                    >
                                        {data.name}
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
