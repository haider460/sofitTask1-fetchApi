import React, { useState } from "react";
import { Input } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { searchDataActions } from "../actions/allActions";

import {
    Card,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Col,
    Row,
} from "reactstrap";

function SearchData() {
    const [inputData, setInputData] = useState("");
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.searchData);

    const navigate = useNavigate();

    const handleSearch = (value) => {
        dispatch(searchDataActions(value));
    };

    return (
        <div className="container">
            <span>
                <Input
                    value={inputData}
                    placeholder="Search Data"
                    type="text"
                    onChange={(e) => setInputData(e.target.value)}
                />
                <span>
                    {inputData && (
                        <button
                            className="btn btn-success"
                            onClick={() => handleSearch(inputData)}
                        >
                            search
                        </button>
                    )}
                </span>
            </span>
            <div>
                <Row>
                    {data["data"]?.map((data, index) => (
                        <Col sm="6" md={6} lg="4" key={data.id}>
                            <Card>
                                <CardBody>
                                    <CardTitle>{data.country}</CardTitle>
                                    <CardSubtitle>{data.city}e</CardSubtitle>
                                    <CardText>{data.phone}</CardText>
                                    <Button
                                        className="btn btn-info"
                                        onClick={() =>
                                            navigate(`/viewDetail/${data.id}`)
                                        }
                                    >
                                        View Details
                                    </Button>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
}

export default SearchData;
