import React,{useState}from "react";
import './Course.css';
import{
    Card,
    CardBody,
    CardText,
    CardFooter,
    Button,
    Container,
    CardSubtitle,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input,
    Label

} from 'reactstrap';
import axios from "axios";
import base_url from "../api/services";
import { toast } from "react-toastify";
const Course =({course,update}) =>
{
    const [isUpdating, setIsUpdating] = useState(false);
    const [updatedCourse, setUpdatedCourse] = useState({ ...course });
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
      };
    
      const updateCourse = () => {
        axios.put(`${base_url}/courses/update/${updatedCourse.id}`, updatedCourse)
          .then((response) => {
            toggleModal();
            console.log(response);
            if (response.data && response.data.success) {
              toast.success("Course updated");
              // update(updatedCourse.id, updatedCourse);
            } else {
              toast.error("Course not updated. Server problem.");
            }
            // console.info(response)
          })
         
          .catch((error) => {
            console.log(error);
            // toast.error(error);
            // toast.error("Course not updated. An error occurred.");
          });
      };
      
    const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedCourse({ ...updatedCourse, [name]: value });
    };
    const deletecourse=(id)=>
    {
        axios.delete(`${base_url}/courses/${id}`).then(
            (response)=>{
                toast.success("course deleted");
                update(id);

            },
            (error)=>
            {
                toast.error("course not deleted !! server problem");

            }
        )
    }
    return(
        <Card>

            <CardBody className="text-center">

               <CardSubtitle className="font">{course.title}</CardSubtitle>

              <CardText>{course.description}</CardText>

              <Container className="text-center">

                <Button color="danger" outline onClick={()=>
                deletecourse(course.id)}>Delete</Button>

                <Button
            color="warning"
            className="mar"
            onClick={() => {
              setUpdatedCourse({ ...course });
              toggleModal();
              
            }}
            outline
          >
            Update
          </Button>
              </Container>
            </CardBody>
          <Modal isOpen={modal} toggle={toggleModal}>
          <ModalHeader toggle={toggleModal}>Update Course</ModalHeader>
          <ModalBody>
          <Label for="title">Course Title</Label>
          <Input
            type="text"
            name="title"
            id="title"
            value={updatedCourse.title}
            onChange={handleInputChange}
          />
          <Label for="description">Course Description</Label>
          <Input
            type="textarea"
            name="description"
            id="description"
            value={updatedCourse.description}
            onChange={handleInputChange}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" outline onClick={updateCourse}>
            Update
          </Button>{" "}
          <Button color="secondary" outline onClick={toggleModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
        </Card>
    );

};
export default Course;