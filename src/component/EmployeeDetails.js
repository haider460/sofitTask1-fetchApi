import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ViewDataActions } from "../actions/allActions";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
    Card,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Col,
    Button,
} from "reactstrap";

function EmployeeDetails() {
    const navigate = useNavigate();
    const params = useParams();
    const empId = params.id;
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.viewData);
    const { searchData, loading } = useSelector((state) => state.searchData);

    useEffect(() => {
        dispatch(ViewDataActions(empId));
    }, [empId, dispatch]);

    return (
        <div className="cardStyle">
            <div className="container ">
                {searchData["data"]?.length > 0 ? (
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
                    <Col lg={6} md={6} sm={12}>
                        <Card>
                            <CardBody>
                                <CardTitle>
                                    {data["data"] && data["data"]["id"]}
                                    {data["data"] && data["data"]["name"]}
                                </CardTitle>
                                <CardSubtitle>
                                    Country :-{" "}
                                    {data["data"] && data["data"]["country"]}
                                </CardSubtitle>
                            </CardBody>
                            <iframe
                                title={data["data"] && data["data"]["id"]}
                                src={`https://maps.google.com/maps?q= + ${
                                    data["data"] && data["data"]["latitude"]
                                } +  ${
                                    data["data"] && data["data"]["longitude"]
                                }+ &t=&z=15&ie=UTF8&iwloc=&output=embed&zoom=15`}
                            />
                            <CardBody>
                                <CardText>
                                    City :-{" "}
                                    {data["data"] && data["data"]["city"]} |{" "}
                                    State :-{" "}
                                    {data["data"] && data["data"]["state"]}
                                </CardText>
                                <CardText>
                                    Phone.No :-{" "}
                                    {data["data"] && data["data"]["phone"]}
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                )}
            </div>
        </div>
    );
}

export default EmployeeDetails;
