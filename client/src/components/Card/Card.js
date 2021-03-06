import React from "react";
import { MDBCard, MDBCardTitle, MDBBtn, MDBCardGroup, MDBCardImage, MDBCardText, MDBCardBody } from "mdbreact";

function Card() {
    return (
        <MDBCardGroup>
            <MDBCard>
                <MDBCardImage src="https://mdbootstrap.com/img/Photos/Others/Images/49.jpg" alt="MDBCard image cap" top hover
                    overlay="white-slight" />
                <MDBCardBody>
                    <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
                    <MDBCardText>
                        Some quick example text to build on the card title and make up
                        the bulk of the card's content.
          </MDBCardText>
                    <MDBBtn color="primary" size="md">
                        read more
          </MDBBtn>
                </MDBCardBody>
            </MDBCard>
            <MDBCard>
                <MDBCardImage src="https://mdbootstrap.com/img/Photos/Others/Images/48.jpg" alt="MDBCard image cap" top hover
                    overlay="white-slight" />
                <MDBCardBody>
                    <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
                    <MDBCardText>
                        Some quick example text to build on the card title and make up
                        the bulk of the card's content.
          </MDBCardText>
                    <MDBBtn color="primary" size="md">
                        read more
          </MDBBtn>
                </MDBCardBody>
            </MDBCard>

            <MDBCard>
                <MDBCardImage src="https://mdbootstrap.com/img/Photos/Others/Images/77.jpg" alt="MDBCard image cap" top hover
                    overlay="white-slight" />
                <MDBCardBody>
                    <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
                    <MDBCardText>
                        Some quick example text to build on the card title and make up
                        the bulk of the card's content.
          </MDBCardText>
                    <MDBBtn color="primary" size="md">
                        read more
          </MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBCardGroup>
    );
}
export default Card;