import { Card, CardBody, CardGroup, CardSubtitle, CardText, CardTitle } from "reactstrap"
import './Celebrations.css';

export const Celebrations = () => {

    return (
        <div className="celebrations">
            <h2 className="heading">January</h2>
            <CardGroup>
                <Card className="celebration-card">
                    <CardBody>
                        <CardTitle tag="h5">
                            Birthdays
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Happy Birthday!
                        </CardSubtitle>
                        <CardText>
                            <>
                                <p>5 - Feyra Archeron</p>
                                <p>27 - Cassian</p>
                                <p>29 - Rhysand</p>
                                <p>30 - Azriel</p>
                            </>
                        </CardText>

                    </CardBody>
                </Card>
                <Card className="celebration-card">
                    <CardBody>
                        <CardTitle tag="h5">
                            Workaversaries
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Thanks for Sticking with Us!
                        </CardSubtitle>
                        <CardText>
                            <>
                                <p>Amren - 300 years</p>
                            </>
                        </CardText>
                    </CardBody>
                </Card>
            </CardGroup>
        </div>
    )
}