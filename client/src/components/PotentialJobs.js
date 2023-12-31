import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardFooter,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";

import ApplyToTask from "./ApplyToTask";

// const potentialJobsHandler =() => {
//     alert("you apply successfully")
// }

function PotentialJobs(props) {
  // let jobs = [];

  const [potentialJobs, setPotentialJobs] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));
  const aOI = user.areaOfInterest;

  useEffect(() => {
    const request = {
      action: "related jobs",
      areaOfInterest: aOI,
      userId: user.userId,
    };
    axios.post("https://vancomer.onrender.com/api/jobs/", request).then((repos) => {
      const data = repos.data;
      // setPotentialJobs(data.filter((job) => job.status === "searching"));
      setPotentialJobs(data);
    });
  }, []);

  return (
    <>
      <MDBCard alignment="center">
        <MDBCardHeader>Potential Jobs</MDBCardHeader>
        <MDBCardBody className="px-4 pt-4">
          <MDBRow className="row-cols-1 row-cols-md-2 gx-3">
            {potentialJobs.map((job, index) => (
              <MDBCol className="mb-4" key={index}>
                <MDBCard className="h-100">
                  <MDBCardBody>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <img
                          src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                          alt=""
                          style={{ width: "50px", height: "50px" }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p className="fw-bold mb-1"> {job.jobTitle}</p>
                          <p className="text-muted mb-0">
                            {job.jobDescription}
                          </p>
                        </div>
                      </div>
                    </div>
                  </MDBCardBody>
                  <MDBCardFooter
                    background="light"
                    border="0"
                    className="p-2 d-flex justify-content-around"
                  >
                    <ApplyToTask job={job} />
                  </MDBCardFooter>
                </MDBCard>
              </MDBCol>
            ))}
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </>

    // {/* <ListGroup.Item >
    //                 List all the potential Jobs here please
    //               </ListGroup.Item>
    //             </ListGroup>
    //         </Card.Body>
    //       </Card>
    //       <br />
    // </div>
  );
}

export default PotentialJobs;
