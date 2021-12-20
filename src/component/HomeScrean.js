import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDataAction } from "../actions/allActions";
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
import { useNavigate } from "react-router-dom";

function HomeScrean() {
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const { data, loading } = useSelector((state) => state.getData);
    const { searchData } = useSelector((state) => state.searchData);

    useEffect(() => {
        dispatch(getDataAction());
    }, [dispatch]);

    return (
        <div className="container-fluid">
            <Row>
                {loading ? (
                    <div class="d-flex justify-content-center">
                        <div class="spinner-border" role="status">
                            <span class="sr-only"></span>
                        </div>
                    </div>
                ) : searchData["data"]?.length > 0 ? (
                    searchData["data"]?.map((data, index) => (
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
                    ))
                ) : (
                    data["data"]?.map((data, index) => (
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
                    ))
                )}
            </Row>
        </div>
    );
}

export default HomeScrean;
