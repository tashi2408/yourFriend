import React from "react";
import Nav from "../Navbar/Nav.js";
import Footer from "../footer/Footer.js";
import {
  MDBJumbotron,
  MDBContainer,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";
import "./Campaign.css";

function Campaign() {
  return (
    <div>
      <div className="pagenavcss">
        <Nav />
      </div>
      <div className="campaignheadcss">
        <MDBJumbotron fluid>
          <MDBContainer>
            <h2 className="display-4 text-center">CAMPAIGNS</h2>
            <p className="lead text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </MDBContainer>
        </MDBJumbotron>
      </div>

      <div className="campaignmaincss">
        <MDBCol>
          <MDBCard style={{ width: "80rem" }} className="margincardcampaigncss">
            <img
              className="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
              style={{ height: "20rem" }}
            />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
                nunc mi ipsum faucibus vitae aliquet nec. Felis bibendum ut
                tristique et egestas. Nisi est sit amet facilisis magna etiam.
                Velit ut tortor pretium viverra suspendisse potenti. Turpis
                egestas integer eget aliquet nibh praesent tristique. Enim neque
                volutpat ac tincidunt vitae semper quis lectus. Enim tortor at
                auctor urna nunc id cursus. Ullamcorper dignissim cras tincidunt
                lobortis feugiat vivamus. Nunc sed blandit libero volutpat sed
                cras ornare arcu dui. Gravida cum sociis natoque penatibus et
                magnis dis parturient montes. Cras sed felis eget velit aliquet
                sagittis id consectetur purus. Suspendisse ultrices gravida
                dictum fusce ut placerat orci nulla pellentesque. Elit duis
                tristique sollicitudin nibh. Tellus pellentesque eu tincidunt
                tortor aliquam nulla facilisi cras fermentum. Etiam dignissim
                diam quis enim. Sagittis orci a scelerisque purus. Id donec
                ultrices tincidunt arcu. Interdum velit laoreet id donec.
                Pellentesque sit amet porttitor eget dolor morbi. Quis viverra
                nibh cras pulvinar mattis nunc. Elementum integer enim neque
                volutpat ac tincidunt. Fringilla phasellus faucibus scelerisque
                eleifend donec pretium vulputate. Purus sit amet volutpat
                consequat mauris nunc congue nisi. Orci phasellus egestas tellus
                rutrum tellus pellentesque eu tincidunt tortor. At urna
                condimentum mattis pellentesque id nibh tortor id aliquet. Nisi
                lacus sed viverra tellus in hac. Lorem ipsum dolor sit amet
                consectetur adipiscing elit pellentesque habitant. Mauris augue
                neque gravida in fermentum et sollicitudin. Tempor nec feugiat
                nisl pretium fusce id. Ipsum dolor sit amet consectetur.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>

          <MDBCard style={{ width: "80rem" }} className="margincardcampaigncss">
            <img
              className="img-fluid"
              src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
              style={{ height: "20rem" }}
            />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
                nunc mi ipsum faucibus vitae aliquet nec. Felis bibendum ut
                tristique et egestas. Nisi est sit amet facilisis magna etiam.
                Velit ut tortor pretium viverra suspendisse potenti. Turpis
                egestas integer eget aliquet nibh praesent tristique. Enim neque
                volutpat ac tincidunt vitae semper quis lectus. Enim tortor at
                auctor urna nunc id cursus. Ullamcorper dignissim cras tincidunt
                lobortis feugiat vivamus. Nunc sed blandit libero volutpat sed
                cras ornare arcu dui. Gravida cum sociis natoque penatibus et
                magnis dis parturient montes. Cras sed felis eget velit aliquet
                sagittis id consectetur purus. Suspendisse ultrices gravida
                dictum fusce ut placerat orci nulla pellentesque. Elit duis
                tristique sollicitudin nibh. Tellus pellentesque eu tincidunt
                tortor aliquam nulla facilisi cras fermentum. Etiam dignissim
                diam quis enim. Sagittis orci a scelerisque purus. Id donec
                ultrices tincidunt arcu. Interdum velit laoreet id donec.
                Pellentesque sit amet porttitor eget dolor morbi. Quis viverra
                nibh cras pulvinar mattis nunc. Elementum integer enim neque
                volutpat ac tincidunt. Fringilla phasellus faucibus scelerisque
                eleifend donec pretium vulputate. Purus sit amet volutpat
                consequat mauris nunc congue nisi. Orci phasellus egestas tellus
                rutrum tellus pellentesque eu tincidunt tortor. At urna
                condimentum mattis pellentesque id nibh tortor id aliquet. Nisi
                lacus sed viverra tellus in hac. Lorem ipsum dolor sit amet
                consectetur adipiscing elit pellentesque habitant. Mauris augue
                neque gravida in fermentum et sollicitudin. Tempor nec feugiat
                nisl pretium fusce id. Ipsum dolor sit amet consectetur.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>

          <MDBCard style={{ width: "80rem" }} className="margincardcampaigncss">
            <img
              className="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
              style={{ height: "20rem" }}
            />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
                nunc mi ipsum faucibus vitae aliquet nec. Felis bibendum ut
                tristique et egestas. Nisi est sit amet facilisis magna etiam.
                Velit ut tortor pretium viverra suspendisse potenti. Turpis
                egestas integer eget aliquet nibh praesent tristique. Enim neque
                volutpat ac tincidunt vitae semper quis lectus. Enim tortor at
                auctor urna nunc id cursus. Ullamcorper dignissim cras tincidunt
                lobortis feugiat vivamus. Nunc sed blandit libero volutpat sed
                cras ornare arcu dui. Gravida cum sociis natoque penatibus et
                magnis dis parturient montes. Cras sed felis eget velit aliquet
                sagittis id consectetur purus. Suspendisse ultrices gravida
                dictum fusce ut placerat orci nulla pellentesque. Elit duis
                tristique sollicitudin nibh. Tellus pellentesque eu tincidunt
                tortor aliquam nulla facilisi cras fermentum. Etiam dignissim
                diam quis enim. Sagittis orci a scelerisque purus. Id donec
                ultrices tincidunt arcu. Interdum velit laoreet id donec.
                Pellentesque sit amet porttitor eget dolor morbi. Quis viverra
                nibh cras pulvinar mattis nunc. Elementum integer enim neque
                volutpat ac tincidunt. Fringilla phasellus faucibus scelerisque
                eleifend donec pretium vulputate. Purus sit amet volutpat
                consequat mauris nunc congue nisi. Orci phasellus egestas tellus
                rutrum tellus pellentesque eu tincidunt tortor. At urna
                condimentum mattis pellentesque id nibh tortor id aliquet. Nisi
                lacus sed viverra tellus in hac. Lorem ipsum dolor sit amet
                consectetur adipiscing elit pellentesque habitant. Mauris augue
                neque gravida in fermentum et sollicitudin. Tempor nec feugiat
                nisl pretium fusce id. Ipsum dolor sit amet consectetur.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </div>

      <Footer />
    </div>
  );
}

export default Campaign;
