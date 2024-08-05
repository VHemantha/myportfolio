import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { styled } from '@mui/material/styles';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';


const Root = styled('div')({  
  position: 'relative',
  minHeight: '80vh',
  overflow: 'hidden',
  paddingTop: '20px', // Add padding to accommodate NavBar height
});

const AnimatedCard = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    config: { mass: 1, tension: 80, friction: 26 },
  });

  return (
    <animated.div ref={ref} style={animation}>
      {children}
    </animated.div>
  );
};

function Resume() {
  return (
    <Root>
      <Container>
      <h3 className="mt-4">Work Experience</h3>
        <Row>
          <Col>
          <AnimatedCard>
          <Card className="mb-3">
                  <Card.Header className="p-3 d-flex justify-content-between align-items-center">
                    <Card.Title className="m-0">Senior RPA Developer</Card.Title>
                    <Card.Subtitle className="text-muted">
                      Claude Shannon Paper to Pixels Sdn. Bhd | Malaysia | Sep2023-Present
                    </Card.Subtitle>
                  </Card.Header>
                <Card.Body>
                  <ListGroup as="ol" numbered>
                    <ListGroup.Item>Develop complex RPA processes using Open RPA,UI path,Cyclone Robotics and Automation Anywhere enhancing operational efficiency.</ListGroup.Item>
                    <ListGroup.Item>Implement robust RPA solutions, driving significant process improvements.</ListGroup.Item>
                    <ListGroup.Item>Maintain and test RPA solutions, ensuring optimal performance and reliability</ListGroup.Item>
                    <ListGroup.Item>Perform regular updates and modifications to existing RPA processes, ensuring they adapt to newbusinessrequirements.</ListGroup.Item>
                    <ListGroup.Item>Leverage Automation Anywhere to develop innovative RPA processes, boosting productivity.</ListGroup.Item>
                    <ListGroup.Item>Utilize Cyclone Robotics for RPA process development, enhancing automation capabilities.</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
              </AnimatedCard>
              <AnimatedCard>
              <Card className="mb-3">
                <Card.Header className="p-3 d-flex justify-content-between align-items-center">
                    <Card.Title className="m-0">Deputy analyst - F & A</Card.Title>
                    <Card.Subtitle className="text-muted">
                    Accenture | Jaela, Sri Lanka | Mar 2020-Sep2023
                    </Card.Subtitle>
                  </Card.Header>
                <Card.Body>
                  <ListGroup as="ol" numbered>
                    <ListGroup.Item>Coordinated with various teams to finalize month-end closure and complete consolidated accounts.</ListGroup.Item>
                    <ListGroup.Item>Reviewed financial statements monthly, identifying and addressing discrepancies.</ListGroup.Item>
                    <ListGroup.Item>Conducted automation projects, driving significant process improvements across the organization</ListGroup.Item>
                    <ListGroup.Item>Processed journal entries and handled payroll accounting, maintaining financial accuracy.</ListGroup.Item>
                    <ListGroup.Item>Prepared monthly balance sheets and ad hoc management reports, providing critical financial insights.</ListGroup.Item>
                    <ListGroup.Item>Handled internal and external audits, ensuring compliance and providing necessary information toauditors</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
              </AnimatedCard>
              <AnimatedCard>
              <Card className="mb-3">
                <Card.Header className="p-3 d-flex justify-content-between align-items-center">
                    <Card.Title className="m-0">Associate Engineer - RPA</Card.Title>
                    <Card.Subtitle className="text-muted">
                    Sampath IT Solutions Ltd | Colombo, Sri Lanka | Mar 2019-Oct 2019
                    </Card.Subtitle>
                  </Card.Header>
                <Card.Body>
                  <ListGroup as="ol" numbered>
                    <ListGroup.Item> Developed and deployed RPA solutions, improving business processes and efficiency</ListGroup.Item>
                    <ListGroup.Item>Collaborated with cross-functional teams to identify opportunities for automation</ListGroup.Item>
                    <ListGroup.Item>Maintained and optimized existing RPA solutions, ensuring their effectiveness and reliability.</ListGroup.Item>
                    <ListGroup.Item>Provided technical support for RPA solutions, resolving issues promptly.</ListGroup.Item>
                    <ListGroup.Item>Participated in RPA project planning and implementation, contributing to successful project completion</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
              </AnimatedCard>
              <AnimatedCard>
              <Card className="mb-3">
                <Card.Header className="p-3 d-flex justify-content-between align-items-center">
                    <Card.Title className="m-0">Management Trainee - RPA</Card.Title>
                    <Card.Subtitle className="text-muted">
                    Ernst & Young | Colombo, Sri Lanka | Mar 2018-Mar2019
                    </Card.Subtitle>
                  </Card.Header>
                <Card.Body>
                  <ListGroup as="ol" numbered>
                    <ListGroup.Item>Conducted feasibility studies to assess the suitability of processes for automation</ListGroup.Item>
                    <ListGroup.Item>Assisted in the design and development of automation workflows under senior guidance.</ListGroup.Item>
                    <ListGroup.Item>Participated in user acceptance testing of automated processes, ensuring they meet requirements</ListGroup.Item>
                    <ListGroup.Item>Contributed to the documentation of RPA processes, enhancing knowledge management</ListGroup.Item>
                    <ListGroup.Item>Supported change management activities related to the implementation of RPA solutions.</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
              </AnimatedCard>
              <AnimatedCard>
              <Card className="mb-3">
                <Card.Header className="p-3 d-flex justify-content-between align-items-center">
                    <Card.Title className="m-0">Accounts Executive</Card.Title>
                    <Card.Subtitle className="text-muted">
                    Asiri Health | Colombo, Sri Lanka | Aug 2017-Mar2018
                    </Card.Subtitle>
                  </Card.Header>
                <Card.Body>
                  <ListGroup as="ol" numbered>
                    <ListGroup.Item>Managed patient billing and collections, improving revenue cycle efficiency</ListGroup.Item>
                    <ListGroup.Item>Prepared and analyzed financial reports, ensuring accuracy and compliance.</ListGroup.Item>
                    <ListGroup.Item>Handled payroll processing and benefits administration, enhancing employee satisfaction</ListGroup.Item>
                    <ListGroup.Item>Coordinated with insurance companies for claim settlements, reducing payment delays</ListGroup.Item>
                    <ListGroup.Item>Implemented financial policies and procedures, promoting fiscal responsibility and transparency</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
              </AnimatedCard>
              <AnimatedCard>
              <Card className="mb-3">
                <Card.Header className="p-3 d-flex justify-content-between align-items-center">
                    <Card.Title className="m-0">Accounting Associate</Card.Title>
                    <Card.Subtitle className="text-muted">
                    Accenture | Jaela, Sri Lanka | Jul 2015-Jul 2017
                    </Card.Subtitle>
                  </Card.Header>
                <Card.Body>
                  <ListGroup as="ol" numbered>
                    <ListGroup.Item>Assisted in the preparation of budgets and financial forecasts, contributing to financial planning.</ListGroup.Item>
                    <ListGroup.Item>Performed bank reconciliations, ensuring the accuracy of financial records.</ListGroup.Item>
                    <ListGroup.Item>Managed vendor relationships, processing payments promptly.</ListGroup.Item>
                    <ListGroup.Item>Participated in internal audits, helping to ensure financial compliance.</ListGroup.Item>
                    <ListGroup.Item>Supported the month-end and year-end close process, ensuring timely reporting.</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
              </AnimatedCard>
              <AnimatedCard>
              <Card className="mb-3">
                <Card.Header className="p-3 d-flex justify-content-between align-items-center">
                    <Card.Title className="m-0">Account clerk</Card.Title>
                    <Card.Subtitle className="text-muted">
                    Nelna Farm Pvt Ltd | Gampaha, Sri Lanka | Apr 2012-May2013
                    </Card.Subtitle>
                  </Card.Header>
                <Card.Body>
                  <ListGroup as="ol" numbered>
                    <ListGroup.Item>Processed invoices and expense reports, ensuring timely payments.</ListGroup.Item>
                    <ListGroup.Item>Assisted in the preparation of financial statements, supporting transparency</ListGroup.Item>
                    <ListGroup.Item>Maintained accurate financial records, contributing to efficient operations.</ListGroup.Item>
                    <ListGroup.Item>Managed data entry tasks for accounting transactions, ensuring accuracy.</ListGroup.Item>
                    <ListGroup.Item>Supported the reconciliation of bank statements, verifying transaction details.</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
              </AnimatedCard>
          </Col>
        </Row>
        <h3 className="mt-4">Education</h3>
        <Row>
          <Col>
          <AnimatedCard>
            <Card className="mb-3">
            <Card.Header className="p-3 d-flex justify-content-between align-items-center">
              <Card.Title className="m-0">CA Finalist</Card.Title>
                <Card.Subtitle className="text-muted">Institute of chartered Accountants of sri lanka | 2022</Card.Subtitle>
              </Card.Header>
            </Card>
            </AnimatedCard>
            <AnimatedCard>
            <Card className="mb-3">
              <Card.Header className="p-3 d-flex justify-content-between align-items-center">
              <Card.Title className="m-0">AAT Passed Finalist</Card.Title>
                <Card.Subtitle className="text-muted">AAT sri lanka | 2013</Card.Subtitle>
              </Card.Header>
            </Card>
            </AnimatedCard>
            <AnimatedCard>
            <Card className="mb-3">
              <Card.Header className="p-3 d-flex justify-content-between align-items-center">
              <Card.Title className="m-0">G C E Advanced Level Examination (Commerce Stream)</Card.Title>
                <Card.Subtitle className="text-muted">Department of Examinations | Sri Lanka|2011</Card.Subtitle>
              </Card.Header>
            </Card>
            </AnimatedCard>
          </Col>
        </Row>
        <h3 className="mt-4">Certifications & Badges</h3>
        <Row>
          <Col>
          <AnimatedCard>
            <Card className="mb-3">
              <Card.Header className="p-3 d-flex justify-content-between align-items-center">
              <Card.Title className="m-0">IBM AI Engineering Professional Certificate (V2)</Card.Title>
                <Card.Subtitle className="text-muted">Coursera|2022</Card.Subtitle>
              </Card.Header>
            </Card>
            </AnimatedCard>
            <AnimatedCard>
            <Card className="mb-3">
            <Card.Header className="p-3 d-flex justify-content-between align-items-center">
              <Card.Title className="m-0">Machine learning A-Z hands-on Python and in R data science (Credential ID: 0004)</Card.Title>
                <Card.Subtitle className="text-muted">Udemy|2022</Card.Subtitle>
              </Card.Header>
            </Card>
            </AnimatedCard>
            <AnimatedCard>
            <Card className="mb-3">
              <Card.Header className="p-3 d-flex justify-content-between align-items-center">
              <Card.Title className="m-0">CS50X Certification</Card.Title>
                <Card.Subtitle className="text-muted">Harvard University|2022</Card.Subtitle>
              </Card.Header>
            </Card>
            </AnimatedCard>
            <AnimatedCard>
            <Card className="mb-3">
              <Card.Header className="p-3 d-flex justify-content-between align-items-center">
              <Card.Title className="m-0">Professional Certificate In Front-End Development</Card.Title>
                <Card.Subtitle className="text-muted">Coursera|2024</Card.Subtitle>
              </Card.Header>
            </Card>
            </AnimatedCard>
            <AnimatedCard>
            <Card className="mb-3">
              <Card.Header className="p-3 d-flex justify-content-between align-items-center">
              <Card.Title className="m-0">AWS Machine Learning Foundations</Card.Title>
                <Card.Subtitle className="text-muted">Udacity|2022</Card.Subtitle>
              </Card.Header>
            </Card>
            </AnimatedCard>
            <AnimatedCard>
            <Card className="mb-3">
              <Card.Header className="p-3 d-flex justify-content-between align-items-center">
              <Card.Title className="m-0">Tensorflow Advanced Techniques Specialization</Card.Title>
                <Card.Subtitle className="text-muted">Coursera|2024</Card.Subtitle>
              </Card.Header>
            </Card>
            </AnimatedCard>
            <AnimatedCard>
            <Card className="mb-3">
              <Card.Header className="p-3 d-flex justify-content-between align-items-center">
              <Card.Title className="m-0">Algebra & Differential Calculus for Data Science</Card.Title>
                <Card.Subtitle className="text-muted">Coursera|2024</Card.Subtitle>
              </Card.Header>
            </Card>
            </AnimatedCard>
            <AnimatedCard>
            <Card className="mb-3">
              <Card.Header className="p-3 d-flex justify-content-between align-items-center">
              <Card.Title className="m-0">Prepare Data for Exploration (Credential ID: LPS24SMHJPBD)</Card.Title>
                <Card.Subtitle className="text-muted">Coursera|2023</Card.Subtitle>
              </Card.Header>
            </Card>
            </AnimatedCard>
            <AnimatedCard>
            <Card className="mb-3">
              <Card.Header className="p-3 d-flex justify-content-between align-items-center">
              <Card.Title className="m-0">RPA Essentials for Students (Automation 360)</Card.Title>
                <Card.Subtitle className="text-muted">Automation Anywhere|2024</Card.Subtitle>
              </Card.Header>
            </Card>
            </AnimatedCard>
            <AnimatedCard>
            <Card className="mb-3">
              <Card.Header className="p-3 d-flex justify-content-between align-items-center">
              <Card.Title className="m-0">RPA Basics & Introductions to UiPath (Credential ID: FQY3QXE8YRDD)</Card.Title>
                <Card.Subtitle className="text-muted">Coursera|2023</Card.Subtitle>
              </Card.Header>
            </Card>
            </AnimatedCard>
            <AnimatedCard>
            <Card className="mb-3">
              <Card.Header className="p-3 d-flex justify-content-between align-items-center">
              <Card.Title className="m-0">Foundations: Data, Everywhere (Credential ID: 2WN8US5EZYL4)</Card.Title>
                <Card.Subtitle className="text-muted">Coursera|2023</Card.Subtitle>
              </Card.Header>
            </Card>
            </AnimatedCard>
            <AnimatedCard>
            <Card className="mb-3">
              <Card.Header className="p-3 d-flex justify-content-between align-items-center">
              <Card.Title className="m-0">How to Manage Lean Six Sigma Project (Part II)</Card.Title>
                <Card.Subtitle className="text-muted">LinkedIn|2022</Card.Subtitle>
              </Card.Header>
            </Card>
            </AnimatedCard>
            <AnimatedCard>
            <Card className="mb-3">
              <Card.Header className="p-3 d-flex justify-content-between align-items-center">
              <Card.Title className="m-0">How to Manage Lean Six Sigma Project (Part I)</Card.Title>
                <Card.Subtitle className="text-muted">LinkedIn|2022</Card.Subtitle>
              </Card.Header>
            </Card>
            </AnimatedCard>
            <AnimatedCard>
            <Card className="mb-3">
              <Card.Header className="p-3 d-flex justify-content-between align-items-center">
              <Card.Title className="m-0">Six Sigma Foundations</Card.Title>
                <Card.Subtitle className="text-muted">LinkedIn|2022</Card.Subtitle>
              </Card.Header>
            </Card>
            </AnimatedCard>
            <AnimatedCard>
            <Card className="mb-3">
              <Card.Header className="p-3 d-flex justify-content-between align-items-center">
              <Card.Title className="m-0">Operational Excellence Foundations</Card.Title>
                <Card.Subtitle className="text-muted">LinkedIn|2022</Card.Subtitle>
              </Card.Header>
            </Card>
            </AnimatedCard>
            <AnimatedCard>
            <Card className="mb-3">
              <Card.Header className="p-3 d-flex justify-content-between align-items-center">
              <Card.Title className="m-0">Machine Learning with Python (Credential ID: FFH9XZGKTXQM)</Card.Title>
                <Card.Subtitle className="text-muted">Coursera|2022</Card.Subtitle>
              </Card.Header>
            </Card>
            </AnimatedCard>
            <AnimatedCard>
            <Card className="mb-3">
              <Card.Header className="p-3 d-flex justify-content-between align-items-center">
              <Card.Title className="m-0">The Fundamentals of Digital Marketing (Credential ID: FSH WEO 53X)</Card.Title>
                <Card.Subtitle className="text-muted"> Google Digital Garage|2022</Card.Subtitle>
              </Card.Header>
            </Card>
            </AnimatedCard>
            <AnimatedCard>
            <Card className="mb-3">
              <Card.Header className="p-3 d-flex justify-content-between align-items-center">
              <Card.Title className="m-0">JavaScript Algorithms and Data Structures</Card.Title>
                <Card.Subtitle className="text-muted">FreeCodeCamp|2022</Card.Subtitle>
              </Card.Header>
            </Card>
            </AnimatedCard>
          </Col>
        </Row>
      </Container>
      </Root>
  );
}

export default Resume;
